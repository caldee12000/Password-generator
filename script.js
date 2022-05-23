// Assignment Code
function generatePassword() {
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '~', '}', '{', ')', '(', '#', '$', '%', '^', '&', '*', '?', ':', ';', '>', '<', '/'];
var possibleCharacters = [];



// prompts
numberOfCharacters = prompt("How many characters do you want ? Choose between 8-128 characters.");
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
   return " invalid number.";
} else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt("Please anter valid number.");
}
else {
  alert("Your password will be " + numberOfCharacters + " characters long.");
}

    
  hasLowercase = confirm("Do you want lowercase letters?");
  if (hasLowercase) {
    var turnToLowercase = alert("Adding lowercase letters.");
  }
  else {
    alert(" Will not add lowercase letters.");
  }

  hasUppercase = confirm("Do you want uppercase leetters?");
  if (hasUppercase) {
    alert("Adding uppercase letters.");
  }
  else {
    alert(" Will not add uppercase letters.");
  }

  hasNumbers = confirm("Do you want  numbers?");
  if (hasNumbers) {
    alert("Adding numbers.");
  }
  else {
    alert("Will not add numbers.");
  }

  hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    alert("Adding special characters.");
  }
  else {
    alert("Will not add special characters.");
  }

  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    return "Select one character.";
  };

  // Possible characters
  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // construct password
  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    
    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

