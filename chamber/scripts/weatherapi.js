// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Nampa&units=imperial&APPID=3147dd21956cbdef375e52cb5ed3e014'

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      displayResults(data);
      // this is for testing the call
      // displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(weatherData){
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong> \u00B0F`;

  const desc = weatherData.weather[0].description;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  captionDesc.innerHTML = `<strong>${desc}</strong>`;

  const t= weatherData.main.temp.toFixed(0);
  const s = weatherData.wind.speed.toFixed(0);
  const f=35.74 + 0.6215 * t - 35.75 * (s ** .16) + .4275 * t * (s ** .16)
  
  if (t <= 50 && s >= 3){
      
      const modValue = 
      document.querySelector("#windChill").innerHTML= `Wind chill: ${Math.round(f * 10) / 10}`;
      document.querySelector("#temp").innerHTML= `${t} \u00B0C`;
      document.querySelector("#wind").innerHTML= `Wind speed: ${s} km/h`;
      
  }
  else if (t >= 50){
      document.querySelector("#windChill").innerHTML= `Wind chill: N/A`;
      document.querySelector("#temp").innerHTML= `${t} \u00B0C`;
      document.querySelector("#wind").innerHTML= `Wind speed: ${s} km/h`;
  
  }
  else if (s <= 3){
      document.querySelector("#windChill").innerHTML= `Wind chill: ${Math.round(f * 10) / 10}`;
      document.querySelector("#temp").innerHTML= `${t} \u00B0C`;
      document.querySelector("#wind").innerHTML= `Wind speed: N/A`;
  
  }
}

t = 35