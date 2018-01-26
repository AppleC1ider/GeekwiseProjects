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

/*
let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
console.log(firstName);
alert("Your last name is " + lastName);
let birthday = prompt("What is your birthday?", " Please answer in the following format: 1/1/1900");
confirm(new Date(birthday));
*/
//this is my gh-page branch
/*
const betstnumber = 42;

console.log(!betstnumber);

var string = "1";
var number = 1;
console.log(string === number);

var thing = "string";
var thing2 = new String("string");
var thing3 = (thing === thing2);
console.log(thing3);
var thing4 = (thing == thing2);
console.log(thing4);
console.log(typeof(thing));
console.log(typeof(thing2));





var number1 = 12;
var number2 = 56;
number1 += 12;
console.log(number1);


var numbers = parseInt(prompt("give me a number","10"));
var numbers2 = parseInt(prompt("give me another number","10"));
alert(parseInt(numbers + numbers2));

*/


// CONTROL FLOW EXAMPLES!!!-----------------========

//  if/else alows for 2 things to happens you can add an else if for 3 options
/*
const bestMovie = 'inception';

if(typeof(bestMovie) === 'string'){
  alert('Yay its a string!');
}else if (typeof(bestMovie) === 'number'){
  alert('Its a number!');
}
else{
  alert('It\'s is not a string');
}
*/



// SWTICH STATEMENT !!!!!!!!!!!---------------------------

/*
const bestMovie = "Inception";

switch(typeof(bestMovie)){
  case "string":
    alert("yay it\'s a string!");
    break;
    // ALWAYS END THE CASE WITH A BREAK==========================
  case 'number':
    alert("yay it\'s a number!");
    break;
  case 'boolean':
    alert('yay it\'s a boolean');
    break;
  case 'array':
    alert('yay it\'s an array');
    break;
  case 'object':
    alert('yay it\'s an object!')
    break;
  default:
    alert('its something else');
    break;
}
*/

// THIS IS A TERNARY!!!!!!--------------------
//
// const bestMovie = "inception";
// bestMovie !== undefined ? alert('it exists') : alert("it doesnt exist");
//--------------------------

var age = prompt('What is your age?');

if(age >= '18'){
  age = confirm("are you under 80 years old?");
}else {
  alert("sorry you are not old enough, you must be 18 or older")
}
if (age === true){
  age = confirm('do you like starwars?');

}else if(age === false){
  confirm('do you like prunes?');
}else{

}
if (age === true){
  alert("May the Force be with You!");
}
