// Basic form DOM elements
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")

// Selector for the tasklist output
var tasklist = document.querySelector("#tasklist > ul");

// DOM elements for the task input fields
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");


//find row to append to
var table = document.getElementById("taskTable");
for (var i = 0, row; row = table.rows[i]; i++) {
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    var rowNum = i;
}  
var rowAppend = rowNum-1;
// Form submission event listener
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    if (task) {
        addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
    }
})

// Create global array to track tasks
var taskListArray = [];

// Function to add task with user inputs as parameters
function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
        id: Date.now(),
        taskDescription,
        dueDate,
        estimatedTime,
        completionTime,
        priorityRating,
        completionStatus
    };
    taskListArray.push(task);
    console.log(taskListArray);
    renderTask(task);
}

// Function to display task on screen
function renderTask(task) {

    // Call function - checks if a task has been added
    updateEmpty();

    // Create HTML elements
    //let item = document.createElement("li");
    //item.setAttribute('data-id', task.id);
    //item.innerHTML = "<p>" + task.taskDescription + "</p>" + task.dueDate +"</p>" +task.estimatedTime+ "</p>" +task.completionTime+ "</p>" +task.priorityRating+ "</p>" +"Not Done"; 

    //tasklist.appendChild(item);
    var tasknum = rowNum-1;
    var idAdd = "row"+ tasknum;
    //append tasklist in row 
    var table = document.getElementById("taskTable");
    var row = table.insertRow(tasknum);
    row.setAttribute('id', idAdd);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    //var cell7 = row.insertCell(6);
    cell1.innerHTML = task.taskDescription;
    cell2.innerHTML = task.dueDate;
    cell3.innerHTML = task.estimatedTime;
    cell4.innerHTML = task.completionTime;
    cell5.innerHTML = task.priorityRating;
    cell6.innerHTML = "Not Done";
    //cell7.innerHTML = "Not Done";
    

    var tasklist = document.querySelector("#taskTable > tr");

    let item = document.createElement("td");
    //item.setAttribute('data-id', task.id);
    //item.innerHTML = "<p>" + task.taskDescription + "</p>" + task.dueDate +"</p>" +task.estimatedTime+ "</p>" +task.completionTime+ "</p>" +task.priorityRating+ "</p>" +"Not Done"; 

    tasklist.appendChild(item);
    // Extra Task DOM element
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Task Done");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);


    // Event Listeners for DOM elements
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = taskListArray.findIndex(task => task.id === Number(id));
        removeItemFromArray(taskListArray, index)
        console.log(taskListArray);
        updateEmpty();
        item.remove();
        myDeleteFunction(tasknum)
    })

    // Clear the input form
    form.reset();
}

function myDeleteFunction(num) {
    document.getElementById("taskTable").deleteRow(num);
}

// Function to remove item from array
function removeItemFromArray(arr, index) {
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}


// Function to hide the 'you haven't added any tasks' text
function updateEmpty() {
    if (taskListArray.length > 0) {
        document.getElementById('emptyList').style.display = 'none';
    } else {
        document.getElementById('emptyList').style.display = 'block';
    }
}