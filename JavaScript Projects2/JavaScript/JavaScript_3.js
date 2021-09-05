function displayType(city) {
    var cityType = city.getAttribute("data-city-type");
    alert(cityType + " is the capital city of " + city.innerHTML + "!");
}