//add order details
function addAllOrder() {
    var idValue=document.getElementById("_id").value;
    var categoryIdVal = document.getElementById("categoryId").value;
    var orderDateVal = document.getElementById("orderDate").value;
    var custoEmailIdVal = document.getElementById("customerEmailId").value;
    var pidVal = document.getElementById("pid").value;
    var totalAmtVal = document.getElementById("totalAmt").value;
    
    var order = {_id:idValue ,categoryId: categoryIdVal, pid: pidVal, customerEmailId:custoEmailIdVal , totalAmt: totalAmtVal, orderDate: orderDateVal };
    // console.log(category);
    fetch("http://localhost:3001/api/orders/addOrderData", {
        method: "post",
        body: JSON.stringify(order),
        headers: {
            "Content-type": "application/json",
            "authorization":localStorage.getItem("token")
        }
    }).then(res => res.json()).then(result => {
        document.getElementById("addOrder").innerHTML = result.msg;
        console.log(result);
    }).catch(err => console.log(err));
}


//view Order details by id
function findOrderByCustomerEmailId() {
    // var customerEmailId = document.getElementById("customerEmailId").value;
    var EmailId =localStorage.getItem("EmailId")
    fetch("http://localhost:3001/api/orders/findOrderByCustomerEmailId" + EmailId, {
        method: "get",
        headers: {
            "Content-type": "application/json",
            "authorization":localStorage.getItem("token")
        }
    }).then(res => res.json()).
        then(result => {
            if (result.msg != null) {
                opData = document.getElementById("viewOrder");
                opData.innerHTML = result.msg;
            } else {
                opData = document.getElementById("viewOrder");
                opData.innerHTML = "id : " + result._id + "<br>Category id: " + result.categoryId + "<br>pid: " + result.pid +  "<br>productQty: " + result.productQty +  "<br>Customer EmailId:" + result.customerEmailId + "<br>order: " + result.order + "<br>totalAmt: " + result.totalAmt + "<br>Order Date :" + result.orderDate;
            }
        }).catch(err => console.log(err));
}


async function findAllOrders(){
    let res = await fetch("http://localhost:3001/api/orders/findAllOrders",{
        method: "get",
        headers: {
            "Content-type": "application/json",
            "authorization":localStorage.getItem("token")
        }
    });
    let data = await res.json();
    console.log(data);
    var tableTag = document.createElement("table");
    tableTag.setAttribute("class", "table table-bordered border-primary mt-3");
    var firstRow = document.createElement("tr");

    var firstRowFirstColumn = document.createElement("th");
    var firstRowFirstColumnValue = document.createTextNode("_id");
    firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

    var firstRowSecondColumn = document.createElement("th");
    var firstRowSecondColumnValue = document.createTextNode("categoryId");
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);

    var firstRowThirdColumn = document.createElement("th");
    var firstRowThirdColumnValue = document.createTextNode("orderDate");
    firstRowThirdColumn.appendChild(firstRowThirdColumnValue);

    var firstRowFourthColumn = document.createElement("th");
    var firstRowFourthColumnValue = document.createTextNode("customerEmailId");
    firstRowFourthColumn.appendChild(firstRowFourthColumnValue);

    var firstRowFifthColumn = document.createElement("th");
    var firstRowFifthColumnValue = document.createTextNode("order");
    firstRowFifthColumn.appendChild(firstRowFifthColumnValue);

    var firstRowSixthColumn = document.createElement("th");
    var firstRowSixthColumnValue = document.createTextNode("totalAmt");
    firstRowSixthColumn.appendChild(firstRowSixthColumnValue);

   


    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);
    firstRow.appendChild(firstRowThirdColumn);
    firstRow.appendChild(firstRowFourthColumn);
    firstRow.appendChild(firstRowFifthColumn);
    firstRow.appendChild(firstRowSixthColumn);
    
  

    tableTag.appendChild(firstRow);

    for (i = 0; i < data.length; i++) {
        var secondRow = document.createElement("tr");

        var secondRowFirstColumn = document.createElement("td");
        var secondRowFirstColumnValue = document.createTextNode(data[i]._id);
        secondRowFirstColumn.appendChild(secondRowFirstColumnValue);

        var secondRowSecondColumn = document.createElement("td");
        var secondRowSecondColumnValue = document.createTextNode(data[i].categoryId);
        secondRowSecondColumn.appendChild(secondRowSecondColumnValue);

        var secondRowThirdColumn = document.createElement("td");
        var secondRowThirdColumnValue = document.createTextNode(data[i].orderDate);
        secondRowThirdColumn.appendChild(secondRowThirdColumnValue);

        var secondRowFourthColumn = document.createElement("td");
        var secondRowFourthColumnValue = document.createTextNode(data[i].customerEmailId);
        secondRowFourthColumn.appendChild(secondRowFourthColumnValue);

        var secondRowFifthColumn = document.createElement("td");
        var secondRowFifthColumnValue = document.createTextNode(data[i].order);
        secondRowFifthColumn.appendChild(secondRowFifthColumnValue);

        var secondRowSixthColumn = document.createElement("td");
        var secondRowSixthColumnValue = document.createTextNode(data[i].totalAmt);
        secondRowSixthColumn.appendChild(secondRowSixthColumnValue);

       

        secondRow.appendChild(secondRowFirstColumn);
        secondRow.appendChild(secondRowSecondColumn);
        secondRow.appendChild(secondRowThirdColumn);
        secondRow.appendChild(secondRowFourthColumn);
        secondRow.appendChild(secondRowFifthColumn);
        secondRow.appendChild(secondRowSixthColumn);
       


        tableTag.appendChild(secondRow);
    }
    document.getElementById("displayOrder").appendChild(tableTag)
}