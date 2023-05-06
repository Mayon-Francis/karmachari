const asyncHandler = require("express-async-handler");
const schoolModel = require("../models/SchoolModel");
const studentModel = require("../models/StudentsModel");
const applicationModel = require("../models/ApplicationModel");
const mailer = require("../utils/mailer");
const schoolLogin = asyncHandler(async (req, res) => {
 res.status(200).json(req.user);
});
const getschoolStudnents = asyncHandler(async (req, res) => {
  const get_school_student = await studentModel.find({
    school_id: req.body.id,
  });
  console.log(get_school_student);
  if (get_school_student) {
    res.status(200).json(get_school_student);
  } else {
    res.status(404);
    throw new Error("could't find stdents with this school id");
  }
});
const getbystudentId = asyncHandler(async (req, res) => {
  console.log(req.params.student_id);
  const get_id = await studentModel.findById(req.params.student_id);
  if (get_id) {
    res.status(200).json(get_id);
  } else {
    res.status(404);
    throw new Error("could't find student with this school id");
  }
});
const getapplicationId = asyncHandler(async (req, res) => {
  console.log(req.params.job_id);
  const applied_data = await applicationModel.findById(req.params.job_id);
  if (applied_data.approved === true) {
    res.status(200).json(applied_data);
  } else {
    res.status(500).json({ message: "not approvedd" });
  }
});

const getSchoolStudDetails = asyncHandler(async (req, res) => {
  try{
  let students_details = [];

  if (req.query.verified != "all") {
    students_details = await studentModel.find({
      verified: req.query.verified, school_id:req.user._id
    });
  } else {
    students_details = await studentModel.find({school_id:req.user._id});
  }
  
    res.status(200).json(students_details);
  
}catch(error){
  console.log(error)
  res.status(500).json({ message: "something went wrong" });
}
});
const postSchool = asyncHandler(async (req, res) => {
  const { name, principal, email, phone, district, verified, eol_letter } =
    req.body;
  const school = await schoolModel.create({
    name,
    principal,
    email,
    phone,
    district,
    verified,
    eol_letter,
  });
  if (school) {
    res
      .status(200)
      .json({ message: "successfully stored on school collection" });
  } else {
    res.status(500);
    throw new Error("something went wronf in data passed in");
  }
});
const putStudent = asyncHandler(async (req, res) => {
  // console.log(req.query.id);
  studentModel
    .findByIdAndUpdate(req.body._id, { verified: true }, { new: true })
    .then((updatedData) => {
      mailer(updatedData, "student")
      res.status(200).json({data:updatedData, message:"successfully verified"});
    })
    .catch((error) => {
      res.status(500);
      throw new Error("cant update");
    });
});
module.exports = {
  schoolLogin,
  getschoolStudnents,
  getbystudentId,
  getapplicationId,
  getSchoolStudDetails,
  postSchool,
  putStudent,
};
