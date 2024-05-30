function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');
  var taskItem = document.createElement('li');
  var checkbox = document.createElement('input');
  
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    taskItem.classList.toggle('completed');
    label.style.textDecoration = this.checked ? 'line-through' : 'none';
  });

  var label = document.createElement('label');
  label.textContent = taskInput.value;

  var editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', function() {
    var newTaskText = prompt('Enter the new task text:', label.textContent);
    if (newTaskText) {
      label.textContent = newTaskText;
    }
  });

  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(checkbox);
  taskItem.appendChild(label);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
  taskInput.value = '';
}

function handleKeyPress(event) {
  if (event.key === 'Delete') {
    addTask();
  }
}

/*function handleKeyPre(event) {
  if (event.key == 'Delete') {
    label.deleteButton();
  }
}*/