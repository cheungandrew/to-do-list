"use strict"

// Getting to-do list button and adding click event
var addItemButton = document.getElementById("addItemButton");
addItemButton.addEventListener("click", addItemToList);

// Grabbing our ordered list
var toDoList = document.getElementById("toDoList");

// Function that adds to-do list items to the list
function addItemToList(e) {
    // Prevents submit button from sending and refreshing page
    e.preventDefault();

    // Grabbing value from user input
    var inputBox = document.getElementById("newListItem");
    var input = inputBox.value;

    // Validating to make sure input is not empty
    if (input == "" || input == undefined) {
        alert("Field cannot be empty");
        return;
    }

    // Creating new list element
    var newListElement = document.createElement("li");

    // Creating a text node from user input
    var newListTextNode = document.createTextNode(input);

    // Adding text node to our new list element
    newListElement.appendChild(newListTextNode);

    // Prepend our new li and its text to the list
    toDoList.prepend(newListElement);

    // Clear the input box
    inputBox.value = "";

}

// Grabbing the clear button
var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearList);

// Clear list function
function clearList(e) {
    // Prevents submit button from sending and refreshing page
    e.preventDefault();

    // Set content of list to empty
    toDoList.textContent = "";

}