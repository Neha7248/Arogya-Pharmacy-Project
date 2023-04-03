let express = require("express");
let router = express.Router();
let customerController = require("../controller/customerController");

//http://localhost:3001/api/customer/storeCustomer
router.post("/storeCustomerInfo",customerController.storeCustomerInfo);
router.get("/findAllCustomers",customerController.findAllCustomers);
router.get("/findCustomerById/:_id",customerController.findCustomerById)
router.get("/findCustomerByName/:first_name",customerController.findCustomerByName);
router.delete("/deleteCustomer",customerController.deleteCustomer);


module.exports=router;