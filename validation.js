/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function validate(){
    let notel =document.forms["contact"]["notel"].value;
    let email =document.forms["contact"]["email"].value;
    
    if(nama === ""){
        alert("Nama Must Be Filled Out!");
        document.forms["contact"]["nama"].select();
        document.forms["contact"]["nama"].values();
        return false;
    }
    if(email === ""){
        alert("Email Must Be Filled Out!");
        document.forms["contact"]["email"].select();
        document.forms["contact"]["email"].values();
        return false;
    }
}