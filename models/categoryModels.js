const mongooes = require("mongoose");
const { Schema } = mongooes;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    default: "waiting",
    enum: ["approved", "waiting", "rejected"],
  },

  sub_category: [
    {
      type: Schema.Types.ObjectId,
      ref: "SubCategory",
    },
  ],
  updateAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongooes.model("Category", categorySchema);
