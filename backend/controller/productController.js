let productModel = require("../model/productModel");



let storeProductInfo = async (request,response)=> {
    let product = request.body;
    //console.log(customert);
    //response.send("done");
    try{
    let result  = await productModel.insertMany(product);
    if(result!=null){
        response.json("Product data stored successfully");
    }
    //response.send(result);
    }catch(ex){
        response.json(ex);
    }
}
let showAllProducts = async(reqeust,response)=> {
    try {
        let result = await productModel.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}


let findProductByName = async (reqeust,response)=> {
    try {
        let productName = reqeust.params.prodName;
        let result = await productModel.find({prodName:productName});
    if(result==null){
        response.json({msg:"Record not found"+prodName});
    }else{
        response.json(result);
    }
    } catch (error) {
        response.json(error);
    }
}




module.exports = {storeProductInfo,showAllProducts,findProductByName}

