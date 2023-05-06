const asyncHandler = require("express-async-handler");
const jobModel = require("../models/JobModel");
const applicationModel = require("../models/ApplicationModel");
const getJob = asyncHandler(async (req, res) => {
  const { company, district, stipend } = req.query;
  let job_data = await jobModel
    .find({})
    .populate("company_id")
    .exec()
    .then((jobs) => {
      return jobs;
    })
    // console.log(company,district,stipend)
    // console.log(job_data)
//    job_data=job_data.filter((jobs)=>{
//     console.log("hetre",jobs.company_id.district)
//     return (jobs.company_name===company&&jobs.company_id.district===district&&jobs.stipend===stipend)
//    })
  if(job_data)
  {
      res.status(200).json(job_data)
  }
});
const postJob = asyncHandler(async (req, res) => {
  const {
    company_name,
    company_id,
    contact_email,
    phone_no,
    description,
    role,
    stipend,
    category,
    location,
    deleted,
  } = req.body;
  const job = await jobModel.create({
    company_name,
    company_id,
    contact_email,
    phone_no,
    description,
    role,
    stipend,
    category,
    location,
    deleted,
  });
  if (job) {
    res.status(200).json({ message: "successfully stored into the job" });
  } else {
    res.status(500);
    throw new Error("error on inserting into database");
  }
});
const postApply = asyncHandler(async (req, res) => {
  const { job_id, job_name, student_name, student_id, school, approved } =
    req.body;
  const post_apply = await applicationModel.create({
    job_id,
    job_name,
    student_name,
    student_id,
    school,
    approved,
  });
  if (post_apply) {
    res.status(200).json(post_apply);
  } else {
    res.status(500);
    throw new Error("error on stroing the data");
  }
});
module.exports = { getJob, postJob, postApply };
