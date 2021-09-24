// Assignment Code
var generateBtn = document.querySelector('#generate');
var specialCharSet = "~!@#$%^&*()";
var lowerCaseCharSet = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeros = "0123456789";
var charset = "";
var passwordLength = 0;

function generatePassword() {
  //Build character set
  // special characters prompt
  specialConfirm = confirm('Do you want to include special characters?');
  if (specialConfirm === true) {
    charset += specialCharSet;
    console.log(charset);
  };
    // lowercase prompt
  lowerConfirm = confirm('Do you want to include lowercase letters?');
  if (specialConfirm === true) {
    charset += lowerCaseCharSet;
    console.log(charset);
  };
    // uppercase prompt
  upperConfirm = confirm('Do you want to include uppercase letters?');
  if (upperConfirm === true) {
    charset += upperCaseCharSet;
    console.log(charset);
  };
    // numbers prompt
    numberConfirm = confirm('Do you want to include numbers?');
    if (numberConfirm === true) {
      charset += numeros;
      console.log(charset);
    };


  //enter password length
  passwordLength = prompt("How long do you want your password?  Enter a number between 8 and 128.");
  //validate that password length is a number between 8 and 128
  function numberValidation() {
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("You didn't choose a number between 8 and 128. You will need to start over.");
      console.log('It is returning FALSE for the number validation')
      generatePassword()
    } else {
      console.log('It is returning TRUE for the number validation')
      return true;
    };
  }

  numberValidation();
  var password = "";
  


 if (numberValidation !== true) {

  for (i=0; i < passwordLength; i++) {
    selectChar = charset[Math.floor(Math.random()*charset.length)];
    console.log(selectChar);
    password = (password += selectChar);
    console.log(password);
    };
  } else {
    password = "";
    alert('You will need to start over.  Try harder.');
  };

  return password;

  


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



