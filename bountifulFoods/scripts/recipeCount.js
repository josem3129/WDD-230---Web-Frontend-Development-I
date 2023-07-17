let archive = {}
let keys = Object.keys(localStorage)
let i = keys.length
let recipesCount = [];
const span = document.querySelector('#smoothie')


while ( i-- ) {
    archive[ keys[i] ] = localStorage.getItem( keys[i] );
}

let item = Object.keys(archive)
item.forEach((item) => {
    let inputLoaded = item;

    if (inputLoaded == "recipe"){
        recipesCount = JSON.parse(archive[item]);
            span.textContent = `${recipesCount.length}`;    
    }else{
        span.textContent = `No recipes found`;
    }
});