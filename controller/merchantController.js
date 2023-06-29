const emailValidation = require("../helpers/emailValidation");
const User = require("../models/userModels");
const Store = require("../models/merchantModels");
const userModels = require("../models/userModels");
const becomeMerchantController = async (req, res) => {
  const {
    storeName,
    officialEmail,
    officialPhone,
    address,
    owner,
    products,
    status,
    updateAt,
    createdAt,
  } = req.body;

  if (!storeName) {
    return res.send({ error: "Store name is required" });
  } else if (!officialEmail) {
    return res.send({ error: "Email is required" });
  } else if (emailValidation(officialEmail)) {
    return res.send({ error: "Email is not valid" });
  } else if (!officialPhone) {
    return res.send({ error: "Phone number is required" });
  } else if (!address) {
    return res.send({ error: "Address is required" });
  } else {
    let duplicateEmail = await Store.find({ officialEmail });
    let duplicateStore = await Store.find({ storeName });

    if (duplicateEmail.length > 0) {
      return res.send({ error: "Email is Exits" });
    } else {
      if (duplicateStore.length > 0) {
        return res.send({ error: "Store is Exits" });
      } else {
        let store = new Store({
          storeName,
          officialEmail,
          officialPhone,
          address,
          owner,
          products,
          status,
          updateAt,
          createdAt,
        });

        if (store) {
          store.save();
          console.log("stroe ace");
        }
        res.send({ success: "Congratulation... Now you are a merchant" });
        await User.findOneAndUpdate(
          { _id: store.owner },
          { role: "merchant", merchant: true },
          { new: true }
        );
      }
    }
  }
};

const merchantStatusController = async (req, res) => {
  const { storeName, status } = req.body;
  if (status == "waiting" || status == "rejected") {
    await Store.findOneAndUpdate(
      { storeName },
      { status, isActive: false },
      { new: true }
    );
  } else if (status == "approved") {
    await Store.findOneAndUpdate(
      { storeName },
      { status, isActive: true },
      { new: true }
    );
  }
  res.send({ success: "merchant status updated ........" });
};

module.exports = { becomeMerchantController, merchantStatusController };
