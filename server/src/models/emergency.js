const mongoose = require("mongoose");

const emergencySchema = new mongoose.Schema({
  emergency: {
    type: String,
    required: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Emergency", emergencySchema);
