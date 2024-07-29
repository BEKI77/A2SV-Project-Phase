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

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.style.margin = '5px';
        doneButton.addEventListener('click', doneTask);

        const contentContainer = document.createElement("div");
        contentContainer.style.display = "flex";
        contentContainer.style.justifyContent = "space-between";
        contentContainer.appendChild(document.createTextNode(task));

        const smalldiv = document.createElement("div");
        smalldiv.style.display = "flex";
        smalldiv.style.justifyContent = "space-between";
        
        smalldiv.appendChild(deleteButton);
        smalldiv.appendChild(doneButton);
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

function doneTask(event){
    const li = event.target.parentNode.parentNode;
    li.classList.add('done');
}