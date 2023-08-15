// Step: 01 Add event handler to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {
  // Step: 02   get the deposited amount
  const inputField = document.getElementById('deposit-amount');

  // Step: 03   To get the vale of an input field use .value
  const depositAmount = inputField.value;

  // Step: 04 Put the value of deposited amount in the deposit section

  // For non-input element (input or textarea) use .innerText to get the value

  const deposit = document.getElementById('total-deposit');
  const depositTotal = deposit.innerText;
  deposit.innerText = depositAmount;
});
