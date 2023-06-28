const bcrypt = require("bcrypt");
const emailTemplate = require("../helpers/emailTemplate");
const emailValidation = require("../helpers/emailValidation");
const emailVerification = require("../helpers/emailVerification");
const otpGenerator = require("../helpers/otpGenerator");
const User = require("../models/userModels");

const registationController = async (req, res) => {
  const {
    fullName,
    email,
    password,
    address,
    role,
    merchant,
    emailVerfied,
    avater,
    otp,
    facebookId,
    linkdinId,
    createdAt,
    updatedAt,
  } = req.body;

  if (!fullName) {
    return res.send({ error: "Full name is required" });
  } else if (!email) {
    return res.send({ error: "Email is required" });
  } else if (emailValidation(email)) {
    return res.send({ error: "Email is invalid" });
  } else if (!password) {
    return res.send({ error: "Password is required" });
  } else {
    const duplicateEmail = await User.find({ email });
    if (duplicateEmail.length > 0) {
      return res.send({ error: "Email is already exists" });
    }
    bcrypt.hash(password, 10, async function (err, hash) {
      let user = new User({
        fullName,
        email,
        password: hash,
        address,
        role,
        merchant,
        emailVerfied,
        avater,
        otp,
        facebookId,
        linkdinId,
        createdAt,
        updatedAt,
      });
      user.save();
      let otpNum = otpGenerator();
      emailVerification(
        user.email,
        "Email Verification",
        emailTemplate(otpNum, user.fullName)
      );

      setTimeout(async () => {
        await User.findOneAndUpdate(
          { email },
          { $unset: { otp: otpNum } },
          { new: true }
        );
        // console.log("otp deleted");
      }, 20000);
      await User.findOneAndUpdate({ email }, { otp: otpNum }, { new: true });
      return res.send({
        success:
          "Registation Successfully Done!!! Please check your mail",
        userName: user.fullName,
        userEmail: user.email,
        userPass: user.password,
      });
    });
  }
};
const otpMatchController = async (req, res) => {
  const { email, otp } = req.body;
  let otpFind = await User.find({ email });
  if (otp.length > 0) {
    if (otpFind[0].otp == otp) {
      await User.findOneAndUpdate(
        { email },
        { $unset: { otp: "" } },
        { new: true }
      );
      res.send({ success: "Otp matched" });
    }
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.send({ error: "Email is required" });
  } else if (emailValidation(email)) {
    return res.send({ error: "Email is invalid" });
  } else if (!password) {
    return res.send({ error: "Password is required" });
  } else {
    let existingUser = await User.find({ email });
    // console.log(existingUser);
    if (existingUser.length > 0) {
      bcrypt.compare(
        password,
        existingUser[0].password,
        function (err, result) {
          console.log(password, "==========", existingUser[0].password);
          if (result) {
            // result == true
            console.log(result);
            res.send({
              success: "Login Successfully Done!!! Please wait for redriction",
              userName: existingUser[0].fullName,
              userEmail: existingUser[0].email,
            });
          } else {
            return res.send({ error: "Oops Crendtial not matched too..." });
          }
        }
      );
    } else {
      return res.send({ error: "Crendtial not matched" });
    }
  }
};

module.exports = { registationController, otpMatchController, loginController };
