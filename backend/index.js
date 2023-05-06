const express = require("express");
const authhandler = require('./middleware/authhandler')
const app = express();
const cors = require("cors");
const {getJob}=require('./controllers/jobController')
const {getSchool}=require('./controllers/adminController')
app.use(express.json());

const bodyParser = require("body-parser");
const dotenev = require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const studentRouter = require("./routes/studentRoute");
const schoolRouter = require("./routes/schoolRoute");
const jobsRouter = require("./routes/jobsRoute");
const companyRouter = require("./routes/companyRoute");
const adminRouter = require("./routes/adminRoute");
const commissionRouter = require("./routes/commissionRoute");
const errorHandler = require("./middleware/errorHandler");
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
app.use(cors());
app.get("/alljobs",getJob)
app.get("/schools",getSchool)
app.use(authhandler)
//send response api is working
app.get("/", (req, res) => {
  res.send("API is working");
});
app.post("/grievances", (req, res) => {
  res.status(200).json({ message: "on grievances" });
});

app.use("/student", studentRouter);
app.use("/school", schoolRouter);
app.use("/jobs", jobsRouter);
app.use("/company", companyRouter);
app.use("/admin", adminRouter);
app.use("/commission", commissionRouter);
app.use(errorHandler);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening at ${PORT}`));
