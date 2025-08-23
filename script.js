document.getElementById("loginButton").addEventListener("click",function(event){
    event.preventDefault();
    const mobileNumber=1234567891011;
    const pinNumber=1234;
    const mobileNumberValue=document.getElementById("mobile-number").value;
    const mobileNumberConvert=parseInt(mobileNumberValue);
    const pinNumberValue=document.getElementById("pin-number").value;
    const pinNumberConvert=parseInt(pinNumberValue);
    if(mobileNumberConvert===mobileNumber && pinNumberConvert===pinNumber){
        window.location.href="home.html";
    }else{
        alert("Invalid mobile number or PIN");
    }

})
