const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphet(data.prophets);
}

function displayProphet(data){
    const cards = document.querySelector('.cards');

    data.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4')
        let img = document.createElement('img');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        h3.textContent = `Birthplace: ${prophet.birthplace}`
        h4.textContent = `${prophet.birthdate} - ${prophet.death}`

        img.setAttribute('src', prophet.imageurl);
        img.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`)
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '340');
        img.setAttribute('height', '440');

        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(h4);
        card.appendChild(img);

        cards.appendChild(card);
    });
}

getProphetData();