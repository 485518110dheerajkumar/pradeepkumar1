function printpage(){
    var n = document.getElementById("result").innerHTML;
    if(n==" "){
        alert("Please Enter the Data");
    }
    else{
        window.print();
    }
     
}
function predict(){
    document.getElementById("result").innerHTML = "<h1> Hello </h1>"
}