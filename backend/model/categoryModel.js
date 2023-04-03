let mongoose = require("mongoose");
mongoose.pluralize(null);
let categorySchema = mongoose.Schema({
    _id:Object,

    disease_name:{
        type:String,
        required:[true,"Disease category name required"],
        unique:true
    },
    image:{
        type:String,
        required:[true,"Image is required"],
    },
    disease_cat:{
        type:String,
        required:[true,"Category is required"]
    }
})


let categoryModel = mongoose.model("category",categorySchema);

module.exports = categoryModel;