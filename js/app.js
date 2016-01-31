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
    var listItem = createNewTask(taskInput.value); // caution this is placeholder text
    // append to #incomplete-tasks 
    incompleteTasksHolder.appendChild(listItem);
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
  // identify parent items
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  // remove list item
  ul.removeChild(listItem);

}

// check task as complete
var taskComplete = function() {
  console.log("Completed")
  // append task list item to #completed-tasks
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

// uncheck task as incomplete
var taskIncomplete = function() {
  console.log("Task now incomplete")
  // append task list item to #incomplete-tasks
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskComplete);
}

// Create Task
var createNewTask = function(content) {
  console.log("creating task...")
  // it's a list item with
  var listItem = document.createElement("li");
    // input type = "checkbox"
    var checkbox = document.createElement("input");
    // label with name of the task
    var label = document.createElement("label");
    // input type="text"
    var editInput = document.createElement("input");
    // button class="edit" and value Edit
    var editButton = document.createElement("button");
    // button class= "delete" and value Delete
    var deleteButton = document.createElement("button");

  // each element needs modifying
  checkbox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  label.innerText = content;

  // each element needs appending
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  // bind relevant events to the buttons
  bindTaskEvents(listItem, taskComplete);

  return listItem;
}

// Toggle Edit Mode
var toggleEditMode = function() {
  // append class = "editMode" to <li>}
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("binding...")
  var checkbox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  // bind editTask to edit button
  editButton.onclick = editTask;
  // bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  // bind taskCompleted to checkbox
  checkbox.onchange = checkBoxEventHandler;
}

var cycleUl = function(ulReference, checkBoxEventHandler) {
  // cycle through <li> items within <ul>
  var ulChildren = ulReference.children;
  for (var i = 0; i < ulChildren.length; i++) {
    console.log("cycling!");
    bindTaskEvents(ulChildren[i], checkBoxEventHandler);
  }
}

// Setting up the events

// set the click handlet to the add task function
addButton.onclick = addTask;
// taskInput.keydown = addTask;   // not working...

//bind events to buttons and checkboxes
// binding for incomplete events
cycleUl(incompleteTasksHolder, taskComplete);
// binding for complete events
cycleUl(completedTasksHolder, taskIncomplete);
  // cycle over <li> within <ul> to 

    // for each list item
      // select children
      // call bindTaskEvents
      



