// adding interactivity to the existing index.html file



var taskInput = document.getElementById('new-task'); // #new-task input field
var addButton = document.getElementById('add-button'); // first button, or we can give it an iD too #add-button
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); // #incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); // #completed-tasks

// Events
// Add a new task (see create task)
var addTask = function() {
  console.log("Adding task...")
  // when a button is pressed
  // when the enter key is pressed
    // call the create task funciton
    // append to #incomplete-tasks 
}

// Edit task
var editTask = function() {
  console.log("Editing task...")
  // when a button is pressed
    //Toggle Edit Mode
      // if parent (of the button) has a class "editMode"
        // switch to no class
        // label text become input's value
      // if parent has not class
        // toggle "editMode" class
        // input value becomes label's text
}

// delete task
var deleteTask = function() {
  console.log("Deleting task...")
  // when a button is pressed
    // remove parent list item
}

// check task as complete
var taskComplete = function() {
  console.log("Completed")
  // when checklist is checked
    // append task list item to #completed-tasks
}

// uncheck task as incomplete
var taskIncomplete = function() {
  console.log("Task now incomplete")
  // when checklist is unchecked
    // append task list item to #incomplete-tasks
}

// Create Task
var createTask = function() {
  console.log("creating task...")
  // it's a list item with
    // input type = "checkbox"
    // label with name of the task
    // input type="text"
    // button class="edit" and value Edit
    // button class= "delete" and value Delete
}

// Toggle Edit Mode
var toggleEditMode = function() {
  // append class = "editMode" to <li>}
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("binding...")
  // bind editTask to edit button
    // bind deleteTask to delete button
    // bind taskCompleted to checkbox
}

var cycleUl = function(ulReference, checkBoxEventHandler) {
  // cycle through <li> items within <ul>
  var ulChildren = ulReference.children;
  for (var i = 0; i < ulChildren.length; i++) {
    console.log("cycling!");
    bindTaskEvents(ulChildren[i], checkBoxEventHandler);

  }
}

// set the click handlet to the add task function
addButton.onclick = addTask;
// taskInput.keydown = addTask;   // not working...

//bind events to buttons and checkboxes
// binding for incomplete events
cycleUl(incompleteTasksHolder, taskComplete)
// binding for complete events
cycleUl(completedTasksHolder, taskIncomplete)
  // cycle over <li> within <ul> to 

    // for each list item
      // select children
      // call bindTaskEvents
      



