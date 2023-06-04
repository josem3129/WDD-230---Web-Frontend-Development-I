function load(){    
    var checked = JSON.parse(localStorage.getItem('checkbox1zaal1'));
    document.getElementById("checkbox1zaal1").checked = checked;
}
const ItemObj = {};
const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const addButton = document.querySelector("#add");
const saveButton = document.querySelector("#save");
const loadButton = document.querySelector("#load");

const itemAdded = function(){
    let addedList = document.createElement("li")
    const CheckBox = document.createElement("input")
    const label = document.createElement("label")

    CheckBox.type = "checkbox"
    CheckBox.name = "ItemList"
    CheckBox.value = input.value;
    CheckBox.id = input .value;
    

    addedList.textContent = input.value;
    CheckBox.textContent = "X";

    if (input.value === ""){
        alert('error - please add a scripture');
    }
    else{
        let idName = CheckBox.id

        ItemObj[input]

        label.appendChild(CheckBox);
        addedList.appendChild(label)
        list.appendChild(addedList);
        var checkbox = document.getElementById(idName);
        localStorage.setItem(idName, checkbox.checked);
        
        
        CheckBox.addEventListener("click", function(){
                   
            // addedList.remove()
        })
        
        input.focus()
        input.value = "";
    }
}

addButton.addEventListener("click", itemAdded);

saveButton.addEventListener("click", function(){
    

})

loadButton.addEventListener("click", function(){
      
    var valueChecked = JSON.parse(localStorage.getItem(-------));     
    var keyChecked = JSON.parse(localStorage.key());
    itemAdded()
    for(let i = 1; i <= valueChecked; i++){
        if(localStorage.length > 0){
          var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
          document.getElementById(String(i)).checked = checked;
        }
      }
      window.addEventListener('change', save);

})