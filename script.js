const apiKey = "575b73130145eca453592235398f707e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const pressureElement = document.querySelector(".pressure");
const windElement = document.querySelector(".wind");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{

        const data = await response.json();

        cityElement.innerHTML = data.name;
        tempElement.innerHTML = Math.round(data.main.temp) + "°C";
        pressureElement.innerHTML = data.main.pressure + " hPa";
        windElement.innerHTML = Math.round(data.wind.speed) + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "https://i.postimg.cc/Wbf5GBJN/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "https://i.postimg.cc/Nf0NrsFC/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "https://i.postimg.cc/vTZv9hYx/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "https://i.postimg.cc/YCGbbd11/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "https://i.postimg.cc/cJfTN6kC/mist.png";   
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "https://i.postimg.cc/zv2Fkhvt/snow.png";  
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"        
    } 
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

