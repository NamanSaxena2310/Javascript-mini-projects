const taskName = document.getElementById("task-value")
const date = document.getElementById("date-value")
const priority = document.getElementById("priority-value")
const submitButton = document.getElementById("submit")
const clearButton = document.getElementById("clear")
const tableBody = document.getElementById("task-table-body")
const editButton = document.getElementsByClassName("edit-button")
const deleteButton = document.getElementsByClassName("delete-button")


let count = localStorage.length

submitButton.addEventListener("click", () => {
  const taskValue = taskName.value
  const dateValue = date.value
  const priorityValue = priority.value

  if (taskValue && dateValue && priorityValue) {
    const taskData = {
      name: taskValue,
      date: dateValue,
      priority: priorityValue
    };
    const key =`task_${count}`
    localStorage.setItem(key, JSON.stringify(taskData))
    addRow(taskData, key);

    taskName.value = ""
    date.value = ""
    priority.value = ""

    count++
  } else {
    alert("Please fill all fields.")
  }
});


const addRow = (taskData, key) => {
  const row = document.createElement("tr")
  row.dataset.key = key

  const nameOfTask = document.createElement("td")
  const dateOfTask = document.createElement("td")
  const priorityOfTask = document.createElement("td")

  const editButton = document.createElement("button")
  editButton.className ="edit-button"
  editButton.innerText = "Edit"
  const deleteButton = document.createElement("button")
  
  deleteButton.innerText =" Delete"
  deleteButton.className ="delete-button"
  const editDeleteRow = document.createElement("td")
  editDeleteRow.append(editButton,deleteButton)

  deleteButton.addEventListener("click", () => {
    const taskKey = row.dataset.key; 
    localStorage.removeItem(taskKey); 
    row.remove(); 
  });

  editButton.addEventListener("click", ()=>{
    const taskKey = row.dataset.key
    const item = JSON.parse(localStorage.getItem(taskKey))
    console.log(item)
    taskName.value = item.name
    date.value = item.date
    priority.value = item.priority

  })
  

  nameOfTask.innerText = taskData.name
  dateOfTask.innerText = taskData.date
  priorityOfTask.innerText = taskData.priority

  row.appendChild(nameOfTask)
  row.appendChild(dateOfTask)
  row.appendChild(priorityOfTask)
  row.appendChild(editDeleteRow)

  tableBody.appendChild(row)

  
};

clearButton.addEventListener("click", ()=>{
  localStorage.clear()
  tableBody.innerText =""
})

window.addEventListener("load", ()=>{
  for(let i = 0 ; i < localStorage.length; i++){
    const key = localStorage.key(i)
    if(key.startsWith("task_")){
      const taskData = JSON.parse(localStorage.getItem(key))
      addRow(taskData,key)
    }
  }

 
  

}





)