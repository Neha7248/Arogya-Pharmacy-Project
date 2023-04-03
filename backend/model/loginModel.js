let mongoose = require("mongoose");
mongoose.pluralize(null);
let loginSchema = mongoose.Schema({
    _id:Object,

    emailid:{
        type:String,
        required:[true,"emailid is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    typeofuser:{
        type:String,
        required:[true,"typeof user must required"],
    },
    first_name:{
        type:String,
        required:[true,"first name is required"]
    },
    last_name:{
        type:String,
        required:[true,"last name is required"]
    },
    contact:{
        type:Number,
        required:[true,]
    }

})
// 1st parameter providing collection name
//2nd prameter hold schema details. 
let loginModel = mongoose.model("Login",loginSchema);

module.exports = loginModel;