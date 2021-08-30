function Call_Loop() {
    var Digit = "";
    var X = 11;
    while (X < 21) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Keyboard", "Bongo", "Piano", "Saxophone", "Bagpipes", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "barking";
    Dog_Picture[1] = "running";
    Dog_Picture[2] = "sleeping";
    Dog_Picture[3] = "eating";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " +
        Dog_Picture[2] + ".";
}

function constant_function() {
    const Car = {Make:"Ford ", Model:"Focus", price:"£6000"};
    Car.Model = "Fiesta";
    Car.price = "£5500";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Car.Make + Car.Model + " is now " + Car.price;

}

var J = 33;
document.write(J);
{
    let J = 66;
    document.write("<br>" + J);
}
document.write("<br>" + J);

var res = fun(21, 13);  
function fun(x, y)  
{  
return x * y;  
}  
document.write("<br>" + res);  

let phone = {
    make: "Apple ",
    model: "iPhone X ",
    year: "2017 ",
    color: "space gray ",
    description : function() {
        return "This phone is a " + this.year + this.make + this.model + this.color;
    }
};
document.getElementById("Phone_Object").innerHTML = phone.description();

let text = "";
for (let i = 0; i < 15; i++) {
  if (i === 7) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("Break").innerHTML = text;

let tetx = "";
for (let i = 0; i < 9; i++) {
  if (i === 5) { continue; }
  tetx += "The number is " + i + "<br>";
}
document.getElementById("Continue").innerHTML = tetx;