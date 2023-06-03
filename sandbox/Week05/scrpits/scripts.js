const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const button = document.querySelector("button");

button.addEventListener("click", function(){
    let addedList = document.createElement("li")
    const CheckBox = document.createElement("input")
    const label = document.createElement("label")

    CheckBox.type = "checkbox"
    CheckBox.name = "ItemList"
    CheckBox.value = input.value
    CheckBox.id = "ItemOregon"
    

    addedList.textContent = input.value;
    CheckBox.textContent = "X";

    if (input.value === ""){
        alert('error - please add a scripture');
    }
    else{

        label.appendChild(CheckBox);
        // label.appendChild(document.createTextNode(input.value))
        addedList.appendChild(label)
        list.appendChild(addedList);
        
        
        CheckBox.addEventListener("click", function(){
            addedList.remove()
        })
        
        input.focus()
        input.value = "";
    }

});
