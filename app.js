// Select DOM
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const list = document.querySelector(".todo-list");

console.log(submit);
console.log(input);
console.log(list);

// Event Listener
submit.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  // Prevent refreshing after submitting
  event.preventDefault();
  // Create the div of item wrapper
  const wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("item-wrapper");
  // Create todo item
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");
  todoItem.innerText = input.value;
  wrapperDiv.appendChild(todoItem);
  // Create Completed Button
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-button");
  completeButton.innerHTML = `<i class="fas fa-check"></i>`;
  wrapperDiv.appendChild(completeButton);
  // Create Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
  wrapperDiv.appendChild(deleteButton);

  // Get rid of the input value
  input.value = "";

  // Add the whole div to the list
  list.appendChild(wrapperDiv);
}
