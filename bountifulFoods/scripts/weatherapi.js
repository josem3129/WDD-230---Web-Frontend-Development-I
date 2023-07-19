// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.weatherTitle');
const weatherInfo = document.querySelector('#weatherInfo');
const nameOfDay = document.querySelector('.day');

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
  nameOfDay.textContent = `${dateCal(day)} ${numberDay}`
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  let h5 = document.createElement('h5');


  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  captionDesc.innerHTML = `<strong>${desc}</strong>`;
  h5.innerHTML =  `<strong>Humidity: ${weatherData.main.humidity.toFixed(0)}%</strong>`;
  captionDesc.appendChild(h5);
}

function forecast(forecastData){

  forecastData.forEach(element => {
    day++;
    numberDay++;

    let nameDay = dateCal(day); 
    const forecastCard = document.querySelector('#forecastCards');

    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4')
    let h5 = document.createElement('h5');
    let img = document.createElement('img');

    h2.textContent = `${nameDay} ${numberDay}`
    h3.textContent = element.weather[0].description;
    h4.innerHTML =  `<strong>${element.main.temp.toFixed(0)}</strong> \u00B0F`;
    h5.innerHTML =  `<strong>Humidity: ${element.main.humidity.toFixed(0)}%</strong>`;
  

    img.setAttribute('src', `https://openweathermap.org/img/w/${element.weather[0].icon}.png`);
    img.setAttribute('alt', element.weather[0].description)
    img.setAttribute('loading', 'lazy');
 

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(img);
    card.appendChild(h4);
    card.appendChild(h5);

    forecastCard.appendChild(card);
    
  });

  
}
function dateCal(day) {
  let dayName = '';
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

return dayName;
}
t = 35