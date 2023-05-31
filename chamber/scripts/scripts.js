function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn')

x.onclick = toggleMenu;

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay() - 1;
const numberDay = date.getDate();
let dayName = "";
let monthName;

switch(day){
    case 0:
        dayName = "Monday";
        break;
    case 1:
        dayName = "Tuesday";
        break;
    case 2:
        dayName = "Wednesday";
        break; 
    case 3:
        dayName = "Thursday";
        break;
    case 4:
        dayName = "Friday";
        break;
    case 5:
        dayName = "Saturday";
        break;
    case 6:
        dayName = "Sunday";
        break
}

switch(month){
    case 0:
        monthName = "January";
        break;
    case 1:
        monthName = "February";
        break;
    case 2:
        monthName = "March";
        break; 
    case 3:
        monthName = "April";
        break;
    case 4:
        monthName = "May";
        break;
    case 5:
        monthName = "June";
        break;
    case 6:
        monthName = "July";
        break
    case 7:
        monthName = "August";
        break;
    case 8:
        monthName = "September";
        break;
    case 9:
        monthName = "October";
        break; 
    case 10:
        monthName = "November";
        break;
    case 11:
        monthName = "December";
        break;   
}
document.querySelector("#date").innerHTML= ` ${dayName} ${numberDay}, ${monthName} ${year}` ;


let text = document.lastModified;
document.querySelector("#year").innerHTML = `${year}.:|:. Jose Martinez .:|:. Idaho last Updated: ${text}`;

if (dayName === "Saturday"){
    const img = document.querySelector(".hero")

    img.setAttribute("src", "images/DNA-website-slide_depot1.jpg")
    document.querySelector(".welcome").innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
}



 //lazy loading//
const images = document.querySelectorAll("[data-src]")

function preloadImage(img){
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }

    img.src = src
}


const imgOptions = {
    threshold: 0,
    rootMargin: "100px"

};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target)
        }
    })
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image);
})

//local storage 

const countDisplay = document.querySelector("#visitedCount");

let numVisit = Number(window.localStorage.getItem("visit-counter"));

if(numVisit !== 0){
    countDisplay.textContent = `Number of visits: ${numVisit}`;
}else{
    countDisplay.textContent = "This is your first time visiting!"
}

numVisit++;

localStorage.setItem("visitedCount", numVisit);


