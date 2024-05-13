import { createFamily } from "../core/dom.js";


// creation of a todo
export const createTodo = (id, todoContent, liClass) => {
    const todo = {
      tag: "li",
      attrs: {
        id: `todo_${id}`,
        class: liClass,
      },
      children: [
        {
          tag: "div",
          attrs: { class: "view" },
          children: [
            {
              tag: "input",
              attrs: {
                type: "checkbox",
                class: "toggle",
                id: id,
              },
            },
            {
              tag: "label",
              attrs: { contenteditable: false },
              textContent: todoContent,
            },
            {
              tag: "button",
              attrs: {
                class: "destroy",
                id: id,
              },
            },
          ],
        },
      ],
    };
  
    return createFamily(todo);
  };



  // display of todos
export const createTodos = (todos, ulElement) => {
    todos.forEach((todoItem) => {
      const todoElement = createTodo(
        todoItem.id,
        todoItem.content,
        todoItem.class
      );
      ulElement.appendChild(todoElement);
    });
  
    checkCompletedTasks(todos);
  };
  
  function checkCompletedTasks(todos) {
    todos.forEach((todo) => {
      const input = document.getElementById(todo.id);
      if (input && todo.class === "completed") {
        input.checked = true;
      }
    });
  }