// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=eaa307439d0ad86fc105d2c8974509c3


// Variáveis e seleções de elementos
const apiKey = "eaa307439d0ad86fc105d2c8974509c3";
const apiCountryURL = "https://flagsapi.com/BE/flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")

const countryElement = document.querySelector("#country")

const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")

const weatherContainer = document.querySelector("#weather-data")

// Funções
const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather[0].description
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);
    console.log(countryElement);
    
    humidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText = `${data.wind.speed}km/h`

    weatherContainer.classList.remove("hide")
    
}


// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value
    showWeatherData(city)
});

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const city = e.target.value
        showWeatherData(city)
    }
})
