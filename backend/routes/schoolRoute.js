const express = require("express");
const router = express.Router();
const {
  schoolLogin,
  getschoolStudnents,
  getbystudentId,
  getapplicationId,
  getSchoolStudDetails,
  postSchool,
  putStudent,
} = require("../controllers/schoolController");
router
  .get("/login", schoolLogin)
  .get("/students", getschoolStudnents)
  .get("/student/:student_id", getbystudentId)
  .get("/applications/:job_id", getapplicationId)
  .get("/allstudents", getSchoolStudDetails)
  .post("/register", postSchool)
  .put("/student", putStudent);
module.exports = router;
