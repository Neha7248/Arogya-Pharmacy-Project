function storeCustomerInfo(){
    var _idValue = document.getElementById("_id").value;
    var fnameValue = document.getElementById("first_name").value;
    var lnameValue = document.getElementById("last_name").value;
    var ageValue = document.getElementById("age").value;
    var contactValue = document.getElementById("contact").value;
    var addressValue = document.getElementById("address").value;
    var cidValue = document.getElementById("cid").value;
    var orderValue = document.getElementById("order").value;


    var customer ={_id:_idValue,first_name:fnameValue,last_name:lnameValue,age:ageValue,contact_No:contactValue,address:addressValue,cid:cidValue,order:orderValue};
   // console.log(Customer);
    fetch("http://localhost:3001/api/customers/storeCustomerInfo",{
        method:"post",
        body:JSON.stringify(customer),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.text()).then(result=>{
        document.getElementById("msg").innerHTML=result;
        console.log(result); 
        //alert(result);   
    }).catch(error=>console.log(error));
    reset();
}






function reset() {
    document.getElementById("_id").value="";
    document.getElementById("first_name").value="";
    document.getElementById("last_name").value="";
    document.getElementById("age").value="";
    
    document.getElementById("address").value="";
}