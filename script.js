// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ask the user for length (Min 8 char to Max 128)
  let passwordLength = parseInt(prompt("How long should the password be?"));
  if (passwordLength <8) {
    alert("Error, invalid password length.\n Please choose a password greater than 8 and less than 128 characters.");
    return "";
  }
  else if (passwordLength >128) {
     alert("Error, invalid password length.\n Please choose a password greater than 8 and less than 128 characters.");
     return "";
  }
  // ask the user for which characters to include
  var includeUpperCase = confirm("Include uppercase letters in password?");
  var includeLowerCase = confirm("Include lowercase letters in password?");
  var includeNumbers = confirm("Include numbers in password?");
  var includeSpecialCharacters= confirm("Include special characters in password?");

  if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSpecialCharacters) {
      alert("Error, invalid character types\nPlease include at least one type of special character, number, lower case and upper case.");
      return "";
  }

  const specialCharacter = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let password ="";
  let characters = "";
// defines the uppercase variable and allows the user to select uppercase characters.
  if (includeUpperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
// defines the lowercase variable and allows the user to select lowercase characters.
  if (includeLowerCase){
    characters += " abcdefghijklmnopqrstuvwxyz";
  }
// defines the numbers variable and allows the user to select numbers into their random password.
  if (includeNumbers){
    characters += "1234567890";
  }
// calls upon the const specialCharacters on line 22 and allows the user to select special charcters into their password.
  if (includeSpecialCharacters){
    characters += specialCharacter;
  }
// the loop allows us to generate a password between 8-128 characters long by using the passwordLength variable however many times, depending on how long the user wans the password.
  for (let i = 0; i < passwordLength; i++) {
    let index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
// returns the randomly generated password to the user.
  return password;
// the += operator performs addition to either the string variables or the number variables on the two operands and assigns the results to the left operand.
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
