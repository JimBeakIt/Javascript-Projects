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