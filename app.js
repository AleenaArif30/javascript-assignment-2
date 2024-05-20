// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


var city = prompt("Enter the name of your city.");
var correctanswer = "Karachi";

if (city == correctanswer) {
    alert(" 'welcome to the city of lights' ");
}

else {
    alert("welcome to your city");
}



// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


var gender = prompt("what is your gender?");
var genderfemale = "female";
var gendermale = "male";

if (gender == genderfemale) {
    alert("Good Morning Ma'am");
}

else {
    alert("Good Morning Sir");

}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var trafficsignal = prompt("Enter the color of road traffic signal according to your sistuation");


if (trafficsignal === "red") {
    alert("Must stop");
}

else if (trafficsignal === "green") {
    alert("go now");
}
else if (trafficsignal === "yellow") {
    alert("ready to go");
}
else {
    alert(" color is invalid ");
}




// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”


var carfuel = +prompt("what's your fuel sistuaion right now in car ");


if (carfuel < 0.25) {
    alert(" 'Please refill the fuel in your car' ");
}

else {
    alert(" your fuel is enough .");
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}


//         6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
var obtainmarks1 = +prompt("marks obtain in first subject");
var obtainmarks2 = +prompt("marks obtain in second subject");
var obtainmarks3 = +prompt("marks obtain in third subject");
var totalobtainmarks = obtainmarks1 + obtainmarks2 + obtainmarks3;
var percentage = (totalobtainmarks / 300) * 100;

if (percentage >= 80) {
    document.write("  Total Marks : 300  " + "</br>" + "  Marks Obtain :  " + totalobtainmarks + "</br>" + "  Percentage:  " + percentage + "</br>" + "  Grade :" + "   A-one   " + "</br>" + "  Remarks : " + " Excellent ");
}
else if (percentage >= 70) {
    document.write("  Total Marks : 300  " + "</br>" + "  Marks Obtain :  " + totalobtainmarks + "</br>" + "  Percentage:  " + percentage + "</br>" + "  Grade :" + "   A   " + "</br>" + "  Remarks : " + " Good ");
}
else if (percentage >= 60) {
    document.write("  Total Marks : 300  " + "</br>" + "  Marks Obtain :  " + totalobtainmarks + "</br>" + "  Percentage:  " + percentage + "</br>" + "  Grade :" + "   B  " + "</br>" + "  Remarks : " + " Average  ");


}

else if (percentage >= 50) {
    document.write("  Total Marks : 300  " + "</br>" + "  Marks Obtain :  " + totalobtainmarks + "</br>" + "  Percentage:  " + percentage + "</br>" + "  Grade :" + "   C  " + "</br>" + "  Remarks : " + " you need to improve  ");
}
 



//         7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var number = +prompt("guess the number between 1 to 10");
var secretnum = 7;

if (number === secretnum) {
    alert("Bingo! Correct answer");
}
else {
    alert(" close enough to correct answer ");

}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var num = prompt("Enter the number ");

if (num / 3 === 0) {
    alert("your number is right for divisible of 3 ");
}

else {
    alert("your number is not divisible by 3 ");

}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var number = prompt("Enter a number for chek the number is even or odd");

if (number % 2 === 0) {
    alert("number is even");
}

else {
    alert("number is odd");
}


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = +prompt("what's current tempreture in your area");


if (temperature > 40) {
    alert("  ' It is too hot outside' ");
}

else if (temperature > 30) {
    alert("  '  The weather today is normal ' ");
}

else if (temperature > 20) {
    alert("  ' Todays weather is cool .' ");
}

else if (temperature > 10) {
    alert("  'Omg! Todays weather is cool .' ");
}

else {
    alert("its quit cold outside")
}

document.write ("</br>") ;
document.write ("</br>") ;document.write ("</br>") ;

//          11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var operator = prompt("Enter your desire arthmetical operation which want you to done either + ,- ,*,/,% ");
var num1 = +prompt("Enter the first numbar ");
var num2 = +prompt("Enter the second number ");
var result ;
if (operator == '+') {
    result = num1+num2 ;

}

else if (operator == '-') {
    result = num1-num2 ;

}
else if (operator == '*') {
    result = num1*num2 ;

}

else if (operator == '/') {
    result = num1/num2 ;

}

else if (operator == '%') {
    result = num1%num2 ;

}

else{
    document.write ("not a number")

}

document.write ("</br>") ;document.write ("</br>") ;
document.write ("Result is "  + result ) ;

