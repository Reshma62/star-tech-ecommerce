const express = require("express");
const _ = express.Router();
const {createCategoryController, categoryStatusController, subCategoryStatusController, createSubCategoryController, getAllCategoryController, getAllSubCategoryController } = require( "../../controller/categoryController" );

_.post("/createcategory", createCategoryController);
_.post("/categorystatus", categoryStatusController);
_.post("/createsubcategory", createSubCategoryController);
_.post( "/subcategorystatus", subCategoryStatusController );

_.get( "/getallcategory", getAllCategoryController );
_.get( "/getallsubcategory", getAllSubCategoryController );



module.exports = _;
