const nodemailer = require("nodemailer");
const firebaseAdmin = require("./firebase");                                                              
const generatePassword = require('generate-password')




// async..await is not allowed in global scope, must use a wrapper
async function mailer(receiver, role) {
  try {
    let password = generatePassword.generate({length: 10,
      numbers: true});  
    console.log(password)                              
    const newUser = await firebaseAdmin
      .auth()
      .createUser({
        email: receiver.email,
        emailVerified: false,
        password: password,
        displayName: receiver.name,
        disabled: false,
      })
     
     console.log(newUser)
   
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "karmachari.app@gmail.com",
        pass: "bzajtuadmrtmgajy",
      },
    });

    let info = await transporter.sendMail({
      from: '"Karmachari 💼" karmachari.app@gmail.com', // sender address
      to: receiver.email, // list of receivers
      subject: "Welcome to karmachari", // Subject line
      html: `<div style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 4px; padding: 20px;">
      <h3 style="font-weight: bold; margin-top: 0;">Your account has been created!</h3>
      <p style="margin-bottom: 20px;">Use the sign-in credentials below to access your account:</p>
      <p><strong>Email:</strong> ${receiver.email}</p>
      <p><strong>Password:</strong> ${password}</p>
      <p style="margin-top: 20px;">Click the link below to complete your registration:</p>
      <a href="${process.env.FRONTEND_URL}/${role}" style="background-color: #4CAF50; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Complete Registration</a>
    </div>
    `
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  } catch (err) {
    console.log(err);
  }
}
module.exports = mailer;         
