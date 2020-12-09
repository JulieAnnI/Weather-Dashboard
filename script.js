
var cities = [];

function displayWeatherInfo() {
    var city = $(this).attr("data-name");
    var ApiKey = "d039ab187b34696aa254cc930a98ecb6";
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        var cityDiv = $("<div class='city'>");
        var 

    })
    


}


function renderButtons() {


}


$(".saveBtn").on("click", function(event){
   event.preventDefault();
   
   var city = $(".citysearch").val().trim();

   cities.push(city);

   renderButtons();

});