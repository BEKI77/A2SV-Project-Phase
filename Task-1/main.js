const todoInput = document.getElementById("todo-input");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-items");
// const clearButton = document.getElementById("clear-button");
todoForm.addEventListener("submit", addTask);
    
function addTask (event){
    event.preventDefault();
    const task = todoInput.value.trim();

    if(task!==''){
        const li = document.createElement("li");

        // create a delete button element

        const deleteButton = document.createElement("button");
        deleteButton.textContent = 'Delete';
        deleteButton.style.margin = '5px';
        deleteButton.addEventListener("click", deleteTask);

        // create a done button element

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit Task';
        editButton.style.margin = '5px';
        editButton.addEventListener('click', editTask);

        const contentContainer = document.createElement("div");
        contentContainer.style.display = "flex";
        contentContainer.style.justifyContent = "space-between";


        const addedtask = document.createElement("span");
        addedtask.textContent = task;
        contentContainer.appendChild(addedtask);

        const smalldiv = document.createElement("div");
        smalldiv.style.display = "flex";
        smalldiv.style.justifyContent = "space-between";
        
        smalldiv.appendChild(editButton);
        smalldiv.appendChild(deleteButton);
        contentContainer.appendChild(smalldiv);
        

        li.appendChild(contentContainer);
        

        todoList.appendChild(li);

        todoInput.value = '';
    }
}

function deleteTask(event){
    const li = event.target.parentNode.parentNode.parentNode;
    li.parentNode.removeChild(li);
}

function editTask(event){
    const li = event.target.parentNode.parentNode;
    
    const taskElement = li.querySelector('span');
    
    taskElement.contentEditable = true;

    taskElement.focus();
    
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.style.margin = '5px';
    saveButton.addEventListener('click', saveTask);
    
    const buttonsContainer = li.querySelector('div');
    buttonsContainer.appendChild(saveButton);
}

function saveTask(event) {
    const li = event.target.parentNode.parentNode;
    const taskElement = li.querySelector('span');
    
    taskElement.contentEditable = false;
    
    const buttonsContainer = li.querySelector('div');
    buttonsContainer.removeChild(event.target);
}