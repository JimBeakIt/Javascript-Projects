document.write(typeof "Word");                          //Writes out the variable's data type

function my_Function() {                                //Defining a function and naming it
    document.getElementById("Test").innerHTML = 0/0;    //Putting the value of result into HTML element with "Test" id
}

function Infin() {                                      //Defining a function and naming it
    document.getElementById("Infinity").innerHTML =  1.7986931348623157E309         //Putting the value of result into HTML element with "Infinity" id
}

function nInfin() {                                     //Defining a function and naming it
    document.getElementById("nInfinity").innerHTML =  -1.7988931348623157E309       //Putting the value of result into HTML element with "nInfinity" id
}

document.write("<br>");                                 //Puts a line break in a text

document.write(7 > 6);                                  //Writes out if the outcome is true or false

document.write("<br>");                                 //Puts a line break in a text

document.write(88 < 80);                                //Writes out if the outcome is true or false

console.log (9 - 1) ;                                   //Writes out if the outcome is true or false in the console log

document.write("<br>");                                 //Puts a line break in a text

document.write("14" + 7);                               //Writes out if the outcome is true or false

document.write("<br>");                                 //Puts a line break in a text

document.write(7 == 4);                                 //Writes out if the outcome is true or false

document.write("<br>");                                 //Puts a line break in a text

document.write(4 === 4)                                 //Writes out if the outcome is true or false

document.write("34" === "32")                           //Writes out if the outcome is true or false

document.write("22" === 22)                             //Writes out if the outcome is true or false

document.write("Orange" === "Pink")                     //Writes out if the outcome is true or false

document.write("<br>");                                 //Puts a line break in a text

document.write(5 > 2 && 9 > 7);                         //Writes out if the outcome is true or false

document.write("<br>");                                 //Puts a line break in a text

document.write(5 > 2 && 9 < 7);                         //Writes out if the outcome is true or false

document.write("<br>");                                 //Puts a line break in a text

document.write(11 > 19 || 3 > 13);                      //Writes out if the outcome is true or false

document.write("<br>");                                 //Puts a line break in a text

document.write(11 < 19 || 3 < 13);                      //Writes out if the outcome is true or false

document.write("<br>");                                 //Puts a line break in a text                    

function not_Function() {                               //Defining a function and naming it
    document.getElementById("Not").innerHTML = !(13 > 12);      ////Putting the value of result into HTML element with "Not" id
}