const mongoose = require("mongoose");

// Define the Student schema
const studentSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: [true, "enter last name"],
  },
  email: {
    type: String,
    unique: true,
    index: true,
    required: [true, "enter email id"],
  },
  parent_name: {
    type: String,
    required: [true, "enter parent name"],
  },
  parent_phone: {
    type: String,
    required: [true, "enter parentPhone"],
  },
  address: {
    type: String,
    required: [true, "enter address"],
  },
  school: {
    type: String,
    required: [true, "enter school name"],
  },
  district: {
    type: String,
    required: [true, "enter district name"],
  },
  school_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "enter the school id"],
    ref: "School",
  },
  verified: {
    type: Boolean,
    default: false,
  },
  aadhar_card: {
    type: String,
    required: [true, "enter aadhar card number"],
  },
  id_card: {
    type: String,
    required: [true, "enter id card number"],
  },
  resume: {
    type: String,
    required: [true, "enter resume link"],
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  dob:{
    type:String,
    required:[true,"enter dob"]
  }
});

// Create the Student model based on the schema
const Student = mongoose.model("Student", studentSchema);

// Export the Student model for use in other parts of the application
module.exports = Student;
