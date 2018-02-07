//========== take home part 1 my version============
// var arr = [];
//  for(var i = 0; i < 3; i++){
//    arr.push(prompt("Add something you want to do this week!"));
//  }
//  console.log(arr);


//========== Take home part 1 Reykers version==========
//     var todos = [];
//     var todoOne = prompt("What do you want to do this weekend?");
//     var todoTwo = prompt("What do you want to do this weekend?");
//     var todoThree = prompt("What do you want to do this weekend?");
//
//     todos.push(todoOne,todoTwo,todoThree);
//     console.log(todos);
//
// // ========== Take home step 2=============
//
// var todosWithDays =[];
// for(let i = 0; i < todos.length; i++){
//   var due = prompt(`What day do you want to get ${todos[i]} done?`, `Please use this format: day/month/year`);
//   due = new Date(due);
//   todosWithDays.push([todos[i],due]);
// }
// console.log(todosWithDays);
//
// //============Take home step 3============
//
//   var sortedWithIndices = [];
//   let j = 0;
//   var now = new Date().getTime();// converts js date object to ms
//   while(j < todosWithDays.length){
//     let oneDay = 24 * 60 * 60 * 1000// hours * minutes * seconds * miliseconds
//     var diffDays = Math.round((todosWithDays[j][1].getTime() - now)/oneDay);
//     sortedWithIndices.push([diffDays, todosWithDays[j]]);
//     j++
//   }
// sortedWithIndices.sort();
//
// console.log(sortedWithIndices[sortedWithIndices.length - 1][1], ' will take the longest');
  //==============Take home my version =============
// var arrThing = [];
// for(things = 0; things < 3; things++){
//  arrThing.push(prompt("Add something you want to do this week !(There are 3 but we will add them one at a time.)"));
// }
// alert(arrThing);
//
// var arrThingDays = [];
// for(let i = 0; i < arrThing.length; i++){
//   var due = prompt(`When do you want to complete ${arrThing[i]}? , Please use the date format DD/MM/YYYY ` );
//   due = new Date(due);
//   arrThingDays.push([arrThing[i],due]);
// }
// console.log(arrThingDays);
//
// var sorted = [];
// let j = 0;
// var now = new Date().getTime();
// while(j < arrThingDays.length){
//   let oneDay = 24 * 60 * 60 * 1000;
//   var diffDays = Math.round((arrThingDays[j][1].getTime() - now)/oneDay);
//   sorted.push([[diffDays], arrThingDays[j]]);
//   j++
// }
//
// sorted.sort();
// console.log(sorted);
//
// console.log(sorted[sorted.length - 1][1], ' will take the longest');
// alert(sorted[sorted.length - 1][1], ' will take the longest');
//
//


//======FUNCTIONS=========
//========== try it out part 1 ===============
// const dogAge = prompt("How old is dat dog?",'3');
//
// function dogYear(age){
//   parseInt(age);
//   if(isNaN(age)){
//     // if the user gives me a non number
//     dogYear(prompt("Nah, for real... NUMBER", "10"));
//
//   }else{
//     alert(age *= 7);
//
//   }
// }
// dogYear(dogAge);

//======== Try it out part 2 ================
// var stuff=[];
// var age = prompt("How old are you?");
// var death = prompt("When will you die?");
// var thing = prompt("What do you want everyday?");
// var amount = prompt("How much will you need everyday?");
// console.log(thing);
// stuff.push([age,death,amount]);
// console.log(stuff);
//
//
//
// function see(arg){
//   var passed = true;
//   for(let i = 0; i < args.length; i++){
//     if(isNaN(parseInt(args[i]))){
//       passed = false;
//     }
//   }
//   return passed;
// }
//
