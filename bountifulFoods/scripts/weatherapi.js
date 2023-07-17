// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.weatherTitle');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Nampa&units=imperial&APPID=3147dd21956cbdef375e52cb5ed3e014'
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Nampa&units=imperial&cnt=3&APPID=3147dd21956cbdef375e52cb5ed3e014'

async function apiFetch() {
  try {
    const response = await fetch(url);
    const forecastResponse = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      const forecastData = await forecastResponse.json();
      displayResults(data);
      forecast(forecastData.list);
      // this is for testing the call
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
      document.querySelector("#temp").innerHTML= `${t} \u00B0F`;
      document.querySelector("#wind").innerHTML= `Wind speed: ${s} km/h`;
      
  }
  else if (t >= 50){
      document.querySelector("#windChill").innerHTML= `Wind chill: N/A`;
      document.querySelector("#temp").innerHTML= `${t} \u00B0F`;
      document.querySelector("#wind").innerHTML= `Wind speed: ${s} km/h`;
  
  }
  else if (s <= 3){
      document.querySelector("#windFhill").innerHTML= `Wind chill: ${Math.round(f * 10) / 10}`;
      document.querySelector("#temp").innerHTML= `${t} \u00B0F`;
      document.querySelector("#wind").innerHTML= `Wind speed: N/A`;
  
  }
}

function forecast(forecastData){

  forecastData.forEach(element => {
    day++;
    numberDay++;

    switch(day){
      case 0:
          dayName = "Monday";
          break;
      case 1:
          dayName = "Tuesday";
          break;
      case 2:
          dayName = "Wednesday";
          break; 
      case 3:
          dayName = "Thursday";
          break;
      case 4:
          dayName = "Friday";
          break;
      case 5:
          dayName = "Saturday";
          break;
      case 6:
          dayName = "Sunday";
          break
  }
    const forecastCard = document.querySelector('#forecastCards');

    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4')
    // let link = document.createElement('a')
    let img = document.createElement('img');

    h2.textContent = `${dayName} ${numberDay}`
    h3.textContent = element.weather[0].description;
    h4.innerHTML =  `<strong>${element.main.temp.toFixed(0)}</strong> \u00B0F`;
    // link.textContent = `${companies.businessUrl}`;
    // link.setAttribute('href', companies.url)
    // h4.textContent = `Email: ${companies.email}`;

    img.setAttribute('src', `https://openweathermap.org/img/w/${element.weather[0].icon}.png`);
    img.setAttribute('alt', element.weather[0].description)
    img.setAttribute('loading', 'lazy');
    // img.setAttribute('width', '340');
    // img.setAttribute('height', '440');

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(img);
    card.appendChild(h4);
    // card.appendChild(link);

    forecastCard.appendChild(card);
    
  });


}
t = 35