const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todo-list";

let AllToDos= [];

function updateToDo(toDoList){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDoList));
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newToDo;
    button.innerText = 'x';
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click",removeToDo);
}

function removeToDo(event){
    const eventList = event.target.parentNode;
    
    const index = Array.from(eventList.parentElement.children).indexOf(eventList);
    eventList.remove();
    //toDoList.removeChild(eventList);
    AllToDos.splice(index, 1);
    updateToDo(AllToDos);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""
    paintToDo(newToDo);
    AllToDos.push(newToDo);
    updateToDo(AllToDos);
}


toDoForm.addEventListener("submit",handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    AllToDos = parsedToDos;
    parsedToDos.forEach((item)=> paintToDo(item));
}