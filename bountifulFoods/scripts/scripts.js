function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("navHeader").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn')

x.onclick = toggleMenu;

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
let day = date.getDay() - 1;
let numberDay = date.getDate();
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


let text = document.lastModified;
document.querySelector("#year").innerHTML = `${year}.:|:. Jose Martinez .:|:. Idaho -- last Updated: ${text}`;

// document.querySelector("#date").innerHTML= `${dayName} ${numberDay}, ${monthName} ${year}`;
// document.querySelector("#dateFormed").innerHTML= `${dayName} ${numberDay}, ${monthName} ${year}`;


