const asyncHandler=require('express-async-handler')
const commissionModel=require('../models/CommissionModel')
const postCommission=asyncHandler(async(req,res)=>{
    const{name,email,phone_no}=req.body
    const commission=await commissionModel.create({
        name,email,phone_no,verified:false                                                                              
    })
    if(commission){

        res.status(200).json({message:"successfully stored commission data"})
    }
    else{
        res.status(500)
        throw new Error("something went wrong")
    }
})

const commissionLogin=asyncHandler(async(req,res)=>{
    res.status(200).json(req.user)
}
)
module.exports={postCommission, commissionLogin}
