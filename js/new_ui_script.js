// --------------------- api details ---------------------
const apiKEY = "Enter Your API Key Here";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

// -------------------- search bar -------------------------
const cityInput = document.querySelector(".searchField");
const btn = document.querySelector(".searchImg");
const searchbox = document.querySelector(".searchbox");
const cover = document.querySelector(".cover");
const content = document.querySelector(".content");

// -------------------- weather card-------------------------

const weatherImg = document.querySelector("#weather-detail-image");

const weatherCondition = document.querySelector(".weatherCondition");
const temp = document.querySelector(".temprature");
const cardCityName = document.querySelector(".cityName");

const feelsLikeTemp = document.querySelector("#feelsLikeTemp");
const maxTemp = document.querySelector("#maxTemp");
const lowTemp = document.querySelector("#lowTemp");

const humidity = document.querySelector("#humidityDetail");
const pressure = document.querySelector("#pressure");
const wind = document.querySelector("#wind");


// --------------------api recived details-------------------
async function weatherDetail(city)
{
    const DataRecived = await fetch(apiURL + `&q=${city}` + `&appid=${apiKEY}`);
    const data = await DataRecived.json();
    console.log(data);

    // -----------------updating details----------------------
    weatherCondition.innerHTML = data.weather[0].description;
    temp.innerHTML = Math.round(data.main.temp) + " °C";
    cardCityName.innerHTML = data.name;

    feelsLikeTemp.innerHTML = Math.round(data.main.feels_like) + " °C";
    maxTemp.innerHTML = Math.round(data.main.temp_max) + " °C";
    lowTemp.innerHTML = Math.round(data.main.temp_min) + " °C";

    humidity.innerHTML = data.main.humidity + ` g.m<sup>-3</sup>`;
    pressure.innerHTML = data.main.pressure + ` Pa`;
    wind.innerHTML = data.wind.speed + ` KM/hr`;

    if (data.weather[0].main === "Clear")
    {
        weatherImg.src = "images/weatherConditionImg/clear.png";
    }
    else if (data.weather[0].main === "Clouds")
    {
        weatherImg.src = "images/weatherConditionImg/cloudy.png";
    }
    else if (data.weather[0].main === "Thunderstorm")
    {
        weatherImg.src = "images/weatherConditionImg/thunderStrom.png";
    }
    else if (data.weather[0].main === "Drizzle")
    {
        weatherImg.src = "images/weatherConditionImg/Drizzle.png";
    }
    else if (data.weather[0].main === "Rain")
    {
        weatherImg.src = "images/weatherConditionImg/rain.png";
    }
    else if (data.weather[0].main === "Snow")
    {
        weatherImg.src = "images/weatherConditionImg/snow.png";
    }
    else if (data.weather[0].main === "haze")
    {
        weatherImg.src = "images/weatherConditionImg/haze.png";
    }
    else
    {
        weatherImg.src = "images/weatherConditionImg/mist.png";
    }

}
// ------------------------ calling function------------------
btn.addEventListener("click", () =>
{
    weatherDetail(cityInput.value);
    // console.log(content.style);
    searchbox.style.transform = "translateY(0em)";
    setTimeout(() =>
    {
        cover.style.display = "block";
        cover.style.opacity = "1";
        content.style.opacity = "1";
    }, 350);

});
