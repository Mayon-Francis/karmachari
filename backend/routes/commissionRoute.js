const express =require('express')
const router=express.Router()
const {postCommission, commissionLogin}=require('../controllers/commissionController')
router.get('/login', commissionLogin ).post('/register',postCommission)
module.exports=router
