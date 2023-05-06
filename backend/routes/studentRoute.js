const express=require('express')
const router=express.Router()
const {loginStudent,postStudent}=require('../controllers/studentController')
router.get('/login',loginStudent).post('/register',postStudent)
module.exports=router
