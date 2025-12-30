const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Proposal = require("../models/Proposal");
const Problem = require("../models/Problem");

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

// GET /api/proposals/received - Obtener propuestas recibidas por el Usuario A
router.get("/received", auth, async (req, res) => {
    try {
        // Buscar los IDs de los problemas que pertenecen al Usuario A
        const myProblems = await Problem.find({ user: req.user.id }).select("_id");
        const problemIds = myProblems.map((p) => p._id);

        // Buscar las propuestas que apunten a esos IDs y traer info del Usuario B (proposer)
        const proposals = await Proposal.find({ problem: { $in: problemIds } })
            .populate("proposer", "names lastnames")
            .populate("problem", "title")
            .sort({ createdAt: -1 });

        res.json(proposals);
    } catch (err) {
        res.status(500).send("Error al obtener las propuestas recibidas");
    }
});

// PATCH /api/proposals/:id/status - Actualizar estado de la propuesta
router.patch("/:id/status", auth, async (req, res) => {
    try {
        const { status } = req.body;
        // Se valida que el estado sea uno de los permitidos
        if (!["Aceptada", "Rechazada", "Enviada"].includes(status)) {
            return res.status(400).json({ msg: "Estado no válido" });
        }

        const proposal = await Proposal.findByIdAndUpdate(
            req.params.id,
            { status: status },
            { new: true } // Devuelve el documento actualizado
        );

        if (!proposal) return res.status(404).json({ msg: "Propuesta no encontrada" });
        res.json(proposal);
    } catch (err) {
        res.status(500).send("Error al actualizar la propuesta");
    }
});

// GET /api/proposals/my-proposals - Obtener propuestas enviadas por el Usuario B
router.get("/my-proposals", auth, async (req, res) => {
    try {
        // Buscar propuestas donde el proposer sea el ID del token actual
        const proposals = await Proposal.find({ proposer: req.user.id })
            .populate("problem", "title mainImage") // Traer información del proyecto destino
            .sort({ createdAt: -1 });

        res.json(proposals);
    } catch (err) {
        res.status(500).send("Error al obtener tu historial de propuestas");
    }
});

// GET /api/proposals/:id - Obtener una propuesta por su ID (para la vista de detalle)
router.get("/:id", auth, async (req, res) => {
    try {
        const proposal = await Proposal.findById(req.params.id)
            .populate("proposer", "names lastnames communityName") // Datos del profesional
            .populate("problem", "title mainImage"); // Datos de la problemática original

        if (!proposal) return res.status(404).json({ msg: "Propuesta no encontrada" });
        res.json(proposal);
    } catch (err) {
        res.status(500).send("Error al obtener la propuesta");
    }
});

module.exports = router;
