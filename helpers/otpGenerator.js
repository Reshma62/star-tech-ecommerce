const otpGenerator = () => {
  const otp = Math.round(Math.random() * 10000);
  let otpStr = otp + "";
  if (otpStr.length == 4) {
    return otp;
  } else {
    console.log("3-->", otp);
    return otpGenerator();
  }
};
module.exports = otpGenerator;
