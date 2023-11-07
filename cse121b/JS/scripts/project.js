document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (!isNaN(taskText)) {
            // Check if taskText is a number
            alert("Please enter a valid task (non-numeric).");
        } else if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.className = "task";
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="remove">Remove</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }

    });

    taskList.addEventListener("click", function(event) {
        if (event.target.className === "remove") {
            event.target.parentNode.remove();
        }
    });
});
