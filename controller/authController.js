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
  const duplicateEmail = await User.find({ email });
  if (duplicateEmail.length > 0) {
    return res.send({ error: "Email is already exists" });
  }
  if (!fullName) {
    return res.send({ error: "Full name is required" });
  } else if (!email) {
    return res.send({ error: "Email is required" });
  } else if (emailValidation(email)) {
    return res.send({ error: "Email is invalid" });
  } else if (!password) {
    return res.send({ error: "Password is required" });
  } else {
    let user = new User({
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
    });
    user.save();
    let otpNum = otpGenerator();
    emailVerification(
      user.email,
      "Email Verification",
      emailTemplate(otpNum, user.fullName)
    );

    await User.findOneAndUpdate({ email }, { otp: otpNum }, { new: true });

    setTimeout(async () => {
      await User.findOneAndUpdate(
        { email },
        { $unset: { otp: otpNum } },
        { new: true }
      );
      console.log("otp deleted");
    }, 20000);
    res.send({
      success: "Registation Successfully Done!!! Please check your mail",
      userName: user.fullName,
      userEmail: user.email,
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
  let existingUser = await User.find({ email });
  if (existingUser.length > 0) {
    if (
      email == existingUser[0].email &&
      password == existingUser[0].password
    ) {
      return res.send({ success: "Login in success" });
    } else {
      return res.send({ error: "Credintial not matched" });
    }
  }
};

module.exports = { registationController, otpMatchController, loginController };
