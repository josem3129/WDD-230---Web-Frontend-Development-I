const urlFresh = 'https://brotherblazzard.github.io/canvas-content/fruit.json'
const select = document.querySelector('#selectFruit');

async function apiFetch() {
    try {
      const response = await fetch(urlFresh);
      if (response.ok) {
        const data = await response.json();
        const forecastData = await forecastResponse.json();
        console.log(data); 
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

function smoothyCal(data){
    const select = document.createElement('select');
    const option = document.createElement('option');
}