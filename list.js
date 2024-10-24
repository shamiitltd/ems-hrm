let myStorageContEl = document.getElementById("myStorageCont");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");

function getParsedList() {
  let toFormOfString = localStorage.getItem("storeItems");
  let myParsedItems = JSON.parse(toFormOfString);
  if (myParsedItems === null) {
    return [];
  } else {
    return myParsedItems;
  }
}

let myList = getParsedList();

function toSaveList() {
  let storeItems = JSON.stringify(myList);
  localStorage.setItem("storeItems", storeItems);
}

function addTask() {
  // using for adding multiple task...............................

  if (userInputEl.value === "") {
    errorMsgEl.textContent = "*Please enter a valid input!!";
  } else {
    errorMsgEl.textContent = "";
    let newmyList = {
      task: userInputEl.value,
      id: Math.ceil(new Date() * Math.random()),
      isChecked: false,
    };
    myList.push(newmyList);
    dynamicAdd(newmyList);
    userInputEl.value = "";
  }
}

function onCheckboxClick(checkboxId, taskId, mainId) {
  // using for after clicking on checkbox my tasks are get line-through decoration................

  let myCheck = document.getElementById(checkboxId);
  let mytask = document.getElementById(taskId);

  if (myCheck.checked === true) {
    mytask.style.textDecoration = "line-through";
  } else {
    mytask.style.textDecoration = "none";
  }

  let indexOfItem = myList.findIndex((each) => {
    if (each.id === mainId) {
      return true;
    } else {
      return false;
    }
  });

  for (let each of myList) {
    if (each.id === mainId) {
      if (each.isChecked === false) {
        each.isChecked = true;
      } else {
        each.isChecked = false;
      }
    }
  }
}

function onClickDelete(listId) {
  // Using for deleting tasks both from UI & Local storage after clicking delete icon.................
  let listed = document.getElementById(listId);
  myStorageContEl.removeChild(listed);

  let deleteTodoIndex = myList.findIndex(function (each) {
    let eachTodoId = "todo" + each.id;
    if (eachTodoId === listId) {
      return false;
    } else {
      return true;
    }
  });

  myList.splice(deleteTodoIndex, 1);
}

function dynamicAdd(todo) {
  let listId = "list" + todo.id;
  let checkboxId = "checkbox" + todo.id;
  let taskId = "task" + todo.id;

  let listEl = document.createElement("li");
  myStorageContEl.appendChild(listEl);
  listEl.classList.add("my-list-cont");
  listEl.id = listId;

  let checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.id = checkboxId;
  listEl.appendChild(checkboxEl);
  checkboxEl.onclick = function () {
    onCheckboxClick(checkboxId, taskId, todo.id);
  };

  let labelEl = document.createElement("label");
  listEl.appendChild(labelEl);
  labelEl.classList.add("my-label-cont");
  labelEl.htmlFor = checkboxId;

  let taskEl = document.createElement("p");
  taskEl.textContent = todo.task;
  taskEl.id = taskId;
  if (todo.isChecked === true) {
    taskEl.style.textDecoration = "line-through";
  }
  labelEl.appendChild(taskEl);

  let btnIconEl = document.createElement("button");
  labelEl.appendChild(btnIconEl);
  btnIconEl.style.border = "none";
  btnIconEl.style.outline = "none";
  btnIconEl.style.backgroundColor = "black";
  btnIconEl.onclick = function () {
    onClickDelete(listId);
  };

  let iconEl = document.createElement("i");
  btnIconEl.appendChild(iconEl);
  iconEl.classList.add("fa-solid", "fa-trash");
  iconEl.style.color = "red";
}

for (each of myList) {
  dynamicAdd(each);
}
