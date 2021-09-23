// Assignment Code
var generateBtn = document.querySelector('#generate');
var charset = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
var passwordLength = 0;

function generatePassword() {
  passwordLength = prompt("How long do you want your password?  Enter a number between 8 and 128.");
  function numberValidation() {
    if (isNaN(passwordLength)) {
      alert("Please enter a number between 8 and 128.");
      return false;
    } else {
      return true;
    };
  }
  function numberRangeValidation() {
    if (passwordLength < 8) {
      alert("Please enter a number between 8 and 128.");
      return false;
    } else {
      
      return true;
  };
  }
  var password = "";
  numberValidation();
  numberRangeValidation();
    
  
  for (i=0; i < passwordLength; i++) {
    selectChar = charset[Math.floor(Math.random()*charset.length)];
    console.log(selectChar);
    password = (password += selectChar);
    console.log(password);
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



