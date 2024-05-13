import { createFamily } from "../core/dom.js"

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