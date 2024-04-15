const User = require('../models/user');
const VitalSign = require('../models/vitalSign');
const MotivationalTip = require('../models/motivationalTip');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "sd432uit3hui&32f23lkASn!9"; // Would not work with dotenv

const resolvers = {
  signup: async ({ userInput }) => {
    console.log('Signup request received with userInput:', userInput);
    const { username, password, userType } = userInput;
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        throw new Error('User already exists.');
      }

      // Create new user
      const user = new User({ username, password, userType });
      await user.save();

      // Generate token
      const token = jwt.sign(
        { userId: user.id, username: user.username },
        jwtSecret, 
        { expiresIn: '1h' }
      );

      return { userId: user.id, token, tokenExpiration: 1 };
    } catch (err) {
      console.error('Error signing up:', err);
      throw new Error('Error processing your signup request.');
    }
  },
  login: async ({ username, password }) => {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('User does not exist.');
    }
    console.log('Provided password:', password);
    console.log('Stored hash:', user.password);
    const isValid = await user.validatePassword(password);
    console.log('Password is valid:', isValid);

    if (!isValid) {
      throw new Error('Password is incorrect.');
    }

    const token = jwt.sign({ userId: user.id, username: user.username }, jwtSecret, {
      expiresIn: '1h'
    });
    console.log('UserType: ', user.userType);
    return { userId: user.id, token, tokenExpiration: 1, userType: user.userType };
  },
  enterVitalSigns: async ({ userId, bodyTemperature, heartRate, bloodPressure, respiratoryRate }) => {
    try {
      const vitalSign = new VitalSign({
        userId,
        bodyTemperature,
        heartRate,
        bloodPressure,
        respiratoryRate,
        timestamp: new Date().toISOString()
      });
      await vitalSign.save();
      return vitalSign;
    } catch (error) {
      console.error('Error entering vital signs:', error);
      throw new Error('Error entering vital signs.');
    }
  },
  vitalSigns: async ({ userId }) => {
    try {
      const previousVitalSigns = await VitalSign.find({ userId }).sort({ timestamp: -1 });
      return previousVitalSigns;
    } catch (error) {
      console.error('Error getting previous vital signs:', error);
      throw new Error('Error getting previous vital signs.');
    }
  },
  sendMotivationalTip: async ({ tipText }) => {
    try {
      // Assuming you have a MotivationalTip model
      const motivationalTip = new MotivationalTip({
        tipText,
        timestamp: new Date().toISOString() 
      });
      await motivationalTip.save();
      return motivationalTip;
    } catch (error) {
      console.error('Error sending motivational tip:', error);
      throw new Error('Error sending motivational tip.');
    }
  },
  generateMedicalConditionsList: async ({ symptoms }) => {
    // Logic to generate a list of possible medical conditions based on symptoms
    
  },
};

module.exports = resolvers;
