const todo_Input = document.getElementsByClassName('todo-input');
const todo_Button = document.getElementsByClassName('todo-button');
const todo_List = document.getElementsByClassName('todo-list');
const remove_all = document.getElementsByClassName('remove-button');
const todo_Container =document.getElementsByClassName('todoli-container');

let li = document.createElement("li");
// let inputValue = document.getElementById("myInput").value;
let textValue = document.createTextNode(todo_Input);
li.appendChild(textValue) 



// todo_Button.addEventListener('click', function(click){
//     let li = document.createElement('li');
//     li.classList.add('li-styling')
//     li.innerText = inputField.value;
//     todo_Container.appendChild(li);
//     inputField.value = " ";
// })




























// todo_Button.addEventListener('click', addTodo);

// function addTodo(event) {
//     // prevent refreshing webpage
//     // event.preventDefault(addTodo);
//     // event.stopImmediatePropagation()
//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add("todo")
//     // Create li
//     const newTodo = document.createElement('li');
//     newTodo.innerText = inputField.value ;
//     newTodo.classList.add("todo-item")
//     todoDiv.appendChild(newTodo);
//     // Check button
//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = '<i class="check"> </i>' ;
//     completedButton.classList.add("complete-btn");
//     todoDiv.appendChild(completedButton);
//     //Trash button
//     const trashButton = document.createElement("button");
//     trashButton.innerHTML = '<i class="trash"> </i>';
//     trashButton.classList.add("complete-btn");
//     todoDiv.appendChild(trashButton);
//     // Add to li
//     todo_list.appendChild(todoDiv);
// }
