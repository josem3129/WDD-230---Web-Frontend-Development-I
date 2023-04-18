const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;

let text = document.lastModified;
document.getElementById("demo").innerHTML = `last Updated: ${text}`;
