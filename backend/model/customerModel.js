let mongoose = require("mongoose");
mongoose.pluralize(null);

let customerSchema = mongoose.Schema({
    _id:Object,

    first_name:{
        type:String,
        required:[true,"first name required"]},

    last_name:{
        type:String,
        required:false},
    age:{
        type:Number,
        required:[true,"Age must be required"],
        
    },
    cid:{
        type:Number,
        required:[true,"cid must be required"], 
    },

    contact_No: {
        type:Number,
        required:[true,"contact number must be required"]
    },
    order:{
        type:String,
        required:[true,"order must be required"]
    },
    address: {
        type:String,
        required:[true,"Address must be required"]
    }
    
})
// 1st parameter providing collection name
//2nd prameter hold schema details. 
let customerModel = mongoose.model("Customer",customerSchema);

module.exports = customerModel;