function getWeather() {
    var weather = new XMLHttpRequest();
    weather.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=65809&appid=8cb5964f64377624cd1b16ef747fa82f&units=imperial', true);
    weather.send();

    weather.onload = function () {
        var weathercondition = JSON.parse(weather.responseText);

        document.getElementById('cityname').innerHTML = 'Springfield, ' + weathercondition.name;
        document.getElementById('temperature').innerHTML = weathercondition.main.temp;
        document.getElementById('weather').innerHTML = weathercondition.weather[0].description;
        document.getElementById('weathericon').src = 'http://openweathermap.org/img/w/' + weathercondition.weather[0].icon + '.png';
        document.getElementById('tempmax').innerHTML = weathercondition.main.temp_max;
        document.getElementById('tempmin').innerHTML = weathercondition.main.temp_min;
        document.getElementById('feelslike').innerHTML = weathercondition.main.temp;
        document.getElementById('windspeed').innerHTML = weathercondition.wind.speed;
        document.getElementById('humidity').innerHTML = weathercondition.main.humidity;
        
        setWindchill();
    }

    var forecast = new XMLHttpRequest();
    forecast.open('GET', 'https://api.wunderground.com/api/9d9d50d9dae82d0f/forecast10day/q/or/springfield.json', true);
    forecast.send();

    forecast.onload = function () {
        var forecastcondition = JSON.parse(forecast.responseText).forecast.simpleforecast.forecastday;

        var mytbody = document.querySelector('tbody');
        var mytr = document.createElement('tr');

        for (i = 0; i < forecastcondition.length; i++) {
            var mytd = document.createElement('td');
            mytd.textContent = forecastcondition[i].high.fahrenheit + '°F';
            mytr.appendChild(mytd);

            mytbody.appendChild(mytr);
        }

    }
}
