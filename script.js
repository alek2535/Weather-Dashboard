$(document).ready(function() {

    const apiKey = '&units=imperial&APPID=c167a217ff93e0a818f3ac4d35414965';
    const currentWeather = 'https://api.openweathermap.org/data/2.5/weather?q='
    const fiveDay = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    const uvIndex = 'http://api.openweathermap.org/data/2.5/uvi?appid=c167a217ff93e0a818f3ac4d35414965'//&lat={lat}&lon=${}
    const currentDay = moment().format('l');
    const day1= moment().add(1, 'days').format('l');
    const day2= moment().add(2, 'days').format('l');
    const day3= moment().add(3, 'days').format('l');
    const day4= moment().add(4, 'days').format('l');
    const day5= moment().add(5, 'days').format('l');
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
                generate5Day(response);
            })
            
        });
    };

    //Generates HTML for Current Weather
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

    //Generates HTML for 5-Day Forecast
    function generate5Day(response) {

        //Day-1 Forecast
        $('#day-one-title').text(day1);
        $('#day-one-img').attr({
            'src': `http://openweathermap.org/img/w/${response.daily[1].weather[0].icon}.png`,
            'alt': 'Weather Icon'
            });
        $('#day-one-temp').html(`Temp: ${response.daily[1].temp.day}&#176;F`);
        $('#day-one-hum').text(`Humidity: ${response.daily[1].humidity}%`);

        //Day-2 Forecast
        $('#day-two-title').text(day2);
        $('#day-two-img').attr({
            'src': `http://openweathermap.org/img/w/${response.daily[2].weather[0].icon}.png`,
            'alt': 'Weather Icon'
            });
        $('#day-two-temp').html(`Temp: ${response.daily[2].temp.day}&#176;F`);
        $('#day-two-hum').text(`Humidity: ${response.daily[2].humidity}%`);

        //Day-3 Forecast
        $('#day-three-title').text(day3);
        $('#day-three-img').attr({
            'src': `http://openweathermap.org/img/w/${response.daily[3].weather[0].icon}.png`,
            'alt': 'Weather Icon'
            });
        $('#day-three-temp').html(`Temp: ${response.daily[3].temp.day}&#176;F`);
        $('#day-three-hum').text(`Humidity: ${response.daily[3].humidity}%`);

        //Day-4 Forecast
        $('#day-four-title').text(day4);
        $('#day-four-img').attr({
            'src': `http://openweathermap.org/img/w/${response.daily[4].weather[0].icon}.png`,
            'alt': 'Weather Icon'
        });
        $('#day-four-temp').html(`Temp: ${response.daily[4].temp.day}&#176;F`);
        $('#day-four-hum').text(`Humidity: ${response.daily[4].humidity}%`);

        //Day-5 Forecast
        $('#day-five-title').text(day5);
        $('#day-five-img').attr({
            'src': `http://openweathermap.org/img/w/${response.daily[5].weather[0].icon}.png`,
            'alt': 'Weather Icon'
        });
        $('#day-five-temp').html(`Temp: ${response.daily[5].temp.day}&#176;F`);
        $('#day-five-hum').text(`Humidity: ${response.daily[5].humidity}%`);
    }



    $('#search').on('click', function() {
        event.preventDefault();

        getWeather();
    });

})