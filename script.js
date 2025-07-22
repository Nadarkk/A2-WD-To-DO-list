document.getElementById("taskInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    AddTask();
  }
});
function AddTask(){
    const input = document.getElementById("taskInput");
    const task = input.value;
    if (task === "") return;
    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("taskList").appendChild(li);
    input.value = ""; 
    li.onclick = function() {
        li.style.textDecoration = "line-through";
    };
    li.ondblclick = function() {
       li.remove();
    };

  };

