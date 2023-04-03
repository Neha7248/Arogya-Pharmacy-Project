function signIn() {
    var emailidValue = document.getElementById("emailid").value;
    var passwordValue = document.getElementById("password").value;
    var adminValue = document.getElementsByName("typeofuser")[0].checked;
    var studentValue  = document.getElementsByName("typeofuser")[1].checked;
    var typeofuserValue;
    if(adminValue){
        typeofuserValue="admin"
    }
    if(studentValue){
        typeofuserValue="customer"
    }
    var login = {emailid:emailidValue,password:passwordValue,typeofuser:typeofuserValue};
   //console.log(login);
    fetch("http://localhost:3001/api/login/signIn",{
        method:"post",
        body:JSON.stringify(login),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json()).then(result=>{
                //console.log(result);
        //console.log(result.token);
        //sessionStorage.setItem("token",result.token);
        sessionStorage.setItem("token",result.token);
        if(result.msg=="Admin done login successfully"){
            window.location.href="http://127.0.0.1:5500/frontend/AdminHomePage.html"
        }else if(result.msg=="Customer done login successfully"){
            window.location.href="http://127.0.0.1:5500/frontend/customerHome.html" 
        } else {
            document.getElementById("msg").innerHTML=result.msg;

        }
    }).catch(error=>console.log(error));
    reset();
}
function signUp() {
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var email = document.getElementById("emailId").value;
    var pass = document.getElementById("password").value;
    var confirmpasswd = document.getElementsById("password").value;
    var contactVal = document.getElementById("contact").value;
    var adminValue = document.getElementsByName("type_of_user")[0].checked;
    var customerValue = document.getElementsByName("type_of_user")[1].checked;
    var type_of_user_val;
    if (adminValue) {
        type_of_user_val = "admin"
    }
    if (customerValue) {
        type_of_user_val = "customer"
    }
    
    
    var login = { first_name: fname, last_name: lname, emailid: email, password: pass,password:confirmpasswd,typeofuser
        : type_of_user_val, contact: contactVal }
    console.log(login);
    fetch("http://localhost:3001/api/login/SignUP",{
        method:"post",
        body:JSON.stringify(login),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json()).then(result=>{
        document.getElementById("msg").innerHTML=result.msg;
        console.log(result);    
    }).catch(error=>console.log(error));
    reset();
}

function reset() {
    document.getElementById("emailid").value="";
    document.getElementById("password").value="";
}


function logout() {
    sessionStorage.removeItem("token");
    window.location.href="http://127.0.0.1:5500/frontend/home.html"   
}


// async function loadCustomerData(){
//     try{ 
//     let result = document.getElementById("result");
//     let response = await fetch("http://localhost:3001/api/customers/findAllCustomers",{
//         method:"get",
//         headers:{
//             "Content-type":"application/json",
//             "authorization":sessionStorage.getItem("token")
//         }
//     });

//      //let respnose = await fetch("http://localhost:3000/api/students/findAllStudents");
//      let data = await response.json();
//      console.log(data);
//      //result.innerHTML = data.map(obj=>"StdId "+obj._id+"Student Name "+obj.first_name).join("<br/>");
//      result.innerHTML = data.map(obj=>"<li>CustId "+obj._id+"Customer Name "+obj.first_name+"</li>").join("<br/>");
//      //console.log(data);  
// }catch(ex){
//     alert(ex);
// } 
// }

async function deleteCustomerData(){
    try{ 
    let result = document.getElementById("result");
    let response = await fetch("http://localhost:3001/api/customers/deleteCustomerById/:_id",{
        method:"delete",
        headers:{
            "Content-type":"application/json",
            "authorization":sessionStorage.getItem("token")
        }
    });

     //let respnose = await fetch("http://localhost:3000/api/students/findAllStudents");
     let data = await response.json();
     console.log(data);
     //result.innerHTML = data.map(obj=>"StdId "+obj._id+"Student Name "+obj.first_name).join("<br/>");
     result.innerHTML = data.map(obj=>"<li>CustId "+obj._id+"Customer Name "+obj.first_name+"</li>").join("<br/>");
     //console.log(data);  
}catch(ex){
    alert(ex);
} 
}


async function searchCustomerByName(){
    let first_name = document.getElementById("first_name").value;
    let result = document.getElementById("result");
    let respnose = await fetch("http://localhost:3001/api/customers/findCustomerByName/"+first_name);
    
    let data = await respnose.json();
    if(data.length==0){
        result.innerHTML="No Customer present "
    }else {
        result.innerHTML = data.map(obj=>"Customer Name "+obj.first_name).join("<br/>");
        // result.innerHTML = data.map(obj=>"CustId "+obj._id+"Customer cid "+obj.cid).join("<br/>");  
    }

    console.log(data);
    //result.innerHTML = data.map(obj=>"StdId "+obj._id+"Student Name "+obj.first_name).join("<br/>");
    //result.innerHTML = data.map(obj=>"<li>StdId "+obj._id+"Student Name "+obj.first_name+"</li>").join("<br/>");
}
async function showAllCustomers() {
    let res = await fetch("http://localhost:3001/api/customers/findAllCustomers",{
        method:"get",
        headers:{
            "Content-type":"application/json",
            // "authorization":sessionStorage.getItem("token")
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
    var firstRowSecondColumnValue = document.createTextNode("first_name");
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);

    var firstRowThirdColumn = document.createElement("th");
    var firstRowThirdColumnValue = document.createTextNode("last_name");
    firstRowThirdColumn.appendChild(firstRowThirdColumnValue);

    var firstRowFourthColumn = document.createElement("th");
    var firstRowFourthColumnValue = document.createTextNode("age");
    firstRowFourthColumn.appendChild(firstRowFourthColumnValue);

    var firstRowFifthColumn = document.createElement("th");
    var firstRowFifthColumnValue = document.createTextNode("order");
    firstRowFifthColumn.appendChild(firstRowFifthColumnValue);

    var firstRowSixthColumn = document.createElement("th");
    var firstRowSixthColumnValue = document.createTextNode("cid");
    firstRowSixthColumn.appendChild(firstRowSixthColumnValue);

    var firstRowSeventhColumn = document.createElement("th");
    var firstRowSeventhColumnValue = document.createTextNode("address");
    firstRowSeventhColumn.appendChild(firstRowSeventhColumnValue);

    var firstRowEighthColumn = document.createElement("th");
    var firstRowEighthColumnValue = document.createTextNode("contact_No");
    firstRowEighthColumn.appendChild(firstRowEighthColumnValue);

    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);
    firstRow.appendChild(firstRowThirdColumn);
    firstRow.appendChild(firstRowFourthColumn);
    firstRow.appendChild(firstRowFifthColumn);
    firstRow.appendChild(firstRowSixthColumn);
    firstRow.appendChild(firstRowSeventhColumn);
    firstRow.appendChild(firstRowEighthColumn);


    tableTag.appendChild(firstRow);

    for (i = 0; i < data.length; i++) {
        var secondRow = document.createElement("tr");
        var secondRowFirstColumn = document.createElement("td");
        var secondRowFirstColumnValue = document.createTextNode(data[i]._id);
        secondRowFirstColumn.appendChild(secondRowFirstColumnValue);

        var secondRowSecondColumn = document.createElement("td");
        var secondRowSecondColumnValue = document.createTextNode(data[i].first_name);
        secondRowSecondColumn.appendChild(secondRowSecondColumnValue);

        var secondRowThirdColumn = document.createElement("td");
        var secondRowThirdColumnValue = document.createTextNode(data[i].last_name);
        secondRowThirdColumn.appendChild(secondRowThirdColumnValue);

        var secondRowFourthColumn = document.createElement("td");
        var secondRowFourthColumnValue = document.createTextNode(data[i].age);
        secondRowFourthColumn.appendChild(secondRowFourthColumnValue);

        var secondRowFifthColumn = document.createElement("td");
        var secondRowFifthColumnValue = document.createTextNode(data[i].order);
        secondRowFifthColumn.appendChild(secondRowFifthColumnValue);

        var secondRowSixthColumn = document.createElement("td");
        var secondRowSixthColumnValue = document.createTextNode(data[i].cid);
        secondRowSixthColumn.appendChild(secondRowSixthColumnValue);

        var secondRowSeventhColumn = document.createElement("td");
        var secondRowSeventhColumnValue = document.createTextNode(data[i].address);
        secondRowSeventhColumn.appendChild(secondRowSeventhColumnValue);

        var secondRowEighthColumn = document.createElement("td");
        var secondRowEighthColumnValue = document.createTextNode(data[i].contact_No);
        secondRowEighthColumn.appendChild(secondRowEighthColumnValue);

       

        secondRow.appendChild(secondRowFirstColumn);
        secondRow.appendChild(secondRowSecondColumn);
        secondRow.appendChild(secondRowThirdColumn);
        secondRow.appendChild(secondRowFourthColumn);
        secondRow.appendChild(secondRowFifthColumn);
        secondRow.appendChild(secondRowSixthColumn);
        secondRow.appendChild(secondRowSeventhColumn);
        secondRow.appendChild(secondRowEighthColumn);

        tableTag.appendChild(secondRow);
    }
    document.getElementById("display").appendChild(tableTag)
}




function logout() {
    window.location.href = "http://127.0.0.1:5500/frontend/home.html"
}

function reset() {
    document.getElementById("emailId").value = "";
    document.getElementById("password").value = "";
}










