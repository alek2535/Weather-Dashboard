const apiKey = '&units=imperial&APPID=c167a217ff93e0a818f3ac4d35414965';
const currentWeather = 'https://api.openweathermap.org/data/2.5/weather?q='
const fiveDay = 'https://api.openweathermap.org/data/2.5/forecast?q=';
const uvIndex = 'http://api.openweathermap.org/data/2.5/uvi?appid=c167a217ff93e0a818f3ac4d35414965'//&lat={lat}&lon=${}
let currentDay = moment().format('l');
let userInput = $('#user-input').val();

// AJAX call for Current Weather and UV Index
function getWeather() {
    $.ajax({
        url: currentWeather + $('#user-input').val() + apiKey,
        method: 'GET'
    }).then(response => {
        console.log(response);
        $('#city-name').text(`${response.name} ${currentDay}`)
        $('#icon-image').attr({
            'src': `http://openweathermap.org/img/w/${response.weather[0].icon}.png`,
            'alt': 'Weather Icon'});

        let lat = response.coord.lat;
        let lon = response.coord.lon;
        const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.coord.lat}&lon=${response.coord.lon}&exclude=hourly,minutely&units=imperial&appid=c167a217ff93e0a818f3ac4d35414965`
        
        // AJAX call for UV Index
        $.ajax({
            url: oneCallUrl,
            method: 'GET'
        }).then(response => {
            console.log(response);
            generateCurrent(response);
        })
        
    });
};

// AJAX call for 5-Day Forecast
function getForecast() {
    $.ajax({
        url: fiveDay + $('#user-input').val() + apiKey,
        method: 'GET'
    }).then(response => {
        console.log(response);
    })
}

function generateCurrent(response) {
    $('#temperature').html(`Temperature: ${response.current.temp} &#176;F`);
    $('#humidity').text(`Humidity: ${response.current.humidity}%`);
    $('#wind-speed').text(`Wind Speed: ${response.current.wind_speed} MPH`);
    $('#uv-index').html(`UV Index: <span id="uv-color">${response.current.uvi}</span>`);

    if (response.current.uvi <= 2) {
        $('#uv-color').attr('class', 'badge badge-success');
    } else if (response.current.uvi > 2 && response.current.uvi < 8) {
        $('#uv-color').attr('class', 'badge badge-warning');
    } else if (response.current.uvi >= 8) {
        $('#uv-color').attr('class', 'badge badge-danger');
    };
}



$('#search').on('click', function() {
    event.preventDefault();

    getWeather();
});