const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Proposal = require("../models/Proposal");

// POST /api/proposals - Crear una propuesta
router.post("/", auth, async (req, res) => {
    try {
        const newProposal = new Proposal({
            ...req.body,
            proposer: req.user.id,
        });
        const proposal = await newProposal.save();
        res.json(proposal);
    } catch (err) {
        res.status(500).send("Error al enviar la propuesta");
    }
});

module.exports = router;
