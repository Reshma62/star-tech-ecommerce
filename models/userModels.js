const mongooes = require("mongoose");

const { Schema } = mongooes;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
    enum:["admin","user", "merchant"]
  },
  merchant: {
    type: Boolean,
    default: false
  },
  emailVerfied: {
    type: Boolean,
    default: false
  },
  avater: {
    type: String,
  },
  otp: {
    type: String,
  },
  facebookId: {
    type: String,
  },
  linkdinId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default:Date.now()
  },
  updatedAt: {
    type: Date,
  },


});

module.exports = mongooes.model("User", userSchema);
