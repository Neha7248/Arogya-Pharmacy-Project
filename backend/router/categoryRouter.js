let express = require("express");
let router = express.Router();
let categoryController = require("../controller/categoryController");

//http://localhost:3000/api/category/addCategoryInfo
router.post("/addCategoryInfo",categoryController.addCategoryInfo);
router.get("/showAllCategorys",categoryController.showAllCategorys);
router.get("/findCategoryByName/:disease_name",categoryController.findCategoryByName);
router.patch("/updateDiseaseCategory",categoryController.updateDiseaseCategory);
router.delete("/deleteCategoryById",categoryController.deleteCategoryById);

module.exports=router;