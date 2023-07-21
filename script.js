document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value;
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            taskItem.appendChild(checkbox);

            const taskLabel = document.createElement('label');
            taskLabel.textContent = taskText;
            taskItem.appendChild(taskLabel);

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';
            taskItem.appendChild(deleteBtn);

            taskList.appendChild(taskItem);

            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            const taskItem = e.target.closest('.task-item');
            taskList.removeChild(taskItem);
        } else if (e.target.tagName === 'INPUT') {
            const taskItem = e.target.closest('.task-item');
            taskItem.classList.toggle('completed');
        }
    });
});
