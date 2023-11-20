

var cities = []


function displayWeather() {
    var city = $(this).attr("data-name");
    var apiURL =  "https://api.openweathermap.org/data/2.5/forecast?q=" + cities + "&appid=6de479150326f489e578ba2e14273c0b";

  
    fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       console.log(data)
    })
}

function createButtons () {
    $("#history").empty();


for (var i = 0; i <cities.length; i++) {
    var createBtn = $("<button>")
    createBtn.addClass("city-btn");
    createBtn.attr("data-name", cities[i])
    createBtn.text(cities[i])
    $("#history").prepend(createBtn)
}

}



$("#search-button").on("click", function(event){

    $("#history").empty();

    event.preventDefault();
    var city = $("#search-input").val().trim();
    cities.push(city)
    createButtons()
})

// This function handles events where one button is clicked
$("#search-button").on("click", function (event) {
    event.preventDefault();
  
    // This line grabs the input from the textbox
    var city = $("#search-button").val().trim();
  
    // Adding the movie from the textbox to our array
    cities.push(city);
    console.log(cities);


displayWeather()
});




// current weather 
// * The city name
// * The date
// * An icon representation of weather conditions
// * The temperature
// * The humidity
// * The wind speed

var currentCity
var currentDate
var currentIcon
var currentTemp
var currentHumidity
var currentWindSpeed

// Five day forecast
// * The date
// * An icon representation of weather conditions
// * The temperature
// * The humidity
// * When a user click on a city in the search history they are again presented with current and future conditions for that city