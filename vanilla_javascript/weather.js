const weatherLocation = document.querySelector("#weather span:first-child");
const weatherInfo = document.querySelector("#weather span:last-child");

API_KEY = "e346d5950c6307e64153f3ecffff06fd"

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unists=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) =>{
            weatherLocation.innerText = data.name;
            weatherInfo.innerText = data.weather[0].description;

        });
    console.log(url);
  }
  
  function error() {
    alert('Sorry, no position available.');
  }
  
  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  };
  
  const watchID = navigator.geolocation.watchPosition(success, error, options);

