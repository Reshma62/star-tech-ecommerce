"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// async..await is not allowed in global scope, must use a wrapper
 const emailVerification = async (email, subject, template) => {
   // send mail with defined transport object
   const info = await transporter.sendMail({
     from: `Reshme nila <${process.env.EMAIL}>`, // sender address
     to: email, // list of receivers
     subject: subject, // Subject line
     html: template, // html body
   });
 };

module.exports = emailVerification;