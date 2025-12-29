const mongoose = require("mongoose");

const ProposalSchema = new mongoose.Schema({
    problem: { type: mongoose.Schema.Types.ObjectId, ref: "Problem", required: true },
    proposer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    motivation: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    specialty: { type: String, required: true },
    modality: { type: String, enum: ["presencial", "híbrido", "remoto"], required: true },
    programType: { type: String, required: true },
    status: { type: String, default: "Enviada" }, // Enviada, Aceptada, Rechazada
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Proposal", ProposalSchema);
