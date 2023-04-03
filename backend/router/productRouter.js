let express = require("express");
let router = express.Router();
let productController = require("../controller/productController");

//http://localhost:3001/api/product/addProduct
router.post("/storeProductInfo",productController.storeProductInfo);
router.get("/showAllProducts",productController.showAllProducts);
router.get("/findProductByName/:prodName",productController.findProductByName);



module.exports=router;