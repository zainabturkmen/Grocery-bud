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
let editFlag;
let editId = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem)

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString()
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
 