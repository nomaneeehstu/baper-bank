//  function getInputValue(inputId){
//      //get the amount deposited
//   const inputField = document.getElementById(inputId);
//   const inputAmountText = inputField.value;
//   inputField.value = ' ';
//   return inputAmountText;
  
//  }
 
 
 
 
 
 
 // handle deposit button event
 document.getElementById('deposit-button').addEventListener('click',function(){

     //get the amount deposited
  const depositeInput = document.getElementById('deposit-input');
  const newDepositAmount = depositeInput.value;
  // const newDepositAmount = getInputValue('deposit-input');
  
  const depositTotal = document.getElementById('deposit-total');
  const previousDepositAmount= depositTotal.innerText;

  const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
  depositTotal.innerText = newDepositTotal;

  // clear the deposit input field 
  


  // get balance total
  const balanceTotal = document.getElementById('balance-total');
  const previousBalance = balanceTotal.innerText;
  
  const addDepositWithBalance = parseFloat(previousBalance) + parseFloat(newDepositAmount);

  balanceTotal.innerText = addDepositWithBalance;


})


 // handle withdraw button event

 document.getElementById('withdraw-button').addEventListener('click',function(){
  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawBalance = withdrawInput.value;
    // const withdrawBalance = getInputValue('withdraw-input');

// set withdraw total
  const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawText= withdrawTotal.innerText;

  const newWithdrawTotal = parseFloat(previousWithdrawText) + parseFloat(withdrawBalance);
  withdrawTotal.innerText = newWithdrawTotal;


  // clear input field 
  withdrawInput.value = ' ';


  // update balance 

  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceText);
  const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
  balanceTotal.innerText = newBalanceTotal;

 })