const asyncHandler = require("express-async-handler");
const adminModel = require("../models/AdminModel");
const studentModel = require("../models/StudentsModel");
const schoolModel = require("../models/SchoolModel");
const companyModel = require("../models/CompanyModel");
const jobModel = require("../models/JobModel");
const commissionModel = require("../models/CommissionModel");
const mailer = require("../utils/mailer");

const firebaseAdmin = require("../utils/firebase");

const adminLogin = asyncHandler(async (req, res) => {
  // const admin_login=await adminModel.findOne({email:req.user.email})
  // if(admin_login){
  //     res.status(200).json(admin_login)
  // }
  // else{
  //     res.status(404)
  //     throw new Error("couldn't find admin with this id")
  // }
  res.status(200).json(req.user);
});
const getappliJob_id = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `getting application by job id on ${req.params.job_id}` });
});
const getStudentid = asyncHandler(async (req, res) => {
  const students_data = await studentModel.findById(req.params.id);
  if (students_data) {
    res.status(200).json(students_data);
  } else {
    res.status(500);
    throw new Error("no user with this id");
  }
});
const getadminCompany = asyncHandler(async (req, res) => {
  let company_details = [];
  if (req.query.verified != "all") {
    company_details = await companyModel.find({ verified: req.query.verified });
  } else {
    company_details = await companyModel.find({});
  }
  if (company_details) {
    res.status(200).json(company_details);
  } else {
    res
      .status(500)
      .json({ message: "Something went wrong." });
  }
});
const putSchool = asyncHandler(async (req, res) => {

  schoolModel
    .findByIdAndUpdate(req.body._id, { verified: true }, { new: true })
    .then((updatedData) => {
      
      mailer(updatedData, "school")
      res.status(200).json({data:updatedData, message:"Successfully Verified"});
    })
    .catch((error) => {
      res.status(500);
      throw new Error("cant update");
    });
  // res.status(200).json({message:`on putting school students ${req.body}`})
});
const putCompany = asyncHandler(async (req, res) => {
  companyModel
    .findByIdAndUpdate(req.body._id, { verified: true }, { new: true })
    .then((updatedData) => {
      mailer(updatedData, "comapny");
      res.status(200).json({data:updatedData, message:"Successfully Verified"});
    })
    .catch((error) => {
      cons
      res.status(500);
      throw new Error("cant update");
    });
  // res.status(200).json({message:`on putting company data ${req.body}`})
});

const putCommission = asyncHandler(async (req, res) => {
  commissionModel
    .findByIdAndUpdate(req.body._id, { verified: true }, { new: true })
    .then((updatedData) => {
      mailer(updatedData,"commission");
      res.status(200).json({data:updatedData, message:"Successfully Verified"});
    })
    .catch((error) => {
      res.status(500);
      throw new Error("cant update");
    });
  // res.status(200).json({message:`on putting company data ${req.body}`})
});
const deleteCompany = asyncHandler(async (req, res) => {
  companyModel
    .findByIdAndDelete(req.query.id)
    .then((deleteCompany) => {
      res.status(200).json(deleteCompany);
    })
    .catch((error) => {
      res.status(500);
      throw new Error("error on deleting");
    });
});
const deleteJob = asyncHandler(async (req, res) => {
  jobModel
    .findByIdAndDelete(req.query.id)
    .then((deletejob) => {
      res.status(200).json(deletejob);
    })
    .catch((error) => {
      res.status(500);
      throw new Error("error on deleting");
    });
  // res.status(200).json({message:`on deleting job data ${req.body}`})
});
const getSchool = asyncHandler(async (req, res) => {
  const get_school = await schoolModel.find({});
  if (get_school) {
    res.status(200).json(get_school);
  } else {
    res.status(500);
    throw new Error("no schools are available");
  }
  
});
const getAdmin = asyncHandler(async (req, res) => {
  const get_admin = await adminModel.find({});
  if (get_admin) {
    res.status(200).json(get_admin);
  } else {
    res.status(500);
    throw new Error("no admin are available");
  }
  res.status(200).json({ message: `on getting admin data ` });
});

const getCommision = asyncHandler(async (req, res) => {
  let query = {};
  if (req.query.verified != "all") {
    query = { verified: req.query.verified };
  }

  const get_commision = await commissionModel.find(query);
  if (get_commision) {
    res.status(200).json(get_commision);
  } else {
    res.status(500);
    throw new Error("no commision are available");
  }
 
});


const getSchoolStudDetails = asyncHandler(async (req, res) => {
  

   let  students_details = await studentModel.find({
      verified: true
   })
  if (students_details) {
    res.status(200).json(students_details);
  } else {
    res
      .status(500)
      .json({ message: "Something went wrong." });
  }
});


module.exports = {
  adminLogin,
  getappliJob_id,
  getStudentid,
  getadminCompany,
  putSchool,
  putCompany,
  putCommission,
  deleteCompany,
  deleteJob,
  getSchool,
  getAdmin,
  getCommision,
  getSchoolStudDetails
};
