const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    priorityGroups: [{ type: String }],
    helpType: [{ type: String }],
    offerInExchange: { type: String },
    mainImage: { type: String },
    gallery: [{ type: String }],
    status: { type: String, enum: ["Disponible", "En Proceso", "Finalizado"], default: "Disponible" },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Problem", ProblemSchema);
