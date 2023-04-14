// KONSTANTALAR
const input = document.querySelector("#inputtask");
const list = document.querySelector(".todolist");
const addBtn = document.querySelector("#addbutton");
const cleanBtn = document.querySelector(".clear");

// EVENTLAR
addBtn.addEventListener("click", () => {
  if (!input.value) {
    alert("Avval biron narsa yozing!");
  } else {
    const li = addTask(input.value);
    list.appendChild(li);
    input.value = "";
    input.focus();
    cleanBtn.classList.remove("d-none");
  }
});

cleanBtn.addEventListener("click", () => {
  list.innerHTML = "";
  cleanBtn.classList.add("d-none");
});

// FUNKSIYALAR
function addTask(value) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  span.textContent = value;
  editBtn.textContent = "Edit";
  deleteBtn.textContent = "Delete";

  li.append(span, deleteBtn, editBtn);

  editBtn.addEventListener("click", () => {
    span.contentEditable = true;
    span.focus();
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  return li;
}
