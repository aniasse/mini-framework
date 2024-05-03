import { main, footer } from "./data.js";
import { event } from "./event.js";
import { createFamily, createTodo, createTodos } from "./dom.js";
import { handleURLChange } from "./route.js";
import Router from "./route.js";
import { filterByClass } from "./update.js";
import { uuid } from "./utils.js";

createFamily(main);
createFamily(footer);

// data for test
let fatteli = [
  { id: uuid(), content: "hello", class: "active" },
  { id: uuid(), content: "nanga def", class: "completed" },
  { id: uuid(), content: "bonjour", class: "active" },
  { id: uuid(), content: "hola", class: "completed" },
];

// Router initialisation
const initRouter = () => {
  event("hashchange", window, handleURLChange);
  handleURLChange();
};
const ulElement = document.querySelector('.todo-list');
const routes = [
  { path: '/', component: () => createTodos(fatteli, ulElement) }, // Change here
  { path: '/active', component: () => createTodos(filterByClass(fatteli, "active"), ulElement) }, // Change here
  { path: '/completed', component: () => createTodos(filterByClass(fatteli, "completed"), ulElement) } // Change here
];

new Router(routes);

initRouter();
