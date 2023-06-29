const Category = require("../models/categoryModels");
const SubCategory = require("../models/subCategory");
const User = require("../models/userModels");

const createCategoryController = async (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.send({ error: "Category name is required" });
  } else {
    let duplicateCategory = await Category.find({ name });
    if (duplicateCategory.length > 0) {
      return res.send({ error: "Category name exits. Try another one" });
    } else {
      let category = new Category({
        name,
        description,
      });
      category.save();
      res.send({ success: "Category created successfully" });
    }
  }
};
const categoryStatusController = async (req, res) => {
  const { name, status } = req.body;

  if (status == "waiting" || status == "rejected") {
    let cat = await Category.findOneAndUpdate(
      { name },
      { isActive: false, status },
      { new: true }
    );
    console.log(cat);
  } else if (status == "approved") {
    await Category.findOneAndUpdate(
      { name },
      { isActive: true, status },
      { new: true }
    );
  }
  res.send({ success: "Category Updated successfully!!!" });
};
// sub category
const createSubCategoryController = async (req, res) => {
  const { name, category } = req.body;

  if (!name) {
    return res.send({ error: "Sub Category name is required" });
  } else if (!category) {
    return res.send({ error: "Select  Category name " });
  } else {
    let duplicateSubCategory = await SubCategory.find({ name });
    if (duplicateSubCategory.length > 0) {
      return res.send({ error: "Sub Category name exits. Try another one" });
    } else {
      let subCategory = new SubCategory({
        name,
        category,
      });
      subCategory.save();

      res.send({ success: "Sub Category created successfully" });
      await Category.findOneAndUpdate(
        { _id: subCategory.category },
        { $push: { sub_category: subCategory._id } },
        { new: true }
      );
    }
  }
};
const subCategoryStatusController = async (req, res) => {
  const { name, status } = req.body;

  if (status == "waiting" || status == "rejected") {
    let cat = await SubCategory.findOneAndUpdate(
      { name },
      { isActive: false, status },
      { new: true }
    );
  } else if (status == "approved") {
    await SubCategory.findOneAndUpdate(
      { name },
      { isActive: true, status },
      { new: true }
    );
  }
  res.send({ success: " Sub Category Updated successfully!!!" });
};

// get all category

const getAllCategoryController = async (req, res) => {
  let allCategory = await Category.find({}).populate("sub_category");

  res.send(allCategory);
};
const getAllSubCategoryController = async (req, res) => {
  let allSubCategory = await SubCategory.find({}).populate("category");

  res.send(allSubCategory);
};

module.exports = {
  createCategoryController,
  categoryStatusController,
  createSubCategoryController,
  subCategoryStatusController,
  getAllCategoryController,
  getAllSubCategoryController,
};
