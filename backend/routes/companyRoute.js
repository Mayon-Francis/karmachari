const express = require("express");
const router = express.Router();
const {
  companyLogin,
  getStudentid,
  postCompany,
  getJobs
} = require("../controllers/companyController");
router
  .get("/login", companyLogin)
  .get("/student/:id", getStudentid)
  .post("/register", postCompany)
  .get("/jobs", getJobs)
module.exports = router;
