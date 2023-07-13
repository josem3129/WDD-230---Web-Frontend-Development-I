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
        
        let carbohydrates = 0;
        let protein = 0;
        let fat = 0;
        let sugar = 0;
        let calories = 0;
        let section = document.createElement('section');
        let h2 = document.createElement('h2');
        let ul =  document.createElement('ul');
        let li =  document.createElement('li');
        let h3 =  document.createElement('h3');
        let ulTwo = document.createElement('ul');
        let liCarbohydrates =  document.createElement('li');
        let liProtein =  document.createElement('li');
        let liFat =  document.createElement('li');
        let liSugar =  document.createElement('li');
        let liCalories =  document.createElement('li');

        h2.textContent = key;
        h3.textContent = 'Nutritional Facts'
        liCalories.innerHTML = calories;
        liCarbohydrates.innerHTML = carbohydrates;
        liFat.innerHTML = fat;
        liProtein.innerHTML = protein;
        liSugar.innerHTML = sugar;

        fieldset.appendChild(section);
        section.appendChild(h2);
        
        

        let storageFruit = recipes[key].split(',');
        storageFruit.forEach(element =>{
            
            fruits.forEach(fruit => {
            let option = fruit.name;
            
            if(option == element){
                let nutritions = fruit.nutritions;
              console.log(option);
              li.textContent = element;
              ul.appendChild(li);

              calories = calories + nutritions.calories;
              carbohydrates = carbohydrates + nutritions.carbohydrates;
              fat = fat + nutritions.fat;
              protein = protein + nutritions.protein;
              sugar = sugar + nutritions.sugar;


              

            }
            section.appendChild(ul);
            section.appendChild(h3);
            ulTwo.appendChild(liCalories);
            ulTwo.appendChild(liCarbohydrates);
            ulTwo.appendChild(liFat);
            ulTwo.appendChild(liProtein);
            ulTwo.appendChild(liProtein);
            ulTwo.appendChild(liSugar);
            section.appendChild(ulTwo);
        });


        

    })
    


      }
    }
  }
  })

}