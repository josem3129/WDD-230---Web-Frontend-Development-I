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
 
 localStorage.setItem("visit-counter", numVisit);