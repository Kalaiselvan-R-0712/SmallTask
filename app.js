    const input = document.querySelector("input");
    const ul = document.getElementById("taskList");

    document.getElementById("add").addEventListener("click", () => {
      const taskText = input.value.trim();
      input.value = "";
      if (taskText === "") return;

      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      const span = document.createElement("span");
      span.textContent = taskText;

      const delBtn = document.createElement("button");
      delBtn.textContent = "Del";

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(delBtn);
      ul.appendChild(li);

      checkbox.addEventListener("change", () => {
        span.classList.toggle("completed", checkbox.checked);
      });

      delBtn.addEventListener("click", () => {
        li.remove();
      });
    });