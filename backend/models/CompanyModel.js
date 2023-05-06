const mongoose = require("mongoose");

// Define the Company schema
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter the name "],
  },
  description: {
    type: String,
    required: [true, "enter the description "],
  },
  address: {
    type: String,
    required: [true, "enter the address "],
  },
  phone: {
    type: String,
    required: [true, "enter the phone "],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "enter the email "],
  },
  category: {
    type: String,
    required: [true, "enter the category "],
  },
  district: {
    type: String,
    required: [true, "enter the district "],
  },
  gst_number: {
    type: String,
    required: [true, "enter the gstnumber "],
  },
  verified: {
    type: Boolean,
    default: false,
  },
  registration_certificate: {
    type: String, // You can use a different data type or schema for storing documents
    required: [true, "enter the registration certificate "],
  },
  company_logo: {
    type: String,
    required: [true, "enter the company logo "],
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

// Create the Company model based on the schema
const Company = mongoose.model("Company", companySchema);

// Export the Company model for use in other parts of the application
module.exports = Company;
