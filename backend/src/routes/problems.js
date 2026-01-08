const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Problem = require("../models/Problem");

router.post("/", auth, async (req, res) => {
    try {
        const newProblem = new Problem({
            ...req.body,
            user: req.user.id,
        });
        const problem = await newProblem.save();
        res.json(problem);
    } catch (err) {
        res.status(500).send("Error al guardar la publicación");
    }
});

// GET /api/problems/me - Obtener publicaciones del usuario logueado (Usuario A)
router.get("/me", auth, async (req, res) => {
    try {
        // Se buscan problemas donde el campo 'user' coincida con el ID del token
        const problems = await Problem.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(problems);
    } catch (err) {
        res.status(500).send("Error al obtener tus publicaciones");
    }
});

// GET /api/problems - Obtener TODAS las publicaciones (Para Usuario B)
router.get("/", async (req, res) => {
    try {
        const problems = await Problem.find().sort({ createdAt: -1 });
        res.json(problems);
    } catch (err) {
        res.status(500).send("Error al obtener las publicaciones");
    }
});

// GET /api/problems/:id - Obtener una sola problemática
router.get("/:id", async (req, res) => {
    try {
        const problem = await Problem.findById(req.params.id);
        if (!problem) return res.status(404).json({ msg: "Problemática no encontrada" });
        res.json(problem);
    } catch (err) {
        res.status(500).send("Error al obtener el detalle");
    }
});

module.exports = router;
