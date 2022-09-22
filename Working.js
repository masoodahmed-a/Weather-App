// https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial

let temp = document.getElementById("temp");
let cityName = document.getElementById("city");
let country = document.getElementById("country");
let weather = document.getElementById("weather");

let search = () => {
  let cityInput = document.getElementById("city-input").value;
  // console.log(cityInput)
  getWeatherData(cityInput);
};

let getWeatherData = (city) => {
  /* let value = document.getElementById("city-input") */

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json.weather[0].description);
      cityName.innerText = json.name;
      country.innerText = json.sys.country;
      temp.innerText = json.main.temp;
      weather.innerText = json.weather[0].description;
      /*       value.value = ' ' */
    });
};

// document.addEventListener("click", function (clearBtn) {

//   document.getElementById("city-input").value = " ";
//   cityName.innerText = " ";
//   country.innerText = " ";
//   temp.innerText = " ";
//   weather.innerText = " ";
// });

// let clearBtn = document.getElementById('clear')

// document.addEventListener('click',function(){

// cityName.innerText = ' '
// })

function myFunction() {
  /* let displayValue = document.getElementById('city-input') 

 displayValue.value = ' '  */

  let displayCity = document.getElementById("city");
  let displayCountry = document.getElementById("country");
  let displayWeather = document.getElementById("weather");
  let displayTemperature = document.getElementById("temp");

  displayCity.innerText = "---";
  displayCountry.innerText = "---";
  displayWeather.innerText = "---";
  displayTemperature.innerText = "---";
}
