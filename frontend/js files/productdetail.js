//view All products
//view Product data
async function viewAllProduct() {
    let res = await fetch("http://localhost:3001/api/products/showAllProducts",{
        method: "get",
        headers: {
            "Content-type": "application/json",
            "authorization":localStorage.getItem("token")
        }
    });
    let data = await res.json();
    console.log(data);
    var tableTag = document.createElement("table");
    tableTag.setAttribute("class", "table");
    var firstRow = document.createElement("tr");
    firstRow.setAttribute("class","tr")

    var firstRowFirstColumn = document.createElement("th");
    var firstRowFirstColumnValue = document.createTextNode("_id");
    firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

    var firstRowSecondColumn = document.createElement("th");
    var firstRowSecondColumnValue = document.createTextNode("prodName");
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);

    var firstRowThirdColumn = document.createElement("th");
    var firstRowThirdColumnValue = document.createTextNode("qty");
    firstRowThirdColumn.appendChild(firstRowThirdColumnValue);

    var firstRowFourthColumn = document.createElement("th");
    var firstRowFourthColumnValue = document.createTextNode("amt");
    firstRowFourthColumn.appendChild(firstRowFourthColumnValue);

    var firstRowFifthColumn = document.createElement("th");
    var firstRowFifthColumnValue = document.createTextNode("pid");
    firstRowFifthColumn.appendChild(firstRowFifthColumnValue);

    var firstRowSixthColumn = document.createElement("th");
    var firstRowSixthColumnValue = document.createTextNode("prod_Image");
    firstRowSixthColumn.appendChild(firstRowSixthColumnValue);

    var firstRowSeventhColumn = document.createElement("th");
    var firstRowSeventhColumnValue = document.createTextNode("catname");
    firstRowSeventhColumn.appendChild(firstRowSeventhColumnValue);

    var firstRowEightColumn = document.createElement("th");
    var firstRowEightColumnValue = document.createTextNode("treatFor");
    firstRowEightColumn.appendChild(firstRowEightColumnValue);

    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);
    firstRow.appendChild(firstRowThirdColumn);
    firstRow.appendChild(firstRowFourthColumn);
    firstRow.appendChild(firstRowFifthColumn);
    firstRow.appendChild(firstRowSixthColumn);
    firstRow.appendChild(firstRowSeventhColumn);
    firstRow.appendChild(firstRowEightColumn);

    tableTag.appendChild(firstRow);

    for (i = 0; i < data.length; i++) {
        var secondRow = document.createElement("tr");

        var secondRowFirstColumn = document.createElement("td");
        var secondRowFirstColumnValue = document.createTextNode(data[i]._id);
        secondRowFirstColumn.appendChild(secondRowFirstColumnValue);

        var secondRowSecondColumn = document.createElement("td");
        var secondRowSecondColumnValue = document.createTextNode(data[i].prodName);
        secondRowSecondColumn.appendChild(secondRowSecondColumnValue);

        var secondRowThirdColumn = document.createElement("td");
        var secondRowThirdColumnValue = document.createTextNode(data[i].qty);
        secondRowThirdColumn.appendChild(secondRowThirdColumnValue);

        var secondRowFourthColumn = document.createElement("td");
        var secondRowFourthColumnValue = document.createTextNode(data[i].amt);
        secondRowFourthColumn.appendChild(secondRowFourthColumnValue);

        var secondRowFifthColumn = document.createElement("td");
        var secondRowFifthColumnValue = document.createTextNode(data[i].pid);
        secondRowFifthColumn.appendChild(secondRowFifthColumnValue);

        
        
        var secondRowSixthColumn = document.createElement("td");
        var imgTag = document.createElement("img");
        imgTag.setAttribute("src",data[i].prod_Image);
        secondRowSixthColumn.appendChild(imgTag);
        imgTag.setAttribute("width","130px");
        imgTag.setAttribute("height","130px");

        var secondRowSeventhColumn = document.createElement("td");
        var secondRowSeventhColumnValue = document.createTextNode(data[i].catname);
        secondRowSeventhColumn.appendChild(secondRowSeventhColumnValue);

        var secondRowEightColumn = document.createElement("td");
        var secondRowEightColumnValue = document.createTextNode(data[i].treatFor);
        secondRowEightColumn.appendChild(secondRowEightColumnValue);


        

        secondRow.appendChild(secondRowFirstColumn);
        secondRow.appendChild(secondRowSecondColumn);
        secondRow.appendChild(secondRowThirdColumn);
        secondRow.appendChild(secondRowFourthColumn);
        secondRow.appendChild(secondRowFifthColumn);
        secondRow.appendChild(secondRowSixthColumn);
        secondRow.appendChild(secondRowSeventhColumn);
        secondRow.appendChild(secondRowEightColumn);
        
        


        


        tableTag.appendChild(secondRow);
    }
    document.getElementById("viewProduct").appendChild(tableTag)
}

//Add product Details
function addProduct() {
    
    var idValue = document.getElementById("_id").value;
    var pnameVal = document.getElementById("prodName").value;
    var pidValue = document.getElementById("pid").value;
    var priceVal = document.getElementById("amt").value;
    var quantityVal = document.getElementById("qty").value;
    var categoryIdVal = document.getElementById("catId").value;
    var ProductImgVal=document.getElementById("prod_Image").value;
    var treatforVal=document.getElementById("treatFor").value;
    var product = { _id: idValue, prodName: pnameVal,pid: pidValue, amt: priceVal, qty: quantityVal, catId: categoryIdVal,prod_Image:ProductImgVal,treatFor:treatforVal };
    console.log(product);
    fetch("http://localhost:3001/api/product/storeProductData", {
        method: "post",
        body: JSON.stringify(product),
        headers: {
            "Content-type": "application/json",
            "authorization":localStorage.getItem("token")
        }
    }).then(res => res.json()).then(result => {
        document.getElementById("addProduct").innerHTML = result.msg;
        window.alert(result.msg)
        console.log(result);
    }).catch(err => console.log(err));
}

//find Product by name
function searchProductName(){
    var prodName=document.getElementById("prodName").value;
    fetch("http://localhost:3001/api/products/findProductByName/"+prodName,{
        method:"get",
        headers: {
            "Content-type": "application/json",
            "authorization":localStorage.getItem("token")
        }

    }).then(res=>res.json()).
    then(result=>{
        if(result.msg!=null){
            opData=document.getElementById("prodName");
            opData.innerHTML=result.msg;
        }else{
            opData=document.getElementById("prodName");
            
            var image=`<img src=${
                result.prod_Image
            }>`
        
            opData.innerHTML="id : "+result._id+"<br>Product Name: "+result.prodName+"<br>Product ID : "+result. pid+"<br>Price: "+result.amt+"<br>Quantity: "+result.qty+"<br>Category Id: "+result.catId,"<br>Product Image: "+image;
        }
    }).catch(err=>console.log(err));
}