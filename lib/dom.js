// virtual dom

// creation of a function that create an html element and add it to the body or a given element

const createElement = (tag, attrs, parent, textContent = "") => {
  const newElement = document.createElement(tag);

  if (typeof attrs === "object" && attrs !== null) {
    for (const [attrName, attrValue] of Object.entries(attrs)) {
      if (attrName.startsWith("on")) {
        console.log(attrName, attrValue);
        const eventType = attrName.substring(2).toLocaleLowerCase();
        newElement.addEventListener(eventType, attrValue);
      }
      newElement.setAttribute(attrName, attrValue);
    }
  }

  const target = parent;

  if (target) target.appendChild(newElement);

  newElement.textContent = textContent;

  return newElement;
};

// creation of a function  that will generate all the elements according to the json
export const createFamily = (familyData, parent) => {
  const { tag, attrs, children, textContent } = familyData;
  const target = parent || document.body;
  const element = createElement(tag, attrs, target, textContent);

  if (children && Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === "object") {
        createFamily(child, element);
      }
    });
  }
  return element;
};

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

// add todo footer

export const todoFooter = (arr) => {
  const footer = {
    tag: "footer",
    attrs: {
      class: "footer",
    },
    children: [
      {
        tag: "span",
        attrs: {
          class: "todo-count",
        },
        textContent: `${arr.length} items left!`,
      },
      {
        tag: "ul",
        attrs: {
          class: "filters",
        },
        children: [
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attrs: {
                  href: "#/",
                  class: "selected",
                },
                textContent: "All",
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attrs: {
                  href: "#/active",
                },
                textContent: "Active",
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attrs: {
                  href: "#/completed",
                },
                textContent: "Completed",
              },
            ],
          },
        ],
      },
      {
        tag: "button",
        attrs: {
          class: "clear-completed",
        },
        textContent: "Clear completed",
      },
    ],
  };

  return createFamily(footer);
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
