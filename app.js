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

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if(value && !editFlag){
        console.log("add items");
    } 
    else if(value && editFlag){
        console.log("editing")
    } 
    else{
        alert.textContent = "Empty Value"
        alert.classList.add("alert-danger")
    }
}

// display alert
function displayAlert(){
    
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
 