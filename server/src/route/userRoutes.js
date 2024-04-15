const express = require("express");
const userRouter = express.Router();
const User = require("../models/user.js");

// Route to get all users
userRouter.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = userRouter;
