async function getProphetData(){
    const response = await fetch("https://raw.githubusercontent.com/josem3129/WDD-230---Web-Frontend-Development-I/main/chamber/data.json");
    const data = await response.json();
    // companies = data;
    console.table(data.companies);
    // console.table(companies);
    data.companies.forEach(data =>
    displayProphet(data));
}

function displayProphet(companies){
    const cards = document.querySelector('.cards');

    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let link = document.createElement('a')
    let h4 = document.createElement('h4')
    let img = document.createElement('img');


    h2.textContent = `${companies.name}`
    h3.textContent = `${companies.address}`
    link.textContent = `${companies.businessUrl}`;
    link.setAttribute('href', companies.url)
    h4.textContent = `Email: ${companies.email}`;

    img.setAttribute('src', companies.url);
    img.setAttribute('alt', `Portrait of ${companies.name}`)
    img.setAttribute('loading', 'lazy');
    // img.setAttribute('width', '340');
    // img.setAttribute('height', '440');

    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(link);

    cards.appendChild(card);
    
}
getProphetData()


//grid or list
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("section");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("cards");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("cards");
}