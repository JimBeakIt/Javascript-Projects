function A_function() {                     //Defining a function and naming it
    var str = "The sky is blue!";           //Defining a variable and giving it a string value
    var result = str.fontcolor("blue");     //Using the fontcolor method on str variable
    document.getElementById("Blue_Text").innerHTML = result;    //Putting the value of result into HTML element with "Blue_Text" id
}

function MyFunction() {                     //Defining a function and naming it
    var sentence = "This is";               //Defining a variable and giving it a string value
    sentence += " great!";                  //The += assignment operator is used to add (concatenate) strings
    document.getElementById("Concatenate").innerHTML = sentence;    //Putting the value of result into HTML element with "Concatenate" id
}

function addition_Function() {              //Defining a function and naming it
    var addition = 10 + 3;                  //Defining a variable and giving it a number value
    document.getElementById("Math").innerHTML = "10 + 3 = " + addition;     //Putting the value of result into HTML element with "Math" id
}

function subtraction_Function() {           //Defining a function and naming it
    var Subtraction = 8 - 5;                //Defining a variable and giving it a number value
    document.getElementById("Subtract").innerHTML = "8 - 5 = " + Subtraction;   //Putting the value of result into HTML element with "Subtract" id
}

function multiplication_Function() {        //Defining a function and naming it
    var Multiplication = 15 * 2;            //Defining a variable and giving it a number value
    document.getElementById("Multiply").innerHTML = "15 * 2 = " + Multiplication;   //Putting the value of result into HTML element with "Multiply" id
}

function division_Function() {              //Defining a function and naming it
    var Division = 26 / 2;                  //Defining a variable and giving it a number value
    document.getElementById("Division").innerHTML = "26 / 2 = " + Division;         //Putting the value of result into HTML element with "Division" id
}

function more_Math() {                      //Defining a function and naming it
    var simple_Math = (4 + 6) * 5 / 10 - 1; //Defining a variable and giving it a number value
    document.getElementById("operations").innerHTML = "4 plus 6, multiplied by 5, divided by 10 and then subtracted by 1 equals " + simple_Math;    //Putting the value of result into HTML element with "operations" id
}

function modulus_Operator() {               //Defining a function and naming it
    var Modulus = 19 % 3;                   //Defining a variable and giving it a number value
    document.getElementById("Modulus").innerHTML = "When you divide 19 by 3 you have a remainder of: " + Modulus;   //Putting the value of result into HTML element with "Modulus" id
}

function negation_Operator() {              //Defining a function and naming it
    var x = 15;                             //Defining a variable and giving it a number value
    document.getElementById("Negation").innerHTML = -x;     //Putting the value of result into HTML element with "Negation" id
}

var X = 4;                                  //Defining a variable and giving it a number value
X++;                                        //Increments the variable
document.write(X);                          //Writes a string of text based on the variable.

document.write("<br>");                     //Puts a line break in a text

var Y = 10.44;                              //Defining a variable and giving it a number value
Y--;                                        //Decrements the variable
document.write(Y);                          //Writes a string of text based on the variable.

window.alert(Math.random() * 50);           //Display a pop up window with a random number between 0 and 50

function Round() {                          //Defining a function and naming it
    var v = Math.round(5.7);                //Defining a variable and giving it a number value
document.getElementById("demo").innerHTML = "Rounding 5.7 to the nearest interger is: " + v;     //Putting the value of result into HTML element with "demo" id
}