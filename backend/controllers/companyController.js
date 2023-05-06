const asyncHandler=require('express-async-handler')
const companyModel=require('../models/CompanyModel')
const studentModel=require('../models/StudentsModel')
const jobModel = require('../models/JobModel')
const companyLogin=asyncHandler(async(req,res)=>{
    res.status(200).json(req.user)
})
const getStudentid=asyncHandler(async(req,res)=>{
    const students_data=await studentModel.findById(req.params.id)
    if(students_data)
    {
        res.status(200).json(students_data)
    }
    else{
        res.status(500)
        throw new Error("no user with this id")
    }

  res
    .status(200)
    .json({
      message: `getting details ofstudents in company id ${req.params.id}`,
    });
});

const getJobs = asyncHandler(async (req, res) => {
  const jobs = await jobModel.find({ company_id: req.user._id });                          
  if (jobs) {                                             
    res.status(200).json(jobs);                                                   
  } else {
    res.status(500);          
    throw new Error("no jobs found");
  }
});                         
const postCompany = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    address,
    phone,
    email,
    category,
    district,
    gst_number,
    verified,
    registration_certificate,
    company_logo,
    deleted,
  } = req.body;
  const company = await companyModel.create({
    name,
    description,
    address,
    phone,
    email,
    category,
    district,
    gst_number,
    verified,
    registration_certificate,
    company_logo,
    deleted,
  });
  if (company) {
    res.status(200).json({ message: `success` });
  } else {
    res.status(500);
    throw new Error("something went wrong");
  }
});
module.exports = { companyLogin, getStudentid, postCompany, getJobs };
