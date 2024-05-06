
// data json

export const main = {
  tag: "section",
  attrs: {
    class: "todoapp",
  },
  children: [
    {
      tag: "header",
      attrs: {
        class: "header",
      },
      children: [
        {
          tag: "h1",
          textContent: "todos",
        },
        {
          tag: "input",
          attrs: {
            class: "new-todo",
            placeholder: "What needs to be done?",
            autofocus: true,
          },
        },
      ],
    },
    {
      tag: "main",
      attrs: {
        class: "main",
      },
      children: [
        {
          tag: "div",
          attrs: {
            class: "toggle-all-container",
          },
          children: [
            {
              tag: "input",
              attrs: {
                class: "toggle-all",
                type: "checkbox",
              },
            },
            {
              tag: "label",
              attrs: {
                class: "toggle-all-label",
                for: "toggle-all",
              },
              textContent: "Mark all as complete",
            },
          ],
        },
        {
          tag: "ul",
          attrs: {
            class: "todo-list",
          },
        },
      ],
    },
   
  ],
};

export const footer = {
  tag: "footer",
  attrs: {
    class: "info",
  },
  children: [
    {
      tag: "p",
      textContent: "Double-click to edit a todo",
    },
    {
      tag: "p",
      textContent: "Created by ",
      children: [
        {
          tag: "a",
          attrs: {
            href: "http://twitter.com/oscargodson",
          },
          textContent: "Oscar Godson",
        },
      ],
    },
    {
      tag: "p",
      textContent: "Refactored by ",
      children: [
        {
          tag: "a",
          attrs: {
            href: "https://github.com/cburgmer",
          },
          textContent: "Christoph Burgmer",
        },
      ],
    },
    {
      tag: "p",
      textContent: "Maintenanced by the TodoMVC team",
    },
    {
      tag: "p",
      textContent: "Part of ",
      children: [
        {
          tag: "a",
          attrs: {
            href: "http://todomvc.com",
          },
          textContent: "TodoMVC",
        },
      ],
    },
  ],
};

