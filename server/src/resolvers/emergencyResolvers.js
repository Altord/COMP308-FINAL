const Emergency = require("../models/emergency");
const User = require("../models/user");

const resolvers = {
  getAllEmergencies: async () => {
    try {
      const emergencies = await Emergency.find().populate("patient");
      return emergencies.map((emergency) => ({
        id: emergency._id,
        emergency: emergency.emergency,
        patient: {
          id: emergency.patient._id,
        },
        createdAt: emergency.createdAt.toISOString(),
      }));
    } catch (err) {
      console.error("Error fetching emergencies:", err);
      throw new Error("Failed to fetch emergencies.");
    }
  },
  postEmergency: async ({ emergencyInput }) => {
    try {
      const { emergency, patientId } = emergencyInput;

      const existingUser = await User.findById(patientId);
      if (!existingUser) {
        throw new Error("Patient not found.");
      }

      const newEmergency = new Emergency({
        emergency,
        patient: patientId,
      });

      const savedEmergency = await newEmergency.save();

      await savedEmergency.populate("patient").execPopulate();

      return {
        id: savedEmergency._id,
        emergency: savedEmergency.emergency,
        patient: {
          id: savedEmergency.patient._id,
        },
        createdAt: savedEmergency.createdAt.toISOString(),
      };
    } catch (err) {
      console.error("Error posting emergency:", err);
      throw new Error("Failed to post emergency.");
    }
  },
};

module.exports = resolvers;
