const express = require("express");
const tipRouter = express.Router();
const MotivationalTip = require("../models/motivationalTip.js");

// Route to get all tips
tipRouter.get("/", async (req, res) => {
    try {
        const tips = await MotivationalTip.find();
        res.json(tips);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to add a new tip
tipRouter.post("/", async (req, res) => {
    const { tipText } = req.body;
    try {
        const newTip = await MotivationalTip.create({ tipText });
        res.status(201).json(newTip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = tipRouter;

