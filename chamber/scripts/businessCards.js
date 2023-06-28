
async function getBusinessData(){
    const response = await fetch("https://raw.githubusercontent.com/josem3129/WDD-230---Web-Frontend-Development-I/main/chamber/data.json");
    
    if(response.ok){
        const data = await response.json();
        console.table(data.companies);
        displayBusiness(data.companies)
    }else{
        console.error("There was an Error loading data")
    }
}

getBusinessData();

function displayBusiness(data){


    data = data.filter((x) => x.membershipLevel == 'Gold' || x.membershipLevel == 'Silver');

    const spotlight = [];
    for (let i = 0; i < 3; i++) {
      let elt = Math.floor(Math.random() * data.length);
      spotlight.push(data.splice(elt, 1));
    }

    for (let j = 0; j < 3; j++){

        if(j == 0 || j == 1){
            const cards = document.querySelector('#spotLight');
        
            
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let link = document.createElement('a')
            let h4 = document.createElement('h4')
            let img = document.createElement('img');
        
        
            h2.textContent = `${spotlight[j][0].name}`
            h3.textContent = `${spotlight[j][0].address}`
            link.textContent = `${spotlight[j][0].businessUrl}`;
            link.setAttribute('href', spotlight[j][0].url)
            h4.textContent = `${spotlight[j][0].email}`;
        
            img.setAttribute('src', spotlight[j][0].url);
            img.setAttribute('alt', `Portrait of ${spotlight[j][0].name}`)
            img.setAttribute('loading', 'lazy');
            card.setAttribute('class', 'craft');
        
            card.appendChild(h2);
            card.appendChild(img);
            card.appendChild(h3);
            card.appendChild(h4);
            card.appendChild(link);
        
            cards.appendChild(card);

        }else{
            const cards = document.querySelector('#spotLight');
        
            
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let link = document.createElement('a')
            let h4 = document.createElement('h4')
            let img = document.createElement('img');
        
        
            h2.textContent = `${spotlight[j][0].name}`
            h3.textContent = `${spotlight[j][0].address}`
            link.textContent = `${spotlight[j][0].businessUrl}`;
            link.setAttribute('href', spotlight[j][0].url)
            h4.textContent = `${spotlight[j][0].email}`;
        
            img.setAttribute('src', spotlight[j][0].url);
            img.setAttribute('alt', `Portrait of ${spotlight[j][0].name}`)
            img.setAttribute('loading', 'lazy');
            card.setAttribute('class', 'rootHouse');
      
        
            card.appendChild(h2);
            card.appendChild(img);
            card.appendChild(h3);
            card.appendChild(h4);
            card.appendChild(link);
        
            cards.appendChild(card);
        }

    }
    
}