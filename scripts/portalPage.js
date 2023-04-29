const date = new Date();
const year = date.getFullYear();
document.querySelector("#year").innerHTML = year;

let text = document.lastModified;
document.querySelector("#demo").innerHTML = `last Updated: ${text}`;
