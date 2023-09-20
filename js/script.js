const addInput = document.querySelector(".add-input");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector(".tasks");
let newTask = [];

function addTask(){
  if (addInput.value === '') 
  {
    alert("You Must Write Something");
  } 
  else 
  {
    let liEl = document.createElement("li");
    let btnEl = document.createElement("button");
    
    newTask.push(addInput.value);
    liEl.className = "task";
    
    btnEl.className = "delete";
    btnEl.textContent = "X";
    
    newTask.map((task) => {
      liEl.textContent = `${task}`;
    });

    liEl.appendChild(btnEl);
    taskList.appendChild(liEl);
    
    btnEl.addEventListener("click", () => {
      taskList.removeChild(liEl);
    });
    
    liEl.addEventListener("click", ()=> {
      liEl.classList.toggle("checked");
    });
    
    addInput.value = '';
  }
};

addInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
  };
});