const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Función de lógica de registro
exports.register = async (req, res) => {
    try {
        const { email, password, role, names, lastnames, ...extraData } = req.body;

        // Verificar si el usuario ya existe
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "El usuario ya existe" });

        // Crear instancia del usuario
        user = new User({
            email,
            password,
            role,
            names,
            lastnames,
            ...extraData, // Captura communityName o profession
        });

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Guardar en BD
        await user.save();

        // Crear el Token JWT
        const payload = { user: { id: user.id, role: user.role } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "8h" }, (err, token) => {
            if (err) throw err;
            res.json({ token, user: { id: user.id, names: user.names, role: user.role } });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Error en el servidor");
    }
};

// Función de lógica de login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar si el usuario existe
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: "Credenciales inválidas" });

        // Comparar contraseña encriptada
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Credenciales inválidas" });

        // Si todo es correcto, crear y enviar Token
        const payload = { user: { id: user.id, role: user.role } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "8h" }, (err, token) => {
            if (err) throw err;
            res.json({
                token,
                user: { id: user.id, names: user.names, role: user.role },
            });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Error en el servidor");
    }
};
