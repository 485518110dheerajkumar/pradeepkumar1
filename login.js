 var email=document.getElementById(email).value;
        var passkey=document.getElementById('passworde').value;
        function add(){
        let na=document.getElementById("text").value;
        let nb=document.getElementById("text1").value;
         
         if(na == "pradeep-kumar"){
            if(nb == "485518110"){
                window.location = "homepage.html";
            }
            else{
                alert("innvalid password");
            }
         }
         else{
            alert("please enter the User name and password")
         }
             
        
    }