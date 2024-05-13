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