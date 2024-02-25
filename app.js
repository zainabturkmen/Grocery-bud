// ****** SELECT ITEMS **********
 const alert = document.querySelector(".alert");
 const form = document.querySelector(".grocery-form");
 const grocery = document.getElementById("grocery");
 const submitBtn = document.querySelector(".submit-btn");
 const groceryContainer = document.querySelector(".grocery-container");
 const groceryList = document.querySelector(".grocery-list");
 const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem)
// clear button
clearBtn.addEventListener("click", clearItem);

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if(value && !editFlag){
        const element = document.createElement("article")
            // add class
        element.classList.add("grocery-item");
            // add id
        const attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML =   ` <p class="title">${value}</p>
                    <div class="btn-continer">
                    <button type="button" class="edit-btn">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="delete-btn">
                        <i class="fas fa-trash"></i> 
                    </button>
                    </div>`;

        const deleteBtn = element.querySelector(".delete-btn");
        const editBtn = element.querySelector(".edit-btn");
        deleteBtn.addEventListener("click", deleteItem)
        editBtn.addEventListener("click", editItem)           

        // Append child
        groceryList.appendChild(element);
        // display alert
        displayAlert("item added to the list", "success")
        // show container
        groceryContainer.classList.add("show-container")
        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault()
    } 
    else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert("value editied", "success");
        // edit local storge
        editLocalStorage(editId, value)
        setBackToDefault()
    } 
    else{
       displayAlert("please enter value", "danger");
    }
}

// display alert
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000)

}

// clearItem 
function clearItem(){
    const items = document.querySelectorAll(".grocery-item");

    if(items.length > 0){
        items.forEach(function(item){
            groceryList.removeChild(item);
        })
    }

    groceryContainer.classList.remove("show-container")
    displayAlert("empty list", "danger")
    setBackToDefault()
}

// delet funtion
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    groceryList.removeChild(element)
    if(groceryList.children.length === 0){
        groceryContainer.classList.remove("show-container")
    }

    displayAlert("item removed", "danger");
    setBackToDefault()
    //  remove fro local storage
    // removeFromLocalStorage(id)
}

// edit function
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form  value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = "edit";
}
// set back to default
function setBackToDefault(){
    grocery.value = "";
    editFlag = false;
    editElement = "";
    submitBtn.textContent = "submit";
};

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
    console.log("added to local storage");
};

function removeFromLocalStorage(id){

}
// ****** SETUP ITEMS **********

function editLocalStorage(id, value){}
 