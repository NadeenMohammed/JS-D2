var x = new RegExp("^[A-Za-z]","gmi");   //^Name
var y = new RegExp("^[0-9]{7}","gm")     //^phone
var z = new RegExp("^\+[0-9]{1,3}[-]?[0-9]{10}","gm")     //^mobile
var k = new RegExp("^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$","gmi")  //^email

do{
    var namee = prompt("Enter Your Name");
}while(!namee.match(x))
 console.log(namee , typeof namee);

 do{
    var phone = prompt("Enter Your Phone");
}while(!phone.match(y))
 console.log(phone , typeof phone);

 do{
    var mobile = prompt("Enter Your Mobile Number");
}while(!mobile.match(z))
 console.log(mobile , typeof mobile);

 do{
    var Email = prompt("Enter Your E-mail");
}while(!Email.match(k))
 console.log(Email , typeof Email);

 document.write("<h1 style='color:red;'>Entering User Info</h1> <hr>");
 document.write("<h3>Name:"+namee+"</h3> <hr>");
 document.write("<h3>Phone:"+phone+"</h3> <hr>");
 document.write("<h3>Mobile_Number:"+mobile+"</h3> <hr>");
 document.write("<h3>User_Email:"+Email+"</h3> <hr>");