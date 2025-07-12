const Place_input = document.querySelector(".placeInput")
const button = document.querySelector(".FindBtn")



const summarMeme = [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWp2MzVlaHpndm5vMzltZGt2dXUyZXVkaHoyenQ2ZG02ejgyOWVrOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/er0E7agXd1TAWcu4tL/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGZiaHo2MTU5enZ5NmwydmRyZzRkM2hvN2NiM2ExN3E4N2FyeWdnMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1Fm7jEapE18HwS6fkT/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWJkOHk3dXdpNGk3d204MGVkamRwazcwcmFvZTM0YXVmNDh5Z2tzYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BREnyYXsPOxlUKk/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHZwMWJrY2VpdzVxeWM1ejFzN2hnNDl4MDl5NXBwdWNxNDBsZXp1aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jsm7XMcyeTFJE4vHzO/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnQzNnByYTA1YjB4aXR4Y3g3bHg3anpzZXZzN3N0NzltdDFxNG9uayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ughWU9fZHTvMMahgpw/giphy.gif"
]
const winterMeme = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzgwcjNyNzJicHZobWc4Y2c3aWwwY2pxYjE4anQydWQ2OWl3eHVqbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KaW6fNYZf6eSk/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzgwcjNyNzJicHZobWc4Y2c3aWwwY2pxYjE4anQydWQ2OWl3eHVqbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pVQUCfmpSv1Qs/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzgwcjNyNzJicHZobWc4Y2c3aWwwY2pxYjE4anQydWQ2OWl3eHVqbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fnspJg9O1JrxjtuyQI/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzgwcjNyNzJicHZobWc4Y2c3aWwwY2pxYjE4anQydWQ2OWl3eHVqbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/H62qmUR80DZVS/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzgwcjNyNzJicHZobWc4Y2c3aWwwY2pxYjE4anQydWQ2OWl3eHVqbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/H62qmUR80DZVS/giphy.gif"
]
const rainMeme = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3hkNnJwaTAzMjlkenJhYXp2aXk4YTQ4NWc5ZXcxbTdvbmVoaWV0eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Ckt7qu9ksg5ByO2ibi/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3hkNnJwaTAzMjlkenJhYXp2aXk4YTQ4NWc5ZXcxbTdvbmVoaWV0eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HlPwMAzh13pcZ20/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3hkNnJwaTAzMjlkenJhYXp2aXk4YTQ4NWc5ZXcxbTdvbmVoaWV0eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3orieZMmRdBlKk5nY4/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2dtMnBmdDR6OTllY2VqZWJ5ZG5kbjR6dzRpYXd0YmluNGMyY2pmMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pNn4hlkovWAHfpLRRD/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dzliM3pwdzU1NmVlcTJuN2F4NHAwZGFsbzBjMmV0NjNhc3d0eGRuYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oriO1WJifFDP2gRYA/giphy.gif"
]

const apikey = "6f5c96c028090a2682d06928c673ba03"
const myCity = 'Virar'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

async function checkWeather(myCity,apikey){
    const response = await fetch(apiUrl + `${myCity},IN&appid=${apikey}`)
    return await response.json();
}

async function loadTemperature() {
    const cacheExpiry = 10 * 60 * 1000; // 10 minutes
    const lastFetchTime = localStorage.getItem("lastFetchTime");
    const currentTime = Date.now();

    if (!lastFetchTime || (currentTime - lastFetchTime) > cacheExpiry) {
        const temperatureData = await checkWeather(myCity, apikey);
        localStorage.setItem("Mycitytemp", temperatureData['main']['temp']);
        localStorage.setItem("lastFetchTime", currentTime);
        console.log("API called");
    } else {
        console.log("Using cached temperature");
    }

    const CurrentTemp = localStorage.getItem('Mycitytemp');
    document.querySelector("#currentcitytemp").innerText = Math.floor(CurrentTemp) + "°C";
}

loadTemperature();

async function searchedTemperature(city, apikey) {
    const weatherDiv = document.querySelector(".searchedWeather");
    
    // Show loading message while fetching
    weatherDiv.innerHTML = `<p>Loading weather info for "${city}"...</p>`;

    try {
        let meme = undefined;
        const searchDataTemparature = await checkWeather(city, apikey);
        const temp = searchDataTemparature['main']['temp'];
        const weatherType = searchDataTemparature['weather'][0]['main'].toLowerCase();

        // Decide meme category
        if ((weatherType.includes("rain") || weatherType.includes("drizzle") || weatherType.includes("thunderstorm")) && temp <= 30) {
            meme = rainMeme;
        } else if (temp <= 0 || (temp > 0 && temp <= 15)) {
            meme = winterMeme;
        } else if (temp > 25 && temp <= 35) {
            meme = summarMeme;
        }
        weatherDiv.innerHTML = `
            <div class="weatherTemparature">
                <h2 style="flex-grow:6">${Math.floor(temp)}°C</h2>
                <p style="flex-grow:4">${searchDataTemparature['name']}</p>
            </div>
            <div class="weatherMeme">
                <img src="${meme[Math.floor(Math.random() * meme.length)]}" alt="Weather meme for ${weatherType}">
            </div>`;
    } catch (error) {
        console.error("Error fetching data:", error);
        weatherDiv.innerHTML = `<p style="color:red;">❌ Failed to load weather info. Please try again.</p>`;
        alert("⚠️ City not found or server busy.");
    }
}

button.addEventListener('click', (event) => {
    if( Place_input.value && event.type === 'click'){
        let city = Place_input.value
        searchedTemperature(city,apikey);
        console.log("api called - s")
    }
    else{
        alert("Enter city")
    }
});






