const apiKey = "39eecc358e9f9eb8e50574f4473f1e56";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); 
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";
}

