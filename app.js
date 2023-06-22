let dragTask = null;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  dragTask = event.target;
}

function drop(event) {
  event.preventDefault();
  const target = event.target;

  if (target.tagName === 'LI') {
    target.parentNode.insertBefore(dragTask, target.nextSibling);
  } else {
    target.appendChild(dragTask);
  }
}

function addTask() {
  const TaskInput = document.getElementById('nueva-tarea');
  const taskTitle = TaskInput.value;

  if (taskTitle.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = taskTitle;
    li.draggable = true;
    li.addEventListener('dragstart', drag);

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', editTask);
   
    li.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', deleteTask);
    li.appendChild(deleteButton);

    const todoList = document.getElementById('realizado');
    todoList.appendChild(li);

    TaskInput.value = '';
  }
}

function editTask(event) {
  const taskItem = event.target.parentNode;
  const currentTitle = taskItem.firstChild.textContent;
  const newTitle = prompt('Editar su tarea:', currentTitle);

  if (newTitle !== null && newTitle.trim() !== '') {
    taskItem.firstChild.textContent = newTitle;
  }
}

function deleteTask(event) {
  const taskItem = event.target.parentNode;
  taskItem.parentNode.removeChild(taskItem);
}
