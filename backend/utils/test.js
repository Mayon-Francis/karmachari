const adminModel = require("../models/AdminModel")

const admin = new adminModel({
    email:"shahijaganath01@gmail.com",
    name:"Jagan",
    phone_no:"123456789",

})

admin.save().then(()=>{
    console.log("admin saved")
}).catch((err)=>{
    console.log(error)
})