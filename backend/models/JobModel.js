const mongoose = require("mongoose");

// Define the Company schema
const jobSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: [true, "enter the company name"],
  },
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "enter the company id"],
    ref: "Company",
  },
  contact_email: {
    type: String,
    required: [true, "enter the contact email id"],
  },
  phone_no: {
    type: String,
    required: [true, "enter the phone number"],
  },
  description: {
    type: String,
    required: [true, "enter the description "],
  },
  role: {
    type: String,
    required: [true, "enter the role "],
  },
  stipend: {
    type: String,
  },
  category: {
    type: String,
    required: [true, "enter the category "],
  },
  location: {
    type: String,
    required: [true, "enter the location "],
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

// Create the Job model based on the schema
const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
