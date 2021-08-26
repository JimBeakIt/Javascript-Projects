function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function () {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Trainers (Manufacturer, Brand, Color) {
    this.Trainers_Manufacturer = Manufacturer;
    this.Trainers_Brand = Brand;
    this.Trainers_Color = Color;
}
var Sam = new Trainers("Adidas", "Gazelle", "Core Black");
var Amber = new Trainers("Nike", "Air Max", "Dark Smoke Grey");
var Lucy = new Trainers("Puma", "Suede", 1971, "black-white");
function myFunktion() {
    document.getElementById("New_and_This").innerHTML =
    "Amber wears a " + Amber.Trainers_Color + "-colored " + Amber.Trainers_Manufacturer +
      Amber.Trainers_Brand;
}

function Adding() {
document.getElementById("Nested_Function").innerHTML = add();
function add() {
  let counter = 2;
  function plus() {counter += 1;}
  plus();  
  return counter; 
}
}