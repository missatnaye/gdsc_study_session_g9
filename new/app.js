const taskList = document.getElementById('taskList');
const addTaskForm = document.getElementById('addTaskForm');
const addTaskButton = document.getElementById('addTaskButton');

addTaskButton.addEventListener('click', (event) => {
    event.preventDefault();

    const taskInput = addTaskForm.elements.task;
    const taskText = taskInput.value.trim();

    if (!taskText) {
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove');

    removeButton.addEventListener('click', () => {
        newTask.parentNode.removeChild(newTask);
    });

    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);

    taskInput.value = '';
});