const todoInput = document.getElementById("todo-input") as HTMLInputElement;
const todoForm = document.getElementById("todo-form") as HTMLFormElement;
const todoList = document.getElementById("todo-items") as HTMLUListElement;

todoForm.addEventListener("submit", addTask);

function addTask(event: Event): void {
    event.preventDefault();
    const task = todoInput.value.trim();

    if (task !== '') {
        const li = document.createElement("li");

        // Create a delete button element
        const deleteButton = document.createElement("button");
        deleteButton.textContent = 'Delete';
        deleteButton.style.margin = '5px';
        deleteButton.addEventListener("click", deleteTask);

        // Create an edit button element
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit Task';
        editButton.style.margin = '5px';
        editButton.addEventListener('click', editTask);

        const contentContainer = document.createElement("div");
        contentContainer.style.display = "flex";
        contentContainer.style.justifyContent = "space-between";

        const addedTask = document.createElement("span");
        addedTask.textContent = task;
        contentContainer.appendChild(addedTask);

        const smallDiv = document.createElement("div");
        smallDiv.style.display = "flex";
        smallDiv.style.justifyContent = "space-between";

        smallDiv.appendChild(editButton);
        smallDiv.appendChild(deleteButton);
        contentContainer.appendChild(smallDiv);

        li.appendChild(contentContainer);

        todoList.appendChild(li);

        todoInput.value = '';
    }
}

function deleteTask(event: Event): void {
    const button = event.target as HTMLButtonElement;
    const li = button.closest("li") as HTMLLIElement;
    if (li) {
        li.remove();
    }
}

function editTask(event: Event): void {
    const button = event.target as HTMLButtonElement;
    const li = button.closest("li") as HTMLLIElement;

    const taskElement = li.querySelector('span') as HTMLSpanElement;
    taskElement.contentEditable = 'true';
    taskElement.focus();

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.style.margin = '5px';
    saveButton.addEventListener('click', saveTask);

    const buttonsContainer = li.querySelector('div') as HTMLDivElement;
    buttonsContainer.appendChild(saveButton);
}

function saveTask(event: Event): void {
    const button = event.target as HTMLButtonElement;
    const li = button.closest("li") as HTMLLIElement;
    const taskElement = li.querySelector('span') as HTMLSpanElement;

    taskElement.contentEditable = 'false';

    const buttonsContainer = li.querySelector('div') as HTMLDivElement;
    buttonsContainer.removeChild(button);
}`
