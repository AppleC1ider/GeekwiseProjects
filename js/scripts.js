var yes = false;
console.log(yes);
var firstNumnber = 22;
var secondNumber = 11;

{
let yo = "this keeps you from repeating variables and is enclosed in its scope"
}


{//const var
const truth = "ep8 was .... terrible...";
console.log(truth);
}
// cannot redifine or redeclare
const truth = "ep8 was ... meh...";
console.log(truth);
// does not get hoisted

//dates
let rightNow = new Date();
console.log(Date.parse(rightNow));
//quick maths
var iLikePie = Math.PI;
console.log(iLikePie);



var string ="lallalalala";

var newString = new String("lalalalal");

console.log(string);
console.log(newString.toUpperCase());








var myArray = ["Hello World", "sup dawg", "sup dog"];
console.log(myArray.length);





var myObject = {
  myString: "Wello World",
  magicNumber: 42
};





/*

let helloMessage = alert("Hey there buy my stuff for $9.99...");

let confirmMessage = confirm("Is your name Jesus?");
console.log(confirmMessage);

let promptMessage = prompt("tell me the password...");
console.log(promptMessage);
*/


let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
console.log(firstName);
alert("Your last name is " + lastName);
let birthday = prompt("What is your birthday?", " Please answer in the following format: 1/1/1900");
confirm(new Date(birthday));
