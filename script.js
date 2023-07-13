const upper = document.querySelector(".upper");
const task = document.querySelector(".task");
const btn = document.getElementById("btn");
const noTask = document.querySelector("#noTask");


btn.addEventListener("click", addTask);



function addTask() {
    const text = document.querySelector("#text");
    const txt = text.value;

    if (txt == "") {
        alert("No task added");
    }

    else {
        noTask.style.display = "none";

        // creating fragment to append multiple child
        const fragment = document.createDocumentFragment();

        const div = document.createElement("div");
        div.className = "final-div";

        const p = document.createElement("p");
        p.textContent = txt;

        // creating delete button
        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Delete";
        closeBtn.className = "closeBtn";

        // Add an event listener to the delete button
        closeBtn.addEventListener("click", function () {
            // Remove the task from the parent element
            task.removeChild(div);
            // If there are no more tasks, show the noTask message
            if (task.childElementCount === 1) {
                noTask.style.display = "block";
            }



        });



        fragment.appendChild(p);
        fragment.appendChild(closeBtn);
        div.appendChild(fragment);
        task.appendChild(div);

        text.value = "";

    }

    }





