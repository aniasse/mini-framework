import { main, footer } from "./data.js";
import { event } from "./event.js";
import { createFamily, createTodo, createTodos, todoFooter } from "./dom.js";
import { handleURLChange } from "./route.js";
import Router from "./route.js";
import { deleteCompleted, filterByClass, updateClass } from "./update.js";
import { uuid } from "./utils.js";

createFamily(main);
createFamily(footer);

// data storage
let fatteli = [];

const toggleAll = document.querySelector(".toggle-all-container");

if (fatteli.length === 0) {
  toggleAll.style.display = "none";
}

function appfooter() {
  if (fatteli.length != 0) {
    const container = document.querySelector(".todoapp");
    container.appendChild(todoFooter(fatteli));
    toggleAll.style.display = "block";
  }

  const clear = document.querySelector(".clear-completed");
  console.log(clear);

  event("click", clear, () => {
    fatteli = deleteCompleted(fatteli);
    maj();
  });

  const links = document.querySelectorAll(".filters li a");
  links.forEach(link => {
    event("click", link, () => {
      links.forEach(link => link.classList.remove("selected"));
      link.classList.add("selected");
    });
  });
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
    component: () => createTodos(fatteli, ulElement),
  },
  {
    path: "/active",
    component: () => createTodos(filterByClass(fatteli, "active"), ulElement),
  },
  {
    path: "/completed",
    component: () =>
      createTodos(filterByClass(fatteli, "completed"), ulElement),
  },
];

new Router(routes);

// change classes

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

// recup and add to array
const addToFatteli = (event) => {
  if (event.key === "Enter") {
    const input = event.target.value.trim();
    if (input.length > 1) {
      fatteli.unshift({ id: uuid(), content: input, class: "active" });
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
  const newClass = toggleAllBtn.checked ? "completed" : "active";
  fatteli = fatteli.map((todo) => ({ ...todo, class: newClass }));
  maj();
});
