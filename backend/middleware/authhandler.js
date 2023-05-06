// middle ware for getting the token from the header and verifying it

var admin = require("../utils/firebase");
var adminModel = require("../models/AdminModel");
var companyModel = require("../models/CompanyModel");
var studentModel = require("../models/StudentsModel");
var schoolModel = require("../models/SchoolModel");
var jobModel = require("../models/JobModel");
var applicationModel = require("../models/ApplicationModel");
var commissionModel = require("../models/CommissionModel");

const collections = {
    admin: commissionModel,
    company: companyModel,
    student: studentModel,
    school: schoolModel,
    jobs: companyModel,
    application: applicationModel,
    commission: commissionModel
}

publicUrls = [
  '/alljobs',
  '/schools'
]


const checkAuth = async (req, res, next) => {
  try {
    let urlPath = req.path
    if(publicUrls.find((url) => urlPath == url)){
        return next()
    }
    urlPath = urlPath.split('/')

    console.log(urlPath[1])                                                        
    if(urlPath.includes('register')){
        return next()
    }
    const token = req.header("x-auth-token");
    if (!token) {
      return res
        .status(401)
        .json({ msg: "No authentication token, access denied" });
    }

    let user =  await admin.auth().verifyIdToken(token);
    console.log(user)
    if (!user) {
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied" });
    }
    console.log(urlPath[1])
    user = await collections[urlPath[1]].findOne({ email: user.email, verified:true });
    if (!user) {
        return res
            .status(401)
            .json({ msg: "user not yet registered, authorization denied" });
    }
    console.log(user)
    req.user = user;
    next();
  } catch (err) {
    console.log()
    res.status(500).json({ error: err.message });
  }
};

// sample axios call in frontend:
// const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/<path>`, ,{
//   headers: {
//     "x-auth-token": authToken,
//   }
// });

module.exports = checkAuth;