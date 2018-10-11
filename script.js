const print = console.log;
const apiKey = localStorage.getItem('apiKey');
var lat, long;
getLocation();
function getLocation() {
  print('I got called!');
  navigator.geolocation.getCurrentPosition(c);
}
function c(pos) {
  print('Getting Location!');
  lat = pos.coords.latitude;
  long = pos.coords.longitude;
  console.log(lat);
  var apiCall;
  apiCall = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=' + apiKey + '&units=metric';
  console.log(apiCall)

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(this.responseText);
      console.log(myObj);
      console.log(myObj.name);
      var locationName = myObj.name;
      var currentTemp = myObj.main.temp;
      var condition = myObj.weather[0].main;
      document.getElementById('locationName').innerHTML = locationName;
      document.getElementById('condition').innerHTML = condition;
      document.getElementById('currentTemp').innerHTML = Math.round(currentTemp) + ' °C';
    }
  };
  xmlhttp.open("GET", apiCall, true);
  xmlhttp.send();
}
function submitSearch() {
  var apiCall;

  var cityName = document.getElementById('cityInput').value;
  console.log(cityName);

  apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=metric';
  console.log(apiCall);
  fetch(apiCall)
    .then(res => res.json())
    .then(function (json) {
      var myObj = json;
      console.log(myObj);
      console.log(myObj.name);
      var locationName = myObj.name;
      var currentTemp = Math.round(myObj.main.temp);
      var condition = myObj.weather[0].main;
      document.getElementById('locationName').innerHTML = locationName;
      document.getElementById('condition').innerHTML = condition;
      document.getElementById('currentTemp').innerHTML = currentTemp + ' °C';
    });
  /*var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(this.responseText);
      console.log(myObj);
      console.log(myObj.name);
      var locationName = myObj.name;
      var currentTemp = myObj.main.temp;
      var condition = myObj.weather[0].main;
      document.getElementById('locationName').innerHTML = locationName;
      document.getElementById('condition').innerHTML = condition;
      document.getElementById('currentTemp').innerHTML = currentTemp + ' °C';
    }
  };
  xmlhttp.open("GET", apiCall, true);
  xmlhttp.send();
  console.log(myObj.name);*/
}