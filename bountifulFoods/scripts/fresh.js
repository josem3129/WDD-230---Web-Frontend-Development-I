const urlFresh = 'https://brotherblazzard.github.io/canvas-content/fruit.json'
const fieldset = document.querySelector('#selectFruit');
let fruits = [];
let i = 0;
let recipeNum = 0;
let recipes = {};
async function apiFetch() {
    try {
      const response = await fetch(urlFresh);
      if (response.ok) {
        const data = await response.json();
        fruits = data;
        console.log(data); 
        for(i=0; i < 3; i++){
          smoothyCal(data);
        }
        load();

        
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

apiFetch();
function smoothyCal(data){
  const select = document.createElement('select');
  const optionValue = document.createElement('option');

  select.setAttribute('id', `fruit${i}` )
  optionValue.setAttribute('value', '')
  optionValue.innerHTML = 'Please Select &#9662;';
  select.appendChild(optionValue);

    
    data.forEach(fruit => {
      const option = document.createElement('option');
      option.setAttribute('value', fruit.name);
      option.textContent = fruit.name;
      select.appendChild(option);
      fieldset.appendChild(select);
    });
}

document.getElementById('submitBtn').addEventListener("click", () => {

  recipeNum++;
  const storageName = 'recipe';
  const valueOne = document.querySelector('#fruit0').value;
  const valueTwo = document.querySelector('#fruit1').value;
  const valueThree = document.querySelector('#fruit2').value;

  console.log(valueOne);
  console.log(valueTwo);
  console.log(valueThree);

  if(valueOne == "" || valueTwo == "" || valueThree == ""){
    alert('please choose one option')
  }else{
    recipes[`recipe${recipeNum}`] = `${valueOne},${valueTwo},${valueThree}`;
    localStorage.setItem(storageName, JSON.stringify(recipes))
  }

  load();

});

function load(){

  var archive = {}, // Notice change here
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      archive[ keys[i] ] = localStorage.getItem( keys[i] );
  }
  
  let item = Object.keys(archive)
  item.forEach((item) => {
  let inputLoaded = item;
  
  if (inputLoaded == "visit-counter" || inputLoaded =="visitcounte"){
      
  }else{
      
    recipes = JSON.parse(archive[item]);
      console.log(recipes);

      for (const key in recipes) {
      if (recipes.hasOwnProperty(key)) {
        console.log(`${key}: ${recipes[key]}`);
        
        const carbohydrates = 0;
        const protein = 0;
        const fat = 0;
        const sugar = 0;
        const calories = 0;
        const section = document.createElement('section');
        const h2 = document.createElement('h2');
        const ul =  document.createElement('ul');
        const li =  document.createElement('li');
        const h3 =  document.createElement('h3');



        let storageFruit = recipes[key].split(',');
        storageFruit.forEach(element =>{
          
          fruits.forEach(fruit => {
            let option = fruit.name;
  
            if(option == element){
              console.log(option);

              

            }
          });
        })



      }
    }
  }
  })

}