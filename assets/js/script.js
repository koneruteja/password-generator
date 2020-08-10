// The Password generator will provide a password with 8-50  characters based on criteria the user specifies.

//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Main function
function generatePassword() {
  // prompt user for password length
  var confirmLength = (prompt("What should be the length of your password?"));

// Making sure the user choice is within the permittable character lengths 
while(confirmLength <= 7 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters Try again");
    var confirmLength = (prompt("What should be the length of your password?"));
    } 

//verifying user input
if(isNaN(confirmLength)) { 
  alert("Password length must be between 8-128 characters Try again");
  var confirmLength = (prompt("What should be the length of your password? please enter a number only"));
  generatePassword()
}
else {
  alert(`Your password will have ${confirmLength} characters`);
}

// Determine parameters of password 
var confirmSpecialCharacter = confirm("would you like to include special characters? click ok");
var confirmNumericCharacter = confirm("would you like to include numeric characters? click ok");    
var confirmLowerCase = confirm("would you like to include lowercase characters? click ok");
var confirmUpperCase = confirm("would you like to include uppercase characters? click ok");
// need atleast one parameter to be selected 
while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
alert("You must choose at least one parameter");
var confirmSpecialCharacter = confirm("would you like to include special characters? click ok");
var confirmNumericCharacter = confirm("would you like to include numeric characters? click ok");    
var confirmLowerCase = confirm("would you like to include lowercase characters? click ok");
var confirmUpperCase = confirm("would you like to include uppercase characters? click ok"); 
} 

      // Assign an action to the password parameters NEED TO FIX THIS
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}