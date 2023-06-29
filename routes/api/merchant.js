const express = require("express");
const {
  becomeMerchantController, merchantStatusController,
} = require("../../controller/merchantController");
const _ = express.Router();
_.post("/becomemerchant", becomeMerchantController);
_.post("/merchantstatus", merchantStatusController);
module.exports = _;
