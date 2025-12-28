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

module.exports = router;
