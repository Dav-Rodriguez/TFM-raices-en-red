const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    communityName: { type: String, required: true },
    location: { type: String, required: true },
    mainImage: { type: String },
    description: { type: String, required: true },
    categoryProject: { type: String, required: true },
    priorityGroups: [{ type: String }],
    helpType: [{ type: String }],
    exchangeProposal: { type: String, required: true },
    gallery: [{ type: String }],
    status: { type: String, default: "activa" },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Problem", ProblemSchema);
