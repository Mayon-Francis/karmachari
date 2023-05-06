const mongoose = require("mongoose");

// Define the Admin schema
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter an name "],
  },
  email: {
    type: String,
    required: [true, "enter the email"],
  },
  phone_no: {
    type: String,
    required: [true, "enter the email"],
  },
});

// Create the Admin model based on the schema
const Admin = mongoose.model("Admin", adminSchema);

// Export the Admin model for use in other parts of the application
module.exports = Admin;
