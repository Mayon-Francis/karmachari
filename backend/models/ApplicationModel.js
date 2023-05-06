const mongoose = require("mongoose");

// Define the Applications schema
const applicationsSchema = new mongoose.Schema({
  job_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "enter the phone number"],
    ref: "Job",
  },
  job_name: {
    type: String,
    required: [true, "enter the job name"],
  },
  student_name: {
    type: String,
    required: [true, "enter the student name"],
  },
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "enter the phone number"],
    ref: "Student",
  },
  time: {
    type: Date,
    default: Date.now,
  },
  school: {
    type: String,
    required: [true, "enter the school name"],
  },
  approved: {
    type: Boolean,
    default: false,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

// Create the Applications model based on the schema
const Applications = mongoose.model("Applications", applicationsSchema);

// Export the Applications model for use in other parts of the application
module.exports = Applications;
