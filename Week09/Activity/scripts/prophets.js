const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
let prophets = '';

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    prophets = data;
    console.table(data.prophets);
    console.table(prophets);
    data.prophets.forEach(data =>
    displayProphet(data));
}

function displayProphet(prophet){
    const cards = document.querySelector('.cards');

    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4')
    let h5 = document.createElement('h5')
    let img = document.createElement('img');
    let pBYear = prophet.birthdate;
    let pDYear = prophet.death;
    let bSplit = '';
    let byear = '';
    let dSplit = '';
    let dyear = '';
    if (prophet.lastname == 'Nelson'){
        // birth year 
            bSplit = pBYear.split(' ');
            byear = bSplit[2]
        
        const date = new Date();
        // death year
            dyear = date.getFullYear();
    }else{
            // birth year 
            bSplit = pBYear.split(' ');
            byear = bSplit[2]
            
    
            // death year
            dSplit = pDYear.split(' ');
            dyear = dSplit[2]
    }

    if(prophet.name == 'Joseph'){
        h2.textContent = `${prophet.name} ${prophet.lastname} - ${prophet.order}st`;

    }else if (prophet.name == 'Brigham'){
        h2.textContent = `${prophet.name} ${prophet.lastname} - ${prophet.order}nd`;
                    
    }else if(prophet.name == 'John'){
        h2.textContent = `${prophet.name} ${prophet.lastname} - ${prophet.order}rd`;
    }else{
        h2.textContent = `${prophet.name} ${prophet.lastname} - ${prophet.order}th`;
    }
    h3.textContent = `Birthplace: ${prophet.birthplace}`
    h4.textContent = `Birthday: ${prophet.birthdate} - Deathday${prophet.death} at Age: ${dyear - byear}`;
    h5.textContent = `Years served - ${prophet.length}`;

    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`)
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '340');
    img.setAttribute('height', '440');

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(h5);
    card.appendChild(img);

    cards.appendChild(card);
    
}

getProphetData()

function reset(){
    document.querySelector('.cards').innerHTML = ' ';
}

function sortBy(e) {
   
    reset();
    
    // if (e.target.value === 'prophetsServedDecade') {
      
        prophets.prophets.forEach(data =>{

            if(data.length >= 10){
                displayProphet(data)
            }
        })


  
    // }else if (e.target.value === 'allProphets') {
    //     prophets.prophets.forEach(data =>
    //         displayProphet(data));
    // };
    
};
//step 9    
document.querySelector("#sortBy").addEventListener('click', sortBy);
