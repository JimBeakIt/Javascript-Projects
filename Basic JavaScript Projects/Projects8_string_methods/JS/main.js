function full_Sentence() {                          //Defining a function and naming it
    var part_1 = "I think ";                        //Defining multiple variables into strings.
    var part_2 = "it is ";
    var part_3 = "going to be a ";
    var part_4 = "sunny day.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);                     //Links the strings together
    document.getElementById("Concatenate").innerHTML = whole_sentence;              //Putting the value of "whole_sentence" into HTML element with "Concatenate" id
}

function slice_Method() {                           //Defining a function and naming it
    var Sentence = "I want something to eat!";      //Defining a variable into a sting
    var Section = Sentence.slice(7,16);             //Returns a section of a string
    document.getElementById("Slice").innerHTML = Section;                           //Putting the value of "Section" into HTML element with "Slice" id
}

function upperCase() {                              //Defining a function and naming it
    var str = "Lets go to the beach!";              //Defining a variable into a sting
    var res = str.toUpperCase();                    //Converts a string into Upper case
    document.getElementById("Big").innerHTML = res;                                 //Putting the value of "res" into HTML element with "Big" id
}

function search() {                                 //Defining a function and naming it
    let str = "Take a trip to Ipswich!";            //Defining a variable into a sting
    document.getElementById("trip").innerHTML = str.search("Ipswich");              //Finds the string match "Ipswich" into HTML element with "trip" id
}

function string_Method() {                          //Defining a function and naming it
    var X =64;                                      //Defining a variable into a number
    document.getElementById("Numbers_to_string").innerHTML = X.toString();          //Converts the number "64" into a string and puts the result into HTML element with "Numbers_to_string" id
}

function precision_Method() {                       //Defining a function and naming it
    var X = 326543.622119476;                       //Defining a variable into a number
    document.getElementById("Precision").innerHTML = X.toPrecision(8);              //Changes the number to a specified lentgth and puts the result into HTML element with "Precision" id
}

function fixed_Method() {                           //Defining a function and naming it
    var num = 3.528116;                             //Defining a variable into a number
    var n = num.toFixed(2);                         //Rounds the number to keep only 2 decimals
    document.getElementById("fixed").innerHTML = n;                                 //Putting the value of "n" into HTML element with "fixed" id
}

function value_Method() {                           //Defining a function and naming it
    let str = "Good Day!";                          //Defining a variable into a sting
    document.getElementById("value").innerHTML = str.valueOf();                     //Returns the value of a string into "value" id
}