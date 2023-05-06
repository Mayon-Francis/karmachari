const asyncHandler=require('express-async-handler')
const StudentsModel=require('../models/StudentsModel')
const adminModel = require("../models/AdminModel")
const firebaseAdmin = require("../utils/firebase");
const minioClient =  require("../utils/minio")

const loginStudent=asyncHandler(async(req,res)=>{
    res.status(200).json(req.user)

})
const postStudent=asyncHandler(async(req,res)=>{
    const{name,email,parent_name,parent_phone,address,location,school,district,school_id,aadhar_card,id_card,resume,dob}=req.body;
    // console.log(req.body)
    // if(!first_name||!last_name||!email||!parent_name||!parent_phone||!address||!location||!school||!district||!school_id||!verified||!aadhar_card||!id_card||!resume){
    //     res.status(400)
    //     throw new Error("some fields are missing")
    // }
    const students=await StudentsModel.create({
       name,
        email,
        parent_name,
        parent_phone,
        address,
        location,
        school,
        district,
        school_id,
        verified:false,
        aadhar_card,
        id_card,
        resume,
        dob
    })
    if(students)
    {
        res.status(200).json({message:"on posting studentcontroller"})
    }
    else{
        res.status(500)
        throw new Error("error on storing")
    }

   

})
module.exports={loginStudent,postStudent}
