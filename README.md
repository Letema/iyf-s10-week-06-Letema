# 🌦️ Weather Dashboard

## 📌 Project Overview
The **Weather Dashboard** is a web application that allows users to search for any city and view real-time weather data using the OpenWeatherMap API.  
This project demonstrates the use of **asynchronous JavaScript**, **Fetch API**, **DOM manipulation**, and **localStorage**.

---

## 🚀 Features

### 🔍 Search Functionality
- Users can enter a city name
- Fetches weather data from API
- Displays results instantly

### 🌡️ Weather Information Displayed
- City name and country
- Weather icon
- Temperature (°C)
- Weather description
- Feels like temperature
- Humidity (%)
- Wind speed
- Pressure

### ⚠️ Error Handling
- Displays error for invalid city names
- Handles network errors
- Shows loading state while fetching data

### 🕘 Recent Searches
- Stores last 5 searched cities
- Click a city to search again
- Uses localStorage

---

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- OpenWeatherMap API
- Local Storage

---

## 📂 Project Structure
```
project-folder/
│
├── index.html
├── styles.css
├── app.js
└── README.md
```

---

## ⚙️ Setup Instructions

1. Clone the repository:
```
git clone https://github.com/your-username/iyf-s10-week-06-your-username.git
```

2. Open the folder:
```
cd iyf-s10-week-06-your-username
```

3. Open `index.html` in your browser

4. Add your API key in `app.js`:
```js
const API_KEY = "your_api_key_here";
```

Get your API key from: https://openweathermap.org/api

---

## 💡 How It Works
1. User enters a city name
2. App fetches weather data from API
3. Displays the results on the page
4. Saves search history in localStorage
5. Allows quick re-search from history

---

## ⭐ Bonus Features (Optional)
- 5-day forecast
- Toggle Celsius/Fahrenheit
- Current location weather (Geolocation)
- Dynamic background based on weather

---

## 📅 Week 6 Learning Outcomes
- Understanding asynchronous JavaScript
- Using Promises and async/await
- Fetching data from APIs
- Handling loading and error states
- Updating the DOM dynamically

---

## ✅ Status
✔ Weather Dashboard completed  
✔ Async/Await implemented  
✔ Error handling added  
✔ localStorage implemented  

---


