function my_Dictionary() {          //Defining a function and naming it
    var Animal = {                  //Defining a variable
        Species:"Cat",              //Defining a variable and giving it a string value
        Color:"Ginger",             //Defining a variable and giving it a string value
        Breed:"Tabby",              //Defining a variable and giving it a string value
        Age:8,                      //Defining a variable and giving it a number value
        Sound:"Miaw!"               //Defining a variable and giving it a string value
    };
    delete Animal.Age;              //A delete statement that removes the key before its value is displayed
    document.getElementById("Dictionary").innerHTML = Animal.Age;               //Putting the value of result into HTML element with "Dictionary" id
    document.getElementById("Dictionary2").innerHTML = Animal.Breed;            //Putting the value of result into HTML element with "Dictionary2" id

}