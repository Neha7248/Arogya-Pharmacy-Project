let orderModel = require("../model/orderModel");

let addAllOrder = async (request,response)=> {
    let order = request.body;
   
    //response.send("done");
    try{
    let result  = await orderModel.insertMany(order);
    if(result!=null){
        response.send("Order stored successfully");
    }
    //response.send(result);
    }catch(ex){
        response.send(ex);
    }
}
    
let findAllOrders = async(request,response)=> {
    try {
        let result = await orderModel.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}

let findOrderByCustomerEmailId = async (reqeust,response)=> {
    try {
        let CustomerEmailId = reqeust.params.customerEmailId;
        let result = await orderModel.find({customerEmailId:CustomerEmailId});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}
let updateCustomerOrder = async (reqeust,response)=> {
    let customer = reqeust.body;
    try{
        let result  = await studentModel.updateOne({cid:customer.cid},{order:customer.order})
        //response.send(result);
        if(result.modifiedCount>0){
            response.send("Your order updated successfully")
        }else if(result.matchedCount>0){
            response.send("Your old order and new order is same")
        }else {
            response.send("Customer not present");
        }
        }catch(ex){
            response.send(ex);
        }    
}



           


let deleteOrderByCid = async (reqeust,response)=> {
    try {
        let cid = reqeust.params.cid;
        let result = await orderModel.deleteOne({cid:cid})
        //response.json(result);
        if(result.deletedCount>0){
            response.send("order details deleted successfully")
        }else {
            response.send("order not present")
        }
    } catch (error) {
        response.json(error);
    }
}

module.exports = {addAllOrder,findAllOrders,findOrderByCustomerEmailId,deleteOrderByCid,updateCustomerOrder}


