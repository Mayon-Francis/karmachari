const express=require('express')
const router=express.Router()
const {getJob,postJob,postApply}=require('../controllers/jobController')
router.post('/',postJob).post('/apply',postApply)
module.exports=router 
