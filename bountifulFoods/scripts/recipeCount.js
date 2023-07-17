let archive = {}
let keys = Object.keys(localStorage)
let i = keys.length
let recipes = [];
const span = document.querySelector('#smoothie')


while ( i-- ) {
    archive[ keys[i] ] = localStorage.getItem( keys[i] );
}

let item = Object.keys(archive)
item.forEach((item) => {
    let inputLoaded = item;

    if (inputLoaded == "recipe"){
        recipes = JSON.parse(archive[item]);
        if(recipes !== 0){
            span.textContent = `${recipes.length}`;
        }else{
            span.textContent = `No recipes found`;
        }
    }
});