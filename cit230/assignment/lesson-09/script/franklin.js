var weather = new XMLHttpRequest();
weather.open('GET', 'https://api.wunderground.com/api/9d9d50d9dae82d0f/conditions/q/MN/Franklin.json', true);
weather.send();

weather.onload = function () {
    var weathercondition = JSON.parse(weather.responseText);

    document.getElementById('cityname').innerHTML = weathercondition.current_observation.display_location.full;
    document.getElementById('t').innerHTML = weathercondition.current_observation.temp_f;
    document.getElementById('weather').innerHTML = weathercondition.current_observation.weather;
    document.getElementById('weathericon').src= weathercondition.current_observation.icon_url;
    document.getElementById('feelslike').innerHTML = weathercondition.current_observation.feelslike_f;
    document.getElementById('windspeed').innerHTML = weathercondition.current_observation.wind_mph;
    document.getElementById('precip').innerHTML= weathercondition.current_observation.precip_today_string;
}

var forecast = new XMLHttpRequest();
forecast.open('GET', 'https://api.wunderground.com/api/9d9d50d9dae82d0f/forecast10day/q/MN/Franklin.json', true);
forecast.send();

forecast.onload = function() {
    var forecastcondition = JSON.parse(forecast.responseText).forecast.simpleforecast.forecastday;
    
    var mytbody=document.querySelector('tbody');
    var mytr=document.createElement('tr');
    
    for(i=0; i<forecastcondition.length; i++){
        var mytd=document.createElement('td');
        mytd.textContent=forecastcondition[i].high.fahrenheit;
        mytr.appendChild(mytd);
        
    mytbody.appendChild(mytr);  
    }
     
}