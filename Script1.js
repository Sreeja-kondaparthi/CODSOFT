const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value == ''){
        alert('you have to enter a task')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        saveToDo();
    }
    inputBox.value = "";

}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveToDo();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveToDo();
    }
},false);

function saveToDo(){
    localStorage.setItem("ToDo",listContainer.innerHTML);
    saveToDo();
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("ToDo");
    saveToDo();
}

showList();