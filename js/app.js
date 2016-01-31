// adding interactivity to the existing index.html file



// Events
// Add a new task (see create task)
  // when a button is pressed

  // when the enter key is pressed

// Edit task
  // when a button is pressed
    //Toggle Edit Mode
      // if parent (of the button) has a class "editMode"
        // switch to no class
        // label text become input's value
      // if parent has not class
        // toggle "editMode" class
        // input value becomes label's text

// delete task
  // when a button is pressed
    // remove parent list item

// check task as complete
  // when checklist is checked
    // append task list item to #completed-tasks

// uncheck task as incomplete
  // when checklist is unchecked
    // append task list item to #incomplete-tasks

// Create Task
  // it's a list item with
    // input type = "checkbox"
    // label with name of the task
    // input type="text"
    // button class="edit" and value Edit
    // button class= "delete" and value Delete

// Toggle Edit Mode
  // append class = "editMode" to <li>