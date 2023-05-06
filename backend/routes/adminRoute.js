const express = require("express");
const router = express.Router();
const {
  adminLogin,
  getappliJob_id,
  getStudentid,
  getadminCompany,
  putSchool,
  putCompany,
  deleteCompany,
  deleteJob,
  getSchool,
  getAdmin,
  putCommission,
  getCommision,
  getSchoolStudDetails                
} = require("../controllers/adminController");
router
  .get("/login", adminLogin)
  .get("/commission", getCommision)
  .get("/applications/:job_id", getappliJob_id)
  .get("/student/:id", getStudentid)
  .get("/company", getadminCompany)
  .put("/school", putSchool)
  .put("/company", putCompany)
  .put("/commission", putCommission)                                                                                
  .delete("/company", deleteCompany)
  .delete("/job", deleteJob)
  .get("/students", getSchoolStudDetails)
  .get("/school", getSchool)
  .get("/", getAdmin);

module.exports = router;
