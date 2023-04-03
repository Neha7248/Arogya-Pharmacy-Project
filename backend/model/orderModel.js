let mongoose = require("mongoose");
mongoose.pluralize(null);

let orderSchema = mongoose.Schema({
    _id:Object,

    orderDate:{
        type:Date,
        required:[true,"date is required"]},

    categoryId:{
        type:Number,
        required:[true,"category id required"]
    },

    customerEmailId:{
        type:String,
        required:[true,"EmailId must be required"],
    },   
   
    // contact_No: {
    //     type:Number,
    //     required:[true,"contact number must be required"]
    // },
    order:{
        type:String,
        required:[true,"order must be required"]
    },
    pid:{
      type:Number,
      required:[true,"Product Id is required"]
    },
    

    productQty: {
        type:Number,
        required:[true,"The Quantity of product is required "]
    },
    totalAmt: {
        type:Number,
        required:[true,"show total amount"]
    }
    ,

    
})
 
let orderModel = mongoose.model("Order",orderSchema);

module.exports = orderModel;