const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cacbddbc27msh7c60909a577989ep1d1bb3jsnf91359c3b022',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};




//function to get weather
// const getWeather = (city) => {
    // document.getElementById("cityname").innerHTML = city;  
    fetch("https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=" + "Delhi" , options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      //   cloud_pct.innerHTML = response.cloud_pct;
        document.getElementById("co2").innerHTML = response['CO'].concentration;
        document.getElementById("no2").innerHTML = response['NO2'].concentration;
        document.getElementById("o3").innerHTML = response['O3'].concentration;
        document.getElementById("AQI").innerHTML = response.overall_aqi;
        // humidity2.innerHTML = response.humidity;
        // min_temp.innerHTML = response.min_temp;
        // max_temp.innerHTML = response.max_temp;
        // wind_speed.innerHTML = response.wind_speed;
        // wind_speed2.innerHTML = response.wind_speed;
        // wind_degrees.innerHTML = response.wind_degrees;
        // sunrise.innerHTML = response.sunrise;
        // sunset.innerHTML = response.sunset;
      })
      .catch((err) => console.error(err));
//   };
  
  //add event listener for submit button to search weather of any city
//   const Submit = document.getElementById("submit");
//   const City = document.getElementById("city");
  
//   Submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(City.value);
//     getWeather(City.value);
//   });
  
fetch("https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=" + "Mumbai" , options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      //   cloud_pct.innerHTML = response.cloud_pct;
        document.getElementById("co2M").innerHTML = response['CO'].concentration;
        document.getElementById("no2M").innerHTML = response['NO2'].concentration;
        document.getElementById("o3M").innerHTML = response['O3'].concentration;
        document.getElementById("AQIM").innerHTML = response.overall_aqi;
        // humidity2.innerHTML = response.humidity;
        // min_temp.innerHTML = response.min_temp;
        // max_temp.innerHTML = response.max_temp;
        // wind_speed.innerHTML = response.wind_speed;
        // wind_speed2.innerHTML = response.wind_speed;
        // wind_degrees.innerHTML = response.wind_degrees;
        // sunrise.innerHTML = response.sunrise;
        // sunset.innerHTML = response.sunset;
      })
      .catch((err) => console.error(err));


      fetch("https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=" + "Bangalore" , options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      //   cloud_pct.innerHTML = response.cloud_pct;
        document.getElementById("co2B").innerHTML = response['CO'].concentration;
        document.getElementById("no2B").innerHTML = response['NO2'].concentration;
        document.getElementById("o3B").innerHTML = response['O3'].concentration;
        document.getElementById("AQIB").innerHTML = response.overall_aqi;
        // humidity2.innerHTML = response.humidity;
        // min_temp.innerHTML = response.min_temp;
        // max_temp.innerHTML = response.max_temp;
        // wind_speed.innerHTML = response.wind_speed;
        // wind_speed2.innerHTML = response.wind_speed;
        // wind_degrees.innerHTML = response.wind_degrees;
        // sunrise.innerHTML = response.sunrise;
        // sunset.innerHTML = response.sunset;
      })
      .catch((err) => console.error(err));