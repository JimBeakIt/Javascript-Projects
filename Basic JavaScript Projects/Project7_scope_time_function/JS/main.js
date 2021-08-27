var X = 7;                                  //Defining a variable
function Add_numbers_1() {                  //Defining a function and naming it
    document.write(13 + X + "<br>");        //Writes out the answer to 13 + the variable giving to "X" and includes a line break
}
function Add_numbers_2() {                  //Defining a function and naming it
    document.write(X + 66 + "<br>");        //Writes out the answer to 66 + the variable giving to "X" and includes a line break
}
Add_numbers_1();                            //Executes the function
Add_numbers_2();                            //Executes the function

function Add_numbers_3() {                  //Defining a function and naming it
    var Y = 5;                              //Defining a variable
    document.write(4 + Y + "<br>");         //Writes out the answer to 4 + the variable giving to "Y" and includes a line break
}
function Add_numbers_4() {                  //Defining a function and naming it
    document.write(Y + 20);                 //Writes out the answer to 20 + the variable giving to "Y"
}
Add_numbers_3();                            //Executes the function
Add_numbers_4();                            //Executes the function

function get_Date() {                       //Defining a function and naming it
    if (new Date() .getHours() < 16) {      //The .getHours() method gets the information on the hours in a day
        document.getElementById("Hello").innerHTML = "How are you today?";      //Putting the value of result into HTML element with "Hello" id
    }
}

function big() {                            //Defining a function and naming it
    if (20 > 16) {                          //Asks the question is 20 a larger number then 16
        document.getElementById("number").innerHTML = "True";                   //If 20 is larger then 16, the result would be true and would be put into the HTML element with "number" id
    }
}

function Year_Function() {                  //Defining a function and naming it
    Year = document.getElementById("Year").value;                               //Allows you to input value into the HTML element with "Year" id
    if (Year >= 2000) {                     //Asks if you were born in 2000 or after
        Century = "You were born this Century!";                                //If you were it will display "You were born this century!"
    }
    else {                                  //If you were born before 2000 it would display "You were born in the 19th or 20th Century!"
        Century = "You were born in the 19th or 20th Century!";
    }
    document.getElementById("What_year?").innerHTML = Century;                  //Putting the value of result "Century" into HTML element with "What_year?" id
}

function Time_function() {                  //Defining a function and naming it
    var Time = new Date() .getHours();      //The .getHours() method gets the information on the hours in a day
    var Reply;                              //Defining a variable
    if (Time < 12 == Time > 0) {            //If the time is between 0 and 12 it would display "It is morning time!"
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {      //If the time is between 12 and 18 it would display "It is the afternoon."
        Reply = "It is the afternoon.";
    }
    else {                                  //If the time is after 18 it would display "It is evening time."
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;                   //Putting the value of result "Reply" into HTML element with "Time_of_day" id
}