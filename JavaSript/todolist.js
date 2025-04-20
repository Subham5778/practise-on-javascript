const input = document.getElementById("todoInput");
    const addBtn = document.getElementById("addBtn");
    const list = document.getElementById("todoList");

    addBtn.addEventListener("click", function () {
      const task = input.value.trim();
      if (task === "") {
        alert("Please enter a task.");
        return;
      }

      const li = document.createElement("li");
      li.textContent = task;

      // Click to mark as done
      li.addEventListener("click", function () {
        li.classList.toggle("done");
      });

      // Double-click to remove
      li.addEventListener("dblclick", function () {
        list.removeChild(li);
      });

      list.appendChild(li);
      input.value = ""; // Clear input
    });