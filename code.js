const form = document.querySelector("form");
const btnNewTask = document.querySelector("button.newTask");
const ul = document.querySelector("ul");
const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const inputFilter = document.querySelector("input.filter");
const tasks = [];

const addingNewTask = (e) => {
    e.preventDefault();
    if (!input.value) {
        return alert("wpisz zadanie");
    };

    const task = input.value;
    tasks[tasks.length] = task;
    ul.textContent = "";
    tasks.forEach((task, index) => {
        const newTask = document.createElement("li");
        newTask.innerHTML = `${task} <button>usuń</button>`;
        ul.appendChild(newTask)
        newTask.querySelector("button").addEventListener("click", (index) => {
            newTask.remove();
            tasks.splice(index, 1);
            h1.textContent = "Łącznie zadań:" + tasks.length;
        })
    });
    input.value = "";
    h1.textContent = "Łącznie zadań:" + tasks.length;

}
form.addEventListener("submit", addingNewTask);
const filteringTasks = () => {
    if (inputFilter.value == "") {
        ul.textContent = "";
        tasks.forEach((task, index) => {
            const newTask = document.createElement("li");
            newTask.innerHTML = `${task} <button>usuń</button>`;
            ul.appendChild(newTask)
            newTask.querySelector("button").addEventListener("click", (index) => {
                newTask.remove();
                tasks.splice(index, 1);
                h1.textContent = "Łącznie zadań:" + tasks.length;
            })
        });
    } else {

        ul.textContent = "";
        const filteredTasks = tasks.filter(task => {
            return task.includes(inputFilter.value);
        })
        filteredTasks.forEach(task => {
            const newTask = document.createElement("li");
            newTask.innerHTML = task;
            ul.appendChild(newTask)
        })
    }
}
inputFilter.addEventListener("input", filteringTasks)