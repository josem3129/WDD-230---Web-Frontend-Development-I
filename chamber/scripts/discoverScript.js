 //lazy loading//
function loadImages (image) {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
}

let images = document.querySelectorAll("img[data-src]")

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                console.log(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    images.forEach((image) => {
        observer.observe(image);
    });
} else {
    images.forEach(loadImages);
}
 //local storage //
 const countDisplay = document.querySelector("#visitedCount");
 const localDate = new Date().getTime();

function dateCal(){
    const pastDateStamp = window.localStorage.getItem('visitedCount')

    const lastVisted = 1000 *new Date(pastDateStamp).getTime() * localDate * 24

    countDisplay.textContent = `Number of Days last visited: ${lastVisted}`;
}

 
 let numVisit = Number(window.localStorage.getItem("visit-counter"));
 
 if(numVisit !== 0){
    dateCal();
 }else{
     countDisplay.textContent = "This is your first time visiting!"
 }
 
 numVisit++;
 
 localStorage.setItem("visit-counter",JSON.stringify(localDate));