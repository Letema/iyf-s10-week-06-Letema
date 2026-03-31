const API_KEY = "744d1dcd7bd3889cc77bbb4af08d755b";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// DOM
const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const weatherDisplay = document.getElementById("weather-display");

const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");

// FETCH WEATHER
async function getWeather(city) {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        showLoading();
        hideError();

        const res = await fetch(url);

        if (!res.ok) {
            if (res.status === 404) throw new Error("City not found");
            throw new Error("Error fetching weather");
        }

        const data = await res.json();

        displayWeather(data);
        saveToHistory(city);

    } catch (err) {
        showError(err.message);
    } finally {
        hideLoading();
    }
}

// DISPLAY DATA
function displayWeather(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `🌡 ${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description;

    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} m/s`;
    pressure.textContent = `${data.main.pressure} hPa`;

    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherDisplay.classList.remove("hidden");
}

// UI STATES
function showLoading() {
    loading.classList.remove("hidden");
    weatherDisplay.classList.add("hidden");
}

function hideLoading() {
    loading.classList.add("hidden");
}

function showError(msg) {
    error.textContent = msg;
    error.classList.remove("hidden");
}

function hideError() {
    error.classList.add("hidden");
}

// LOCAL STORAGE
function saveToHistory(city) {
    let history = JSON.parse(localStorage.getItem("cities")) || [];

    history = history.filter(c => c.toLowerCase() !== city.toLowerCase());
    history.unshift(city);

    if (history.length > 5) history.pop();

    localStorage.setItem("cities", JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem("cities")) || [];
    const list = document.getElementById("search-history");

    list.innerHTML = history.map(city =>
        `<li onclick="getWeather('${city}')">${city}</li>`
    ).join("");
}

// EVENT
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) getWeather(city);
});

// INIT
loadHistory();