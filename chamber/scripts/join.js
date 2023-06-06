const form = document.querySelector("#joinForm");
const input = document.querySelector("#title");
const output = document.querySelector("#output");


const re = /[a-zA-Z\S\D]{7}/gm

function testInfo(businessTest){
    const ok = re.exec(businessTest.value);
    
    if(ok == null){
        output.style.display = "block";
        output.style.color = "red";
        input.style.border = "1px solid red";
        output.textContent = `**${businessTest.value} is not 7 character**`;
        
    }

    return ok
}

form.addEventListener("submit", (event) => {
    const answer = testInfo(input);
    
    if (answer == null){
        event.preventDefault();

    }
       
})


// // Get the modal
// var modal = document.getElementById('table');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }