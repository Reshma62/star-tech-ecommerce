const emailValidation = (email) => {
  const regxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  if (!regxEmail) {
    return true;
  }
};
module.exports = emailValidation
