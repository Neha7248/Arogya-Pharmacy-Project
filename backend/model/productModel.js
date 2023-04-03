let mongoose = require("mongoose");
mongoose.pluralize(null);

let productSchema = mongoose.Schema({
    _id:{
        type:Object,
        required:[true]
    },

    prodName:{
        type:String,
        required:[true,"Product name is required"]},

    // categoryId:{
    //     type:Number,
    //     required:[true,"category id required"]},

    qty:{
        type:Number,
        required:[true,"Quantity of product is required"]
    },
    amt: {
        type:Number,
        required:[true,"total amount"]
    },
    pid: {
        type:Number,
        required:[true,"show product id"]
    },
    prod_Image:{
        type:String,
        required:[true,"product image is required"]
    },
    catname:{
        type:String,
        required:[true]
    },
    catId:{
        type:Number,
        required:[true]
    },
    treatFor:{
       type:String,
       required:[true]
    }

    
})
    
    
 
let productModel = mongoose.model("Product",productSchema);

module.exports = productModel;