import { main, footer } from "./data.js";
import { event } from "./event.js";
import { createFamily, createTodos, todoFooter } from "./dom.js";
import { getHash, handleURLChange } from "./route.js";
import Router from "./route.js";
import { deleteCompleted, filterByClass, updateClassById } from "./update.js";
import { uuid } from "./utils.js";

createFamily(main);
createFamily(footer);

// data storage
let fatteli = [];

const toggleAll = document.querySelector(".toggle-all-container");

function AllDone(arr) {
  const path = getHash();
  switch (path) {
    case "/":
      arr = arr
      break;
    case "/active":
      arr = filterByClass(arr, "");
      break;
    case "/completed":
      arr = filterByClass(arr, "completed");
      break;
    default:
      break;
  }
  if (arr.length === 0) {
    toggleAll.style.display = "none";
  } else {
    toggleAll.style.display = "block";
  }
}

AllDone(fatteli);

function appfooter() {
  if (fatteli.length != 0) {
    const container = document.querySelector(".todoapp");
    container.appendChild(todoFooter(filterByClass(fatteli, "")));
    toggleAll.style.display = "block";
  }

  const clear = document.querySelector(".clear-completed");
  if (clear) {
    event("click", clear, () => {
      fatteli = deleteCompleted(fatteli);
      maj();
      AllDone(fatteli);
    });
  }

  const links = document.querySelectorAll(".filters li a");
  links.forEach((link) => {
    event("click", link, () => {
      links.forEach((link) => link.classList.remove("selected"));
      link.classList.add("selected");
    });
  });

  EditContent();
}

// Router initialisation
const initRouter = () => {
  event("hashchange", window, handleURLChange);
  handleURLChange();
};
const ulElement = document.querySelector(".todo-list");
const routes = [
  {
    path: "/",
    component: () => {
      createTodos(fatteli, ulElement);
      callback();
    },
  },
  {
    path: "/active",
    component: () => {
      createTodos(filterByClass(fatteli, ""), ulElement);
      callback();
    },
  },
  {
    path: "/completed",
    component: () => {
      createTodos(filterByClass(fatteli, "completed"), ulElement);
      callback();
    },
  },
];

new Router(routes);

// update UI

function maj() {
  new Router(routes);
  const exist = document.querySelector(".footer");
  if (exist) {
    exist.innerHTML = "";
    exist.remove();
    appfooter();
  } else {
    appfooter();
  }
}

function callback() {
  CkeckList(fatteli);
  deleteList();
  AllDone(fatteli);
  EditContent();
}

// recup and add to array
const addToFatteli = (event) => {
  if (event.key === "Enter") {
    const input = event.target.value.trim();
    if (input.length > 1) {
      fatteli.unshift({ id: uuid(), content: input, class: "" });
      event.target.value = "";
      maj();
    } else {
      console.log("todo must contain at least 2 caracters !");
    }
  }
};

let newTodo = document.querySelector(".new-todo");

event("keydown", newTodo, addToFatteli);

initRouter();

const toggleAllBtn = document.querySelector(".toggle-all");

event("click", toggleAllBtn, () => {
  const newClass = toggleAllBtn.checked ? "completed" : "";
  fatteli = fatteli.map((todo) => ({ ...todo, class: newClass }));
  maj();
});

function CkeckList(arr) {
  document.querySelectorAll(".toggle").forEach((input) => {
    input.addEventListener("click", () => {
      const id = input.parentElement.parentElement
        .getAttribute("id")
        .replace("todo_", "");
      const isChecked = input.checked;

      if (isChecked) {
        updateClassById(id, "completed", arr);
      } else {
        updateClassById(id, "", arr);
        ("no more completed");
      }
      maj();
    });
  });
}

function deleteTodoById(id) {
  fatteli = fatteli.filter((todo) => todo.id !== id);
}

function deleteList() {
  const destroyButtons = document.querySelectorAll(".destroy");
  destroyButtons.forEach((button) => {
    event("click", button, () => {
      const id = button.id;
      deleteTodoById(id);
      maj();
    });
  });
}

function EditContent() {
  const todos = document.querySelectorAll(".todo-list li");

  todos.forEach((todo) => {
    const label = todo.querySelector("label");
    const originalContent = label.textContent.trim(); 
    label.style.userSelect = "none"
    let todoClass = false

    event("dblclick", todo, () => {
      const check = todo.querySelector(".toggle")
      if (check){
        check.remove()
      }
      if (todo.classList.contains("completed")){
        todo.classList.remove("completed")
        todoClass = true
      }
      label.contentEditable = true;
      label.focus();
    });

    event("keydown", label, (event) => {
      if (event.key === "Enter") {
        label.contentEditable = false;
        const id = todo.getAttribute("id").replace("todo_", "");
        const todoContent = label.textContent.trim();
        
        if (todoContent.length >= 2) {
          updateContent(id, todoContent);
        } else {
          label.textContent = originalContent;
        }
        label.blur();
      }
    });

    event("blur", label, () => {
      maj();
    });
  });
}


function updateContent(id, content) {
  fatteli.forEach((todo) => {
    if (todo.id === id) {
      todo.content = content;
    }
  });
}
