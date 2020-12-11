
var cities = [];
var ApiKey = "d039ab187b34696aa254cc930a98ecb6";



function renderButtons() {


}


$(".saveBtn").on("click", function(event){
   event.preventDefault();

   var city = $("#city-input").val().trim();

   if (city === "") {
       alert("Please enter valid city");
    
   } else {
        var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`;
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            cityName = response.name;
        
        cities.push(cityName);
        localStorage.setItem("cities", JSON.stringify(cities))
        console.log(localStorage);
        })
        
    }

});


function displayCurrentWeather() {
    var city = $(this).attr("data-name");
    
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        const tempF = (response.main.temp - 273.15) * 1.80 + 32;

        $("#city").html(`${response.name}`);
    })
}