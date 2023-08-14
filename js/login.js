// Step:1 Add click event handler in submit button
document.getElementById('btn-submit').addEventListener('click', function () {
  // Step:2 Get the email address inside the input field
  //   Always remember to add .value to get text from a input field
  const userEmail = document.getElementById('user-email');
  const email = userEmail.value;

  // Step:3 Get user Password
  const userPassword = document.getElementById('user-password');
  const password = userPassword.value;
  // Never verify email and password on the client's side

  // Stp:4 verify credentials (Valid user or not)

  if (email === 'smrity.sheroprogrammer@gmail.com' && password === 'shero123') {
    console.log('Valid User');
  } else {
    console.log('Invalid User');
  }
});
