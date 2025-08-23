
// add money functionality to the home page of the Payoo app

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

// cashout functionality

document.getElementById("cashout-btn").addEventListener("click", function(event){
    event.preventDefault();
    const agentNumber=document.getElementById("agent-number").value;
    const cashoutAmount=parseInt(document.getElementById("cashout-amount").value);
    const cashoutPin=parseInt(document.getElementById("cashout-pin").value);
    const availableBalanceElement=parseInt(document.getElementById("availableBalance").innerText);
    if(agentNumber.length<11){
        alert("Invalid agent number");
        return;
    }
    if(cashoutAmount<=0){
        alert("Invalid amount to cash out");
        return;
    }
    if(cashoutPin!==pin){
        alert("Invalid pin number");
        return;
    }
    if(cashoutAmount>availableBalanceElement){
        alert("Insufficient balance");
        return;
    }
    const totalNewAvailableBalance=availableBalanceElement-cashoutAmount;
    document.getElementById("availableBalance").innerText=totalNewAvailableBalance;
})

// toggle functionality
document.getElementById("added-money").addEventListener("click",function(){
    document.getElementById("cashout-section").style.display="none";
    document.getElementById("add-section").style.display="block";
})
document.getElementById("cash-money").addEventListener("click",function(){
    document.getElementById("add-section").style.display="none";
    document.getElementById("cashout-section").style.display="block";
})
