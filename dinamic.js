function goto () {
const loginButton=document.getElementById("enter");
const email = document.getElementById('email');
const pass = document.getElementById('pass');
    if(email.value == "ashikur201.cse@gmail.com" && pass.value==1234){
        window.location='trans.html'
    }else{
        alert("Invalid Email or Password")
    }
};


//Convert value text to float
function getValue(iden){
    const depositAmount=document.getElementById(iden);
    const depositNumberAmount=parseFloat(depositAmount.value);
    depositAmount.value="0";
    
    return depositNumberAmount;
};
//convert innerText to float
function changeWithdraw(id){
    const current=document.getElementById(id);
    const currentNumber=parseFloat(current.innerText);

    return currentNumber;
};






//Change amount in diposite and total balance
function changeFieldValue(id,depositNumber){
    const currentAmountNumber = changeWithdraw(id);

    const total=depositNumber+currentAmountNumber;
    document.getElementById(id).innerText=total;

 };

 //Handle withdraw Button
 function handleDiposite(id1,id2){
    const withdrawNumber = getValue("withdrawAmount");
    const withdraw=changeWithdraw(id1);
    const balance=changeWithdraw(id2);

    const totalWithdraw=withdraw+withdrawNumber;
    const netBalance=balance-withdrawNumber;

    document.getElementById(id1).innerText=totalWithdraw;
    document.getElementById(id2).innerText=netBalance;
};




 //Deposit Button 
 const DepositButton=document.getElementById("depositButton");
 DepositButton.addEventListener("click",function ()
  {
    const depositNumber = getValue("depositAmount");
    if (depositNumber > 0){
        changeFieldValue("currentAmount",depositNumber);
        changeFieldValue("balanceAmount",depositNumber);

    }
    else{
        alert("Enter a valid amount");
    }
    
 });


 //Withdraw Button
 const withdrawButton=document.getElementById("withdrawButton");
    withdrawButton.addEventListener("click",function () {    
        const totBalance = parseFloat(document.getElementById("balanceAmount").innerText);
        const withAmount = parseFloat(document.getElementById("withdrawAmount").value);
        if(withAmount > 0 && totBalance > withAmount){
            handleDiposite("currentWithdraw","balanceAmount");
        }
        else{
            alert("Insufficient Balance or Enter a valid Amount");
        }
        
        
    });
 
  




