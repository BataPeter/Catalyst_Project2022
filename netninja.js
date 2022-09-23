// // var youLikeMeat = true;
// // if (youLikeMeat) {
// // }
// // console.log("eat chips");

// // var myNum = 10;
// // if (myNum == 10) {
// // }
// // console.log("You are right");

// // var myNum = "30";
// // if (myNum <= 30) {
// //   console.log("Go to sleep");
// // } else {
// //   console.log("Read your books");
// // }

// // var youLikeFood = false;
// // if (youLikeFood) {
// //   console.log("You are a glutton");
// // } else {
// //   console.log("You are discplined");
// // }

// // var myAge = 30;
// // if (myAge > 30) {
// //   console.log("I am gonna be a mzee soon");
// // } else if (myAge == 10) {
// //   console.log("I am no longer a young child");
// // } else if (myAge == 40) {
// //   console.log("I can vote m7");
// // } else {
// //   console.log("Quit the whole thing");
// // }
// // var x = 6;
// // console.log(x >5)
// // console.log(x===6)

// //WhileLoop
// var age = 5;
// while (age < 10) {
//   console.log("Your age is less than 10");
//   age++;
// }
// document.write("You are now over 10");

// //ForLoop
// for (age = 5; age < 10; age++) {
//   console.log("Your age is less than 10");
// }
// document.write("You are now over 10");

//Object literals
let user = {
  dob: "May 1990",
  location: "senge",
  name: "Hannah Mwesigye",
  email: "tosseka@yahoo.com",
  country: "ugandan",
  continent: "Africa",
};
console.log(user);
console.log(user.continent);
user.continent = "South America";
console.log(user.continent); //dot notation
console.log(user["email"]); //square bracket notation
user["name"]= "Ronitah Anna Mwesigye";
console.log(user["name"]);
console.log(typeof user);

//Math Object
console.log(Math);
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT1_2);

const area =7.9;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random numbers
const random = Math.random();
console.log(Math.round(random * 100));
