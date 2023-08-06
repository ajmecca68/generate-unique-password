// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lcLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var ucLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "_", "?", ">", "<", "}", "{", "|", ".", ",", "[", "]", "~", "`", ":", ";"];


function start() {
var pwdGen = [];
//start with prompt for length of password
var pwd_length = prompt("What is the length of the password? (8-129)", "12"); 
  //make sure length requested is between 8 and 129.
    if (pwd_length === null) {
      return;
        } else {
    if (pwd_length < 8 || pwd_length > 128) {
//if not within length parameters pop an alert and exit function
  alert("Sorry needs to be between 8 and 129");
  return;
} 
}
//prompt if user would like to use numbers
var pwd_numb = confirm("Would you like to use numbers?");
if (pwd_numb) {
//if yes, then concatonate pwdGen with the numbers array
  var pwdGen = pwdGen.concat(numbers);
}
//prompt if user would like to use lowercase letters
var pwd_lcLet = confirm("Would you like to use LowerCase Letters?");
if (pwd_lcLet) {
//if yes, then concatonate pwdGen with the lower case Letters array
  var pwdGen = pwdGen.concat(lcLetters);
}
//prompt if user would like to use upper case letters
var pwd_ucLet = confirm("Would you like to upper case letters?");
if (pwd_ucLet) {
//if yes, then concatonate pwdGen with the upper case letters array
  var pwdGen = pwdGen.concat(ucLetters);
}
//prompt if user would like to use special characters
var pwd_spec = confirm("Would you like to use Special Characters?");
if (pwd_spec) {
//if yes, then concatonate pwdGen with the special characters array
  var pwdGen = pwdGen.concat(special);
}
//if you have not chosen any characters prompt and exit
if (pwdGen.length === 0) {
  alert("Sorry you have not chosen any characters");
  return;
}

//Checks if password length is less than the length of the array
if (pwdGen.length < parseInt(pwd_length)) {
//loops through a max of 20 times concatonating the array with itself
  for (var i = 0; i < 20; i++){
    var pwdGen = pwdGen.concat(pwdGen);   
//If password length is greater it loops through concatonating
//itself until the array is longer than the requestested pwd length. 
   if (pwdGen.length > parseInt(pwd_length)) {
        break;
      }
  }  
}

//the function that shuffles any given array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

//shuffle pwdGen
shuffle(pwdGen);

//slices the selected number of items based on password length requested
var selected = pwdGen.slice(0,pwd_length);

//Joins the array items to remove any quotes and commas
var selectedfinal = selected.join("")

//assigns the array string to the password id field in html
document.getElementById('password').innerHTML = selectedfinal.toString();
 
//print various arrays to console log for testing.
console.log(typeof pwdGen.length)
console.log(typeof parseInt(pwd_length))
console.log(pwdGen);
console.log(selected);
console.log(selectedfinal);
console.log(selectedfinal.length);
}

//Open box that asks how long the password

//Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

 // passwordText.value = password;

//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

