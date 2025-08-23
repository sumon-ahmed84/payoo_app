

const pin=1234;
document.getElementById("add-money-btn").addEventListener("click",function(event){
    event.preventDefault();
    const bank=document.getElementById("bank").value;
    const accountNumber=document.getElementById("account-number").value;
    const addAmount=parseInt(document.getElementById("add-amount").value);
    const addPin=parseInt(document.getElementById("add-pin").value);
    const availableBalanceElement=parseInt(document.getElementById("availableBalance").innerText);
    if(accountNumber.length<11){
        alert("Invalid account number");
        return;
    }
    if(addAmount<=0){
        alert("Invalid amount to add");
        return;
    }
    if(addPin!==pin){
        alert("Invalid pin number");
        return;
    }
    const totalNewAvailableBalance=availableBalanceElement+addAmount;
    document.getElementById("availableBalance").innerText=totalNewAvailableBalance;
})


