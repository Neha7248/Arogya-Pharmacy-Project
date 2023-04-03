let express = require("express");
let router = express.Router();
let loginController = require("../controller/loginController");


router.post("/signIn",loginController.signIn);
router.post("/signUp",loginController.signUp);
router.get("/findAllLogin",loginController.findAllLogin);


module.exports=router;