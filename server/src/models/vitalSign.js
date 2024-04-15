const mongoose = require('mongoose');

const vitalSignSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  bodyTemperature: {
    type: Number,
    required: true
  },
  heartRate: {
    type: Number,
    required: true
  },
  bloodPressure: {
    type: String,
    required: true
  },
  respiratoryRate: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const VitalSign = mongoose.model('VitalSign', vitalSignSchema);

module.exports = VitalSign;
