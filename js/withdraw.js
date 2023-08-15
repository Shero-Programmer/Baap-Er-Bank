// Step: 01 Add event handler to the withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function () {
  // Step: 02 Get the withdraw amount from input field

  const withdrawField = document.getElementById('withdraw-amount');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // Step: 03 Put the value of withdrawn amount in the withdraw section

  const withdraw = document.getElementById('total-withdraw');
  const previousTotalWithdrawString = withdraw.innerText;
  const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);

  //    Step: 04 Add the numbers to set the total withdraw

  const totalWithdraw = newWithdrawAmount + previousTotalWithdraw;
  withdraw.innerText = totalWithdraw;

  // Step: 05 Get the previous current balance

  const previousBalance = document.getElementById('current-balance');
  const previousBalanceTotalString = previousBalance.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //  Step: 06  Calculate New Total balance

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  //   Step: 08  Set the value in the new total balance

  previousBalance.innerText = newBalanceTotal;

  // Step: 07  Clear Input amount

  withdrawField.value = '';
});
