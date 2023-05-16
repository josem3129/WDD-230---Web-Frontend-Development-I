const input = document.querySelector("#comment_author");
const inputMessage = document.querySelector("#comment");
const list = document.querySelector("#list");
const button = document.querySelector("button");

button.addEventListener("click", function(){
    let addedList = document.createElement("li")
    const deletButton = document.createElement("button")

    addedList.textContent = `${input.value} --- ${inputMessage.value}`;
    deletButton.textContent = "X";
    addedList.appendChild(deletButton);
    list.appendChild(addedList);
    
    
    deletButton.addEventListener("click", function(){
        addedList.remove()
    })
    
    input.focus()
    input.value = "";
    inputMessage.focus()
    inputMessage.value = "";

});