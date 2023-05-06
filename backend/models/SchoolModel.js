const mongoose = require("mongoose");

// Define the School schema
const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter the name"],
  },
  principal: {
    type: String,
    required: [true, "enter the principal name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "enter the email"],
  },
  phone: {
    type: String,
    required: [true, "enter the phone number"],
  },
  district: {
    type: String,
    required: [true, "enter the district"],
  },
  verified: {
    type: Boolean,
    default: false,
  },
  eol_letter: {
    type: String,
    required: [true, "enter the link"],
  },
});

// Create the School model based on the schema
const School = mongoose.model("School", schoolSchema);

// Export the School model for use in other parts of the application
module.exports = School;
