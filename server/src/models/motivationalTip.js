const mongoose = require('mongoose');

const motivationalTipSchema = new mongoose.Schema({
  tipText: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const MotivationalTip = mongoose.model('MotivationalTip', motivationalTipSchema);

module.exports = MotivationalTip;
