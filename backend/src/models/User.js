const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    // Datos Comunes
    names: { type: String, required: true },
    lastnames: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneCode: { type: String },
    phoneNumber: { type: String },
    city: { type: String },
    role: { type: String, enum: ["comunidad", "profesional"], required: true },
    profileImage: { type: String }, // URL de la imagen

    // Campos específicos para Comunidad (Usuario A)
    communityName: { type: String },
    communityDescription: { type: String },

    // Campos específicos para Profesional (Usuario B)
    profession: { type: String },
    professionalStatus: { type: String, enum: ["Estudiando", "Egresado", "Graduado"] },
    professionalProfile: { type: String },

    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
