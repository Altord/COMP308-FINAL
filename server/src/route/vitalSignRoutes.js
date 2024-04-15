const express = require("express");
const VitalSign = require("../models/vitalSign.js");
const User = require("../models/user.js");
const { time } = require("@tensorflow/tfjs-node");
const vitalSignRouter = express.Router();

//get all
vitalSignRouter.get("/", async (req, res) => {
    try {
      const vitals = await VitalSign.find();
      res.json(vitals);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Get specific for a user
vitalSignRouter.get("/:id", async (req, res) => {
    try {
        const { userid } = req.params;
        const user = await User.findById(userid).populate("vitals");
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        res.json(user.vital);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

  // Create a new vital
vitalSignRouter.post("/", async (req, res) => {
    const vital = new VitalSign({
      userId: req.body.userId,
      bodyTemperature: req.body.bodyTemperature,
      heartRate: req.body.heartRate,
      bloodPressure: req.body.bloodPressure,
      respiratoryRate: req.body.respiratoryRate,
      timestamp: req.body.timestamp,
    });  
    try {
      const newVital = await vital.save();
      res.status(201).json(newVital);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Route to update an assignment
  vitalSignRouter.patch("/:vitalId", async (req, res) => {
    const { vitalId } = req.params;
    const { bodyTemperature, heartRate,bloodPressure,respiratoryRate,timestamp } = req.body;
  
    try {
      // Check if the assignment exists
      const vital = await VitalSign.findById(vitalId);
      if (!vital) {
        return res.status(404).json({ message: "Vital not found" });
      }
  
      // Update the assignment fields
      if (bodyTemperature !== undefined) {
        vital.bodyTemperature = bodyTemperature;
      }
  
      if (heartRate !== undefined) {
        vital.heartRate = heartRate;
      }
  
      if (bloodPressure !== undefined) {
        vital.bloodPressure = bloodPressure;
      }
  
      if (respiratoryRate !== undefined) {
        vital.respiratoryRate = respiratoryRate;
      }
  
      if (timestamp !== undefined) {
        vital.timestamp = timestamp;
      }
  
      // Save the updated assignment to the database
      await vital.save();
  
      res.status(200).json({ message: "Vital updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Route to add an assignment
  vitalSignRouter.post("/add-vital", async (req, res) => {
    const {
        userId,
        bodyTemperature,
        heartRate,
        bloodPressure,
        respiratoryRate,
        timestamp,
    } = req.body;
  
    try {
      // Check if the user exists
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Create the assignment
      const vital = new VitalSign({
        userId: userId,
        bodyTemperature,
        heartRate,
        bloodPressure,
        respiratoryRate,
        timestamp,
      });
      
      await vital.save();
  
      return res.status(201).json({
        message: "Vital added successfully",
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });

  module.exports = vitalSignRouter;