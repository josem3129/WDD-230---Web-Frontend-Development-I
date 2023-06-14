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
    let h4 = document.createElement('h4')
    let h5 = document.createElement('h5')
    let img = document.createElement('img');
    // let pBYear = companies.birthdate;
    // let pDYear = companies.death;
    // let bSplit = '';
    // let byear = '';
    // let dSplit = '';
    // let dyear = '';
    // if (companies.lastname == 'Nelson'){
    //     // birth year 
    //         bSplit = pBYear.split(' ');
    //         byear = bSplit[2]
        
    //     const date = new Date();
    //     // death year
    //         dyear = date.getFullYear();
    // }else{
    //         // birth year 
    //         bSplit = pBYear.split(' ');
    //         byear = bSplit[2]
            
    
    //         // death year
    //         dSplit = pDYear.split(' ');
    //         dyear = dSplit[2]
    // }

    // if(companies.name == 'Joseph'){
    //     h2.textContent = `${companies.name} ${companies.lastname} - ${companies.order}st`;

    // }else if (companies.name == 'Brigham'){
    //     h2.textContent = `${companies.name} ${companies.lastname} - ${companies.order}nd`;
                    
    // }else if(companies.name == 'John'){
    //     h2.textContent = `${companies.name} ${companies.lastname} - ${companies.order}rd`;
    // }else{
    //     h2.textContent = `${companies.name} ${companies.lastname} - ${companies.order}th`;
    // }

    // card.setAttribute('class', 'companyCards')

    h2.textContent = `${companies.name}`
    h3.textContent = `${companies.address}`
    h4.textContent = `${companies.businessUrl}`;
    h5.textContent = `Email: ${companies.email}`;

    img.setAttribute('src', companies.url);
    img.setAttribute('alt', `Portrait of ${companies.name}`)
    img.setAttribute('loading', 'lazy');
    // img.setAttribute('width', '340');
    // img.setAttribute('height', '440');

    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(h5);

    cards.appendChild(card);
    
}
getProphetData()


//grid or list
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

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