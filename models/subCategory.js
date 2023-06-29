const mongooes = require("mongoose");
const { Schema } = mongooes;

const subCategorySchema = new Schema({
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

  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },

  updateAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongooes.model("SubCategory", subCategorySchema);
