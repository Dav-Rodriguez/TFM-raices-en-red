const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Configuración de CORS
const allowedOrigins = [
    "http://localhost:4200", // Angular local
    "https://tu-proyecto.netlify.app", // URL de Netlify
];

app.use(
    cors({
        origin: function (origin, callback) {
            // Permitir peticiones sin origen o si el origen está en whitelist
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error("No permitido por CORS"));
            }
        },
    })
);

app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/problems", require("./routes/problems"));
app.use("/api/proposals", require("./routes/proposals"));

// Conexión a MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((err) => console.error("Error de conexión:", err));

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("API de Raíces en Red funcionando en producción");
});

// Puerto dinámico para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
