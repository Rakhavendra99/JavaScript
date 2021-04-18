//variable                      Time(20.40)
var firstName = "Rakhavendra";
var lastName = "S M";
var age;
age = 10;
console.log(age);
console.log(firstName);
firstName = "pravin";
console.log(firstName);

//Data type                     Time(26.30)
var str = "Rakhavendra is a Good boy";
console.log(str);
str = "Pravin is a Good boy";
console.log(str);
str = "Both 'Rakhavendra' and 'Pravin' is Good boy";
console.log(str);

var a, b;
var num = 27.2423;
console.log(num);
num1 = 3;
num2 = 9;
console.log(a);
a = null;
console.log(a);

//Operator                      Time(33.25)
a = 2 * 4;
console.log(a);
a = 9283 - 234;
console.log(a);
a = 5 + 5 * 5;
console.log(a);
a = (5 + 5) * 5;
console.log(a);

//Comparison Operator           Time(37.20)
a = 4;
b = 4;
console.log(a == b);
b = "4";
console.log(a == b); // it some error a is int b is string
console.log(a === b); //perfectly working a is int b is string
console.log(a != b);
console.log(a !== b);

//Type Coercion                 Time(42.05)
a = 10 + 5;
console.log(a);
a = 10 + "5";
console.log(a);
a = 10 * "5";
console.log(a);
str = "Hello " + "Welcome " + "To All";
console.log(str);
a = 5 + 2 + "b";
console.log(a);
a = "b" + 5 + 2;
console.log(a);
console.log(5 === 5);
console.log((5 === 5) === 5);
console.log(true === 5);
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);

//Conditional Statement             Time(49.00)
age = 11;
if (age >= 10) {
  console.log(firstName);
} else if (age <= 10) {
  console.log(lastName);
}

//If... Else If...                 Time(53.35)
var prof = "doctor";
if (prof === "instructor") {
  console.log(prof + " teacher students");
} else if (prof === "doctor") {
  console.log(prof + " treats people");
} else if (prof === "doctor") {
  console.log(prof + " creates the Music");
} else {
  console.log("prof is not match");
}

//logical operator                  Time(57.20)
if (5 === 3 && 4 === 4) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}

if (5 === 3 || 4 === 4) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}

if (!true) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}

/* 
***********************************Coding task No 1*************************************
1. Create variable to represent scores of exams for John and Nick and set Values as 80 and 45
2. Create variable to set the lower limit for passing an exam and assign to it value as 51
3. Write the condition in if statement, which will check if both students have passed an exam and log the result in console
4. Use else if statement in order to check if one of the students has passed an exam and log the result in console
5. Use else statement in order to display in console that both students have failed.
6. Incase of passing the exam by one of the students, find out which one was that and display in console as an additional information the student name and his points
7. Test all possible cases (a.both students passed an exam; b. John passed and Nick failed: c. Nick passed and john failed; d.Both students failed)

*/

// SOLUTION:

var John = 76;
var Nick = 45;
var pass = 51;
if (John >= pass && Nick >= pass) {
  console.log("Both student passed");
  console.log("John " + John + " points and " + Nick + " points");
} else if (John >= pass || Nick >= pass) {
  console.log("One of the student passed");
  if (John > Nick) {
    console.log("John is passed and " + John + " points");
    console.log("Nick is fail " + Nick + " points");
  } else {
    console.log("Nick is passed and " + Nick + " points");
    console.log("John is fail " + John + " points");
  }
} else {
  console.log("Both of the student failed");
  console.log("John " + John + " points and " + Nick + " points");
}
