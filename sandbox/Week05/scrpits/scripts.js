let inputLoaded = "";
let itemChecked ="";
const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const addButton = document.querySelector("#add");
const loadButton = document.querySelector("#load");


function itemAdded(){
    let addedList = document.createElement("li")
    const CheckBox = document.createElement("input")
    const label = document.createElement("label")

    CheckBox.type = "checkbox"
    CheckBox.name = "ItemList"
    CheckBox.value = input.value;
    CheckBox.id = input.value;
    

    addedList.textContent = input.value;
    CheckBox.textContent = "X";

    if (input.value === ""){
        alert('error - please add a scripture');
    }
    else{
        let idName = CheckBox.id


        label.appendChild(CheckBox);
        addedList.appendChild(label)
        list.appendChild(addedList);
        var checkbox = document.getElementById(idName);
        localStorage.setItem(idName, checkbox.checked);
        
       
        CheckBox.addEventListener("click", function(){
        localStorage.setItem(idName, checkbox.checked);
            
            // addedList.remove()
        })
        
        input.focus()
        input.value = "";
    }
}

function itemLoaded(){
    let addedList = document.createElement("li")
    const CheckBox = document.createElement("input")
    const label = document.createElement("label")

    CheckBox.type = "checkbox"
    CheckBox.name = "ItemList"
    CheckBox.value = inputLoaded;
    CheckBox.id = inputLoaded;
    

    addedList.textContent = inputLoaded;
    CheckBox.textContent = "X";

    if (inputLoaded === ""){
        alert('error - please add a scripture');
    }
    else{
        let idName = CheckBox.id


        label.appendChild(CheckBox);
        addedList.appendChild(label)
        list.appendChild(addedList);
        var checkbox = document.getElementById(idName);
        localStorage.setItem(idName, checkbox.checked);
        
        if(itemChecked == "false"){ 
            document.getElementById(inputLoaded).checked = false;

        }else{
            document.getElementById(inputLoaded).checked = true;
        }
        CheckBox.addEventListener("click", function(){
        localStorage.setItem(idName, checkbox.checked);
            
            // addedList.remove()
        })
        
        input.focus()
    }
}

addButton.addEventListener("click", itemAdded);


loadButton.addEventListener("click", function(){

        var archive = {}, // Notice change here
            keys = Object.keys(localStorage),
            i = keys.length;
    
        while ( i-- ) {
            archive[ keys[i] ] = localStorage.getItem( keys[i] );
        }
        
        let item = Object.keys(archive)
        item.forEach((item) => {
        itemChecked = archive[item];
        inputLoaded = item;
        
        if (inputLoaded == "visit-counter"){
            
        }else{
            
            
            console.log(itemChecked); 
            console.log(inputLoaded); 
            itemLoaded();
        }
        
        })
    
})