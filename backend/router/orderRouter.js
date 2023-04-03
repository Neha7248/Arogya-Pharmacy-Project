let express = require("express");
let router = express.Router();
let orderController = require("../controller/orderController");

// http://localhost:3001/api/orders/addAllOrder
router.post("/addAllOrder",orderController.addAllOrder);
router.get("/findAllOrders",orderController.findAllOrders);
router.get("/findOrderByCustomerEmailId/:EmailId",orderController.findOrderByCustomerEmailId);
router.patch("/updateCustomerOrder",orderController.updateCustomerOrder);
router.delete("/deleteOrderByCid",orderController.deleteOrderByCid);


module.exports=router;