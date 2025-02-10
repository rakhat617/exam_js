// let task = prompt("Write your planned task")
// let toDoListData = []
let user_input = document.querySelector("#user_input")
let button = document.querySelector("#btn")
let tdl = document.querySelector("#to_do_list")
let bin = document.querySelector("#bin")

// while (task != "done"){
//     task = prompt("Write your planned task")
//     if (task != "" || task != "done"){
//         toDoListData.push(task)
//         console.log(task)
//     }
// }

function add_task() {
    let task = user_input.value
    if (task != ""){
        let new_task = document.createElement("li")
        new_task.textContent = task
        tdl.appendChild(new_task)
        new_task.addEventListener("click", function () {
            localStorage.setItem("Latest deleted task", new_task.textContent)
            tdl.removeChild(new_task)
            bin.textContent = `Latest deleted task: ${localStorage.getItem("Latest deleted task")}`
        })
    }
}

button.addEventListener("click", add_task)


