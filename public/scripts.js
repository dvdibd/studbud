//--------------------Navigation-------------------------------------

import Navigation from './components/navigation';

import './components/tasklist';
import './components/modal';

const links = document.querySelectorAll('.top-nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');



var nav = new Navigation(links, pages);
//nav.getLinks();

nav.links.forEach(function(link) {
  link.addEventListener('click', function() {
    let pageId = nav.getHash(link);
    nav.setPage(pageId);
  })
})


const subLinks = document.querySelectorAll('.sub-nav > ul > li > a');
const subPages = document.querySelectorAll('.sub-page-container');

var subNav = new Navigation(subLinks, subPages);

subNav.links.forEach((link) => {
  link.addEventListener('click', function() {
    let pageId = subNav.getHash(link);
    subNav.setPage(pageId);
  })
})

//--------------------TASK LIST SECTION-------------------------------------
// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");
//const taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

// Event listener for Button click

button.addEventListener("click", function(event) {
  event.preventDefault(); // Not as necessary for button, but needed for form submit

  
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex];

  //let date = (new Date()).toLocaleDateString('en-US') //Convert to short date format

  // Call the addTask() function using
  addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);

  // Log out the newly populated taskList everytime the button has been pressed
  //console.log(taskList);
})

// Create an empty array to store our tasks
var taskListArray = [];

function addTask(taskDescription, dueDate, priorityRating, estimatedTime,completionTime, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear();

  let task = {
    taskDescription,
    dateCreated,
    dueDate,
    priorityRating,
    estimatedTime,
    completionTime,
    completionStatus
  };

  // Add the task to our array of tasks
  taskListArray.push(task);

  // Separate the DOM manipulation from the object creation logic
  renderTask(task);
}


// Function to display the item on the page
function renderTask(task) {
  let item = document.createElement("li");
  item.innerHTML = "<p>" + task.taskDescription + "</p>";

  tasklist.appendChild(item);

  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete Task");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task

  // Listen for when the 
  delButton.addEventListener("click", function(event){
    event.preventDefault();
    item.remove(); // Remove the task item from the page when button clicked
    // Because we used 'let' to define the item, this will always delete the right element
  })
  
  // Clear the value of the input once the task has been added to the page
  form.reset();
}


