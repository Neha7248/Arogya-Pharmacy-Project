let customerModel = require("../model/customerModel");
// let passwordHashConfig = require("../config/passwordHashConfig");
// let jwt = require("jsonwebtoken");   


let storeCustomerInfo = async (request,response)=> {
    let customer = request.body;
    //console.log(customert);
    //response.send("done");
    try{
    let result  = await customerModel.insertMany(customer);
    if(result!=null){
        response.json("Record stored successfully");
    }
    //response.send(result);
    }catch(ex){
        response.json(ex);
    }
}

let findAllCustomers = async(request,response)=> {
    try {
        let result = await customerModel.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}

let findCustomerById = async (reqeust,response)=> {
    try {
        let cid = reqeust.params._id;
        let result = await customerModel.find({_id:cid});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}

let findCustomerByName = async (request, response) => {
    try {
        let first_name =  request.params.first_name;
        let result = await customerModel.findOne({ first_name:first_name});
        response.json(result);
        if (result == null) {
            response.json({"msg":"Customer Record not found"})
            var res=JSON.stringify(result)
            response.send(res)
        }else{
            response.json({"msg":"Record Present",customer:result});
        }
    } catch (err) {
        response.json(err)
        // response.json(err)
    }
}


// let findCustomerByName= async (reqeust,response)=> {
//     try {
//         let fname = reqeust.params.first_name;
//         let result = await customerModel.find({first_name:fname});
//         response.json(result);
//     } catch (error) {
//         response.json(error);
//     }
// }

           


let deleteCustomer = async (reqeust,response)=> {
    try {
        let first_name = reqeust.params.fname;
        let result = await customerModel.deleteOne({fname:first_name})
        //response.json(result);
        if(result.deletedCount>0){
            response.send("customer details deleted successfully")
        }else {
            response.send("customer not present"+fname)
        }
    } catch (error) {
        response.json(error);
    }
}

module.exports = {storeCustomerInfo,findAllCustomers,findCustomerById,deleteCustomer,findCustomerByName}

