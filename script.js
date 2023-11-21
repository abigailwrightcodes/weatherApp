
citiesArray = []

function displayCurrentWeather () {
    currentCity =$(this).attr("data-name");
    currentWeatherApiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citiesArray + "&appid=6de479150326f489e578ba2e14273c0b";

    fetch(currentWeatherApiURL)
    .then(function (response){
        return response.json();
    })
    .then(function (currentWeatherData) {
        console.log(currentWeatherData)


        // CREATE CURRENT DIV

        var currentWeatherDiv = $("<div>")
        currentWeatherDiv.addClass("currentWeather")
        $("#today").append(currentWeatherDiv)



// CURRENT CITY HEADING - NAME, DATE ICON
        var currentCityName = currentWeatherData.name
        const currentDate = dayjs();
        const formattedDate = currentDate. format('DD-MM-YY');
        console. log(formattedDate);

        // CURRENT ICON
        var currentIcon = currentWeatherData.weather[0].icon
        console.log(currentIcon)
        var pageIcon = document.createElement("img")
        pageIcon.src="http://openweathermap.org/img/wn/" + currentIcon + ".png"
        // HEADING  
        var heading = $("<h1>").text(currentCityName + " " + formattedDate)
        currentWeatherDiv.append(heading, pageIcon)

// CURRENT WEATHER CONDITIONS
       
        var currentCityTemp = currentWeatherData.main.temp
        var currentCityTempCelsius = currentCityTemp -273.15
        var myCityTempRound = currentCityTempCelsius.toFixed(2);
        var currentTemp = $("<p>").text("The current Temperature is: " + myCityTempRound + " ℃" )


        var currentHumidityData = currentWeatherData.main.humidity
        var currentHumidity = $("<p>").text("Humidity: " + currentHumidityData + "%")

        var currentWindData = currentWeatherData.wind.speed
        var currentWind = $("<p>").text("Wind: " + currentWindData + " KPH")

        currentWeatherDiv.append(currentTemp, currentHumidity, currentWind)
    }
    )
}


//CREATE BUTTONS

function createButtons () {
   

    for (var i=0; i < citiesArray.length; i++) {
        var createBtn = $("<button>")
        createBtn.addClass("cityBtn")
        createBtn.attr("data-name" , citiesArray[i])
        createBtn.text(citiesArray[i])
        $("#history").prepend(createBtn)
    }



}

// SEARCH INPUT
$("#search-button").on("click", function(event){

    $("#history").empty();
    event.preventDefault()
    var searchCityInput = $("#search-input").val().trim();
    citiesArray.push(searchCityInput)
    createButtons()

    displayCurrentWeather()



    // SAVE TO LOCAL STORAGE
 var searchCityInput = document.getElementById("search-input").value;
localStorage.setItem("search", searchCityInput);

var storedSearch = localStorage.getItem("search")

console.log(storedSearch)

})