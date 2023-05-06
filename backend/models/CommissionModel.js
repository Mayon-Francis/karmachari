const mongoose = require("mongoose");

// Define the CommissionMode schema
const commissionModeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "enter an commission name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "enter the email "],
  },
  phone_no: {
    type: String,
    required: [true, "enter the phone number "],
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

// Create the CommissionMode model based on the schema
const CommissionMode = mongoose.model("CommissionMode", commissionModeSchema);

// Export the CommissionMode model for use in other parts of the application
module.exports = CommissionMode;
