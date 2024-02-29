let unorderedTaskList = document.getElementById("taskList");
let tasks = document.getElementsByTagName("li");
let countId = 0
let taskList = []

let grabTask = (event) => {
    event.preventDefault()
    console.log("click")
    let inputValue = document.getElementById("input").value
    console.log(inputValue)
    countId += 1
    let taskItem = {
        "id": countId,
        "task": inputValue,
        "completed": false
    }
    taskList.push(taskItem)
    console.log(taskList)
    let listItem = document.createElement("li")
    console.log(listItem)
    listItem.textContent = inputValue
    unorderedTaskList.append(listItem)
    unorderedTaskList.addEventListener("click", (e) => {
        if (e.target.tagName == "LI") {
            e.target.classList.toggle("completed")
        }
    })
    
}
