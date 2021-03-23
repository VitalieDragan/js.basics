const todoInput = document.querySelector('.todo-input');
const errorMessage = document.querySelector('.error-message')
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('todo-list');
const removeAll =document.querySelector('.remove-all')

// event
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
removeAll.addEventListener('click', removeAllTodos);

// functions
function addTodo(event) {
    event.stopImmediatePropagation();
    // event.preventDefault();

    

    //create check
    const check = document.createElement('span');
    check.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    check.classList.add('check-icon');
    doDiv.appendChild(check);

    //do li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('delete-btn');
    deleteButton.name = "delete-btn";
    doDiv.appendChild('deleteButton')

    //join list
    if (todoInput.value === ''){
        errorMessage.classList.add('show-error-message');
    } else {
        errorMessage.classList.remove('show-error-message');
        todoList.appendChild(doDiv);
    }

    // create div
    const doDiv = document.createElement('div');
    doDiv.classList.add('todo');

    //clear input
    todoInput.value = '';

}

// remove all
function removeAllTodos(event) {
    document.querySelector('ul').innerHtml = "";
}


function deleteCheck(event) {
    const item = event.target;
    const todo = item.parentElement;
    const checkIcon = item.previousSibling;
    const deleteBtn = item.nextSibling;

    //completed
    if (item.name === 'todo-item') {
        todo.classList.toggle('completed');
        checkIcon.classList.toggle('show-check-icon');
        deleteBtn.classList.toggle('checked-delete-button');
    }

    //delete to do
    if (item.name === 'delete-btn') {
        const todo = item.parentElement;
        todo.remove();
    }

}
