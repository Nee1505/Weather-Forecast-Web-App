const apiKey = "39eecc358e9f9eb8e50574f4473f1e56";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";


const searchBox = document.querySelector(".search input"); 
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});


async function checkWeather(city) {
    // Fetch the weather data
    const response = await fetch(apiUrl + "&q=" +city + `&appid=${apiKey}`); 
    let data = await response.json();

    //Handle the wrong city inputs
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        //Update the UI with the fetched data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }

    
}
