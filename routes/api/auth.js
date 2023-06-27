const express = require("express");
const { registationController, otpMatchController, loginController } = require( "../../controller/authController" );
const _ = express.Router();

_.post("/registation", registationController)
_.post("/emailverification", otpMatchController);
_.post("/login", loginController);
module.exports = _;
