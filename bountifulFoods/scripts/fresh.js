const urlFresh = 'https://brotherblazzard.github.io/canvas-content/fruit.json'
const fieldset = document.querySelector('#selectFruit');
const legend = document.createElement('legend');
legend.textContent = `Choose your fruit`
fieldset.appendChild(legend);
const cards = document.querySelector('#recipes')
let fruits = [];
let i = 0;
let recipeNum = 0;
let recipes = [];
async function apiFetch() {
  try {
    const response = await fetch(urlFresh);
    if (response.ok) {
      const data = await response.json();
      fruits = data;
      smoothyCal(data);        
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
  const note = document.createElement('textarea');
  const h4 = document.createElement('h4');
  for(i=0; i < 3; i++){
    let h3 = document.createElement('h3');
    const select = document.createElement('select');
    const optionValue = document.createElement('option');

  
    select.setAttribute('id', `fruit${i}` )
    optionValue.setAttribute('value', '')
    optionValue.innerHTML = 'Please Select';
    select.appendChild(optionValue);
    h3.textContent = `Fruit #${i+1}`
    fieldset.appendChild(h3);
  
      
    data.forEach(fruit => {
      const option = document.createElement('option');
      option.setAttribute('value', fruit.name);
      option.textContent = fruit.name;
      select.appendChild(option);
      fieldset.appendChild(select);
    });
  }
  const label = document.createElement('label');
  label.textContent= `Notes:`;
  label.appendChild(note);
  fieldset.appendChild(label);
}

document.getElementById('saveBtn').addEventListener("click", () => {

  recipeInfo = {};
  let list = [];
 const localDate = new Date().toLocaleDateString('en-US');


  for (const key in recipes) {
    if (recipes.hasOwnProperty(key)) {

      recipeNum++;
    }}

  recipeNum++;
  
  const storageName = 'recipe';
  const valueOne = document.querySelector('#fruit0').value;
  const valueTwo = document.querySelector('#fruit1').value;
  const valueThree = document.querySelector('#fruit2').value;
  const labelPhone = document.querySelector('.topPhone').value;
  const labelName = document.querySelector('.topName').value;
  const labelEmail = document.querySelector('.topEmail').value;
  const note= document.querySelector('textarea').value;



  if(valueOne == "" || valueTwo == "" || valueThree == ""){
    alert('please choose one option')
  }else{
    recipeInfo[`name`] = `${labelName}`;
    recipeInfo[`phone`] = `${labelPhone}`;
    recipeInfo[`email`] = `${labelEmail}`;
    recipeInfo[`date`] = `${localDate}`;
    recipeInfo[`recipeName`] = `Recipe #${recipeNum}`;
    recipeInfo[`ingredient`] = `${valueOne},${valueTwo},${valueThree}`;
    recipeInfo[`Notes`] = `${note}`;
    recipes.push(recipeInfo);
    localStorage.setItem(storageName, JSON.stringify(recipes));
  }
  recipeNum = 0;
  cards.innerHTML = "";
  load();

});


function load(){

  let archive = {}, // Notice change here
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      archive[ keys[i] ] = localStorage.getItem( keys[i] );
  }
  
  let item = Object.keys(archive)
  item.forEach((item) => {
  let inputLoaded = item;
  
  if (inputLoaded == "recipe"){
    recipes = JSON.parse(archive[item]);
    for(let i = 0; i < recipes.length; i++){
      let recipe = recipes[i];
   
        let section = document.createElement('section');
        let carbohydrates = 0;
        let protein = 0;
        let fat = 0;
        let sugar = 0;
        let calories = 0;
        let h3Recipe = document.createElement('h3');
        let name = document.createElement('p');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let date = document.createElement('p');
        let h2 = document.createElement('h2');
        let ul =  document.createElement('ul');
        let h3 =  document.createElement('h3');
        let h3Two = document.createElement('h3');
        let ulTwo = document.createElement('ul');
        let liCarbohydrates =  document.createElement('li');
        let liProtein =  document.createElement('li');
        let liFat =  document.createElement('li');
        let liSugar =  document.createElement('li');
        let liCalories =  document.createElement('li');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
  
        
        cards.appendChild(section);
        section.appendChild(h3Recipe);
        section.appendChild(h3Two);
        
        
            
  
        let storageFruit = recipe.ingredient.split(',');
        storageFruit.forEach(element =>{
              
          fruits.forEach(fruit => {
          let option = fruit.name;
          
          if(option == element){
              let nutritions = fruit.nutritions;
            let li =  document.createElement('li');
            li.textContent = element;
            ul.appendChild(li);
  
            calories = calories + nutritions.calories;
            carbohydrates = carbohydrates + nutritions.carbohydrates;
            fat = fat + nutritions.fat;
            protein = protein + nutritions.protein;
            sugar = sugar + nutritions.sugar;
                          
          }
          h3Recipe.textContent = `Information`
          name.textContent = `Name: ${recipe.name}`
          phone.textContent = `Phone: ${recipe.phone}`
          email.textContent = `Email: ${recipe.email}`
          date.textContent = `Date submitted: ${recipe.date}`
          h3Two.textContent = `Ingredients:`
          h2.textContent = recipe.recipeName;
          h3.textContent = 'Total Nutritional Facts'
          liCalories.innerHTML =`Calories: ${calories.toFixed(1)}g`;
          liCarbohydrates.innerHTML = `Carbohydrates: ${carbohydrates.toFixed(1)}g`;
          liFat.innerHTML = `fat: ${fat.toFixed(1)}g`;
          liProtein.innerHTML = `protein: ${protein.toFixed(1)}g`;
          liSugar.innerHTML = `sugar: ${sugar.toFixed(1)}g`;
          h4.textContent = `Notes:`
          p.textContent = recipe.Notes;

          section.appendChild(h2);
          section.appendChild(h3Recipe);
          section.appendChild(name);
          section.appendChild(phone);
          section.appendChild(email);
          section.appendChild(date);
          section.appendChild(h3Two);
          section.appendChild(ul);
          section.appendChild(h4);
          section.appendChild(p);
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
  })

}