function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is a great choice!";
    switch(Animals) {
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
        break;
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Rabbit":
            Animal_Output = "Rabbit" + Animal_String;
        break;
        case "Hamster":
            Animal_Output = "Hamster" + Animal_String;
        break;
        case "Monkey":
            Animal_Output = "Monkey" + Animal_String;
        break;
        case "Elephant":
            Animal_Output = "Elephant" + Animal_String;
        break;
        default:
        Animal_Output = "Please enter a animal exactly as written on the above list.";                          
    }
    document.getElementById("Output").innerHTML = Animal_Output
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "See, I told you!";
}

var c = document.getElementById("Thick");
var ctx = c.getContext("2d");
ctx.fillStyle = "orange";
ctx.fillRect(20, 20, 150, 100);

var d = document.getElementById("Gradient");
var dtx = d.getContext("2d");

var grd = dtx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");

dtx.fillStyle = grd;
dtx.fillRect(20, 20, 170, 100);