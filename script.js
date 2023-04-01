document.getElementById("push").onclick = function () {
  if (document.querySelector("#newTask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.getElementById("task").innerHTML += `
    <div class="task">
        <span id="taskname">
            ${document.querySelector("#newTask input").value}
        </span>

        <button class="delete">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    </div>`;

    var currentTask = document.querySelectorAll(".delete");
    for (var i = 0; i < currentTask.length; i++) {
      currentTask[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    document.querySelector('#newTask input').value = "";
  }
};
