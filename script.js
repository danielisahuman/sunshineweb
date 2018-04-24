var lat, long;
getLocation();
function getLocation() {
    var location = navigator.geolocation.getCurrentPosition(c);


}
var myObj;
function c(pos) {
    lat = pos.coords.latitude;
    long = pos.coords.longitude;
    console.log(lat);

    var apiCall;

    apiCall = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=34157961a6c13995bcec1937d26fded2' + '&units=metric';
    console.log(apiCall)

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            console.log(myObj);
            console.log(myObj.name);
            var locationName = myObj.name;
            var currentTemp = myObj.main.temp;
            document.getElementById('locationName').innerHTML = locationName;
            document.getElementById('currentTemp').innerHTML = currentTemp + ' °C';
        }
    };
    xmlhttp.open("GET", apiCall, true);
    xmlhttp.send();
    console.log(myObj.name);
}
function submitSearch() {
    var apiCall;

    var cityName = document.getElementById('cityInput').value;
    console.log(cityName);

    apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=34157961a6c13995bcec1937d26fded2' + '&units=metric';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            console.log(myObj);
            console.log(myObj.name);
            var locationName = myObj.name;
            var currentTemp = myObj.main.temp;
            document.getElementById('locationName').innerHTML = locationName;
            document.getElementById('currentTemp').innerHTML = currentTemp + ' °C';
            var input = document.getElementById('cityInput');
            input.value = "";
        }
    };
    xmlhttp.open("GET", apiCall, true);
    xmlhttp.send();
    console.log(myObj.name);
}

function testing() {
    console.log('submit button works');
}

