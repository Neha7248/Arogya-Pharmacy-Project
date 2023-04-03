let categoryModel = require("../model/categoryModel");


let addCategoryInfo = async (request,response)=> {
    let category = request.body;
    //console.log(category);
    //response.send("done");
    try{
    let result  = await categoryModel.insertMany(category);
    if(result!=null){
        response.send("Record stored successfully");
    }
    //response.send(result);
    }catch(ex){
        response.send(ex);
    }
}

let showAllCategorys = async(request,response)=> {
    try {
        let result = await categoryModel.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}

let findCategoryByName = async (request, response) => {
    try {
        let disease_name =  request.params.disease_name;
        let result = await categoryModel.findOne({ disease_name:disease_name });
        // response.json(result);
        if (result == null) {
            response.json({"msg":"Record not found with disease name"})
            // var res=JSON.stringify(result)
            // response.send(res)
        }else{
            response.json({"msg":"Record Present",category:result});
        }
    } catch (err) {
        // response.json(err)
        response.json(err)
    }
}

let updateDiseaseCategory= async (request,response)=> {
    let disease_category = request.body;
    //console.log(emp);
    try{
    var result = await catCollection.getCollection().updateOne({catId:disease_category});
    if(result.modifiedCount>0){
        response.send("Disease Category updated successfully")
    }else if(result.matchedCount>0){
        response.send("Category didn't update becuase old and new Category are same")
    }else {
        response.send("record not present")
    }
    }catch(ex){
        response.send(ex);
    }
}
let deleteCategoryById = async (reqeust,response)=> {
    try {
        let catId = reqeust.params._id;
        let result = await customerModel.deleteOne({_id:catId})
        //response.json(result);
        if(result.deletedCount>0){
            response.send("Disease category details deleted successfully")
        }else {
            response.send("this category of product is not present"+catId)
        }
    } catch (error) {
        response.json(error);
    }
}




module.exports = {addCategoryInfo,showAllCategorys,findCategoryByName,updateDiseaseCategory,deleteCategoryById}

