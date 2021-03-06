// adding interactivity to the existing index.html file



var taskInput = document.getElementById('new-task'); // #new-task input field
var addButton = document.getElementById('add-button'); // first button, or we can give it an iD too #add-button
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); // #incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); // #completed-tasks

// Events
// Add a new task (see create task)
var addTask = function() {
  console.log("Adding task...")
  // when the enter key is pressed
    // call the create task funciton
    if (taskInput.value){
        var listItem = createNewTask(taskInput.value); // caution this is placeholder text
        // append to #incomplete-tasks 
        incompleteTasksHolder.appendChild(listItem);
        taskInput.value = "";
    }
}

// Edit task
var editTask = function() {
  console.log("Editing task...")

    var listItem = this.parentNode;

    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");
    var editButton = listItem.querySelector("button.edit");

      // if parent (of the button) has a class "editMode"
    if (listItem.classList.contains("editMode")) {
      // label text is set from input's value
      label.innerText = editInput.value;
      editButton.innerText = "Edit";
    } else {
      // input value is set from label's text
      editInput.value = label.innerText;
      editButton.innerText = "Save";
    }
    
    // toggle "editMode" class
    listItem.classList.toggle("editMode")
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
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", function(){console.log("other requests")});
taskInput.addEventListener("keydown", function(e) {
  if(e.which == 13){
    addTask();
  } else {
    console.log("you shall not pass! Try pressing enter");
  }
});   // works!

//bind events to buttons and checkboxes
// binding for incomplete events
cycleUl(incompleteTasksHolder, taskComplete);
// binding for complete events
cycleUl(completedTasksHolder, taskIncomplete);
  // cycle over <li> within <ul> to 

    // for each list item
      // select children
      // call bindTaskEvents
      



