function findCustomer(){
    
    var first_name =localStorage.getItem("first_name")
    fetch("http://localhost:3001/api/customers/findCustomerByName/"+first_name,{
        method:"get",
        headers: {
            "Content-type": "application/json",
            "authorization":localStorage.getItem("token")
        }
    }).then(res=>res.json())
    .then(result=>{
        if(result.msg!=null){
        opData=document.getElementById("viewCustomer");
        opData.innerHTML=result.msg;
        }else{
            opData=document.getElementById("viewCustomer");
            opData.innerHTML="first_name:  "+result.first_name+"<br/>Last_name:  " +result.last_name+ "<br/>Order:  " +result.order+ "<br/>Age:  " +result.age+  "<br>Customer Id:  "+result._id+"<br>Customer CId:  "+result.cid+"<br/>Email Id:  "+result.emailId+"<br/>Address:  "+result.address+"<br>Contact:  "+result.contact_No;
        }
    }).catch(err=>console.log(err));
}