const mongooes = require("mongoose");

const { Schema } = mongooes;

const storeSchema = new Schema({
  storeName: {
    type: String,
    required: true,
  },
  officialEmail: {
    type: String,
    required: true,
  },
  officialPhone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
  ],

  status: {
    type: String,
    default: "waiting",
    enum: ["waiting", "approved", "rejected"],
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  updateAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongooes.model("Store", storeSchema);
