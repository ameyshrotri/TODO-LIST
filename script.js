function addTodo() {
  const inputValue = document.getElementById("todo-input").value;

  if (inputValue.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  // Checkbox for task completion
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      taskSpan.classList.add("completed");
    } else {
      taskSpan.classList.remove("completed");
    }
  });

  const taskSpan = document.createElement("span");
  taskSpan.textContent = inputValue;

  // Delete button for the task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  document.getElementById("todo-list").appendChild(li);

  document.getElementById("todo-input").value = "";
}

document
  .getElementById("todo-input")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      addTodo();
    }
  });
