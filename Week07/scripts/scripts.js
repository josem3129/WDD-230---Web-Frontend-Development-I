
  
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