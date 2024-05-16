# Mini-Framework Documentation

Welcome to the documentation for our Mini-Framework! This document will guide you through understanding and effectively using our framework to build dynamic web applications.

## Features

Our Mini-Framework focuses on three core features:

    Abstracting the DOM: Provides utilities for abstracting DOM manipulation, making it easier to create and manage HTML elements dynamically.

    Routing System: Implements a simple routing system for navigating between different views/pages in a web application.

    State Management: Offers functionalities for managing the state of elements within the application, facilitating dynamic updates and interactions.

## Getting Started

To start using our Mini-Framework, follow these steps:

    Download or clone the framework from our repository.

    Include the framework script in your HTML file.

    Start building your application by leveraging the features provided by the framework.

## Creating an Element
The createElement() function is used to create a new HTML element with specified attributes and optionally text content, and then append it to the DOM.
### Syntax:

```javascript
createElement(tagName, attributes, textContent);
```
- tagName (string): The name of the HTML tag of the element to create (e.g., 'div', 'button', 'span', etc.).
- attributes (object): An object containing the attributes to set for the element (e.g., { class: 'container', id: 'myContainer' }).
- textContent (string): The text content to display inside the element, optional.
### Code Example
```javascript
const container = createElement('div', { class: 'container' });
document.body.appendChild(container);
```

## Creating an Event

To add an event listener to an element using our MiniFramework, you can use the event() function. This function takes three parameters:

- Event Type:
Specify the type of event you want to listen for (e.g., 'click', 'mouseover', 'keydown', etc.).

- Element:
Provide the element to which you want to attach the event listener.

- Callback Function:
Define the callback function to be executed when the specified event occurs.

### Syntax:

```javascript
event(eventType, element, callback);
```
- eventType (string): The type of event to listen for (e.g., 'click', 'mouseover', etc.).
- element (HTMLElement): The HTML element to which the event listener will be attached.
- callback (function): The function to be called when the event is triggered.

### Code Example

```javascript
// Création du bouton
const button = createElement('button', { id: 'myButton' }, 'Click Me');
container.appendChild(button);

// Ajout de l'événement au bouton
event('click', button, () => {
    console.log('Button clicked!');
});
```

Another way to create events in our framework is by adding event attributes with the "on" prefix to our HTML elements. Here's how you can do it:
### Code Example
```javascript

// Creating the button with the onclick event attribute
const button = createElement('button', { 
    id: 'myButton',
    onclick: () => {
        console.log('Button clicked!');
    }
}, 'Click Me');

container.appendChild(button);
```

In this example:

    We add an onclick attribute to the button during its creation.
    When the button is clicked, the function associated with onclick is executed, logging "Button clicked!" to the console.

This method provides a simple and concise alternative for adding events to our HTML elements in our framework.
## Nesting Elements

In our MiniFramework, you can nest multiple HTML elements within a parent element using the createFamily() function. This function allows you to create a hierarchical structure of HTML elements by specifying parent-child relationships.
### Syntax:

```javascript
createFamily(elementData);
```
- elementData (object): An object representing the parent element and its children. It contains the following properties:
    - tag (string): The HTML tag of the parent element (e.g., 'div', 'section', etc.).
    - attrs (object): An object containing the attributes to set for the parent element (e.g., { class: 'parent' }).
    - children (array): An array of child element objects, each representing a child element to be nested within the parent element.
    - textContent (string, optional): The text content of the parent element.

```javascript
const parent = createFamily({
    tag: "div",
    attrs: {
        class: "parent"
    },
    children: [
        {
            tag: "div"
            attrs: {
                class: "child1"
            }
        },
        {
            tag: "h1",
            attrs: {
                class: "child2"
            },
            textContent: "Hello world"
        }
    ]
})
```
### Adding Attributes to an Element

```javascript
const input = createElement('input', { type: 'text', placeholder: 'Enter your name' });
```

## Routing System

Our framework's routing system allows you to navigate between different views/pages in your web application. Here's how to use it:
Setting Up Routes

To define routes in your application, instantiate a Router object with an array of route objects. Each route object should contain the path and component properties:

```javascript

const routes = [
  {
    path: '/',
    component: () => {
      // Logic for rendering the home page
    }
  },
  {
    path: '/about',
    component: () => {
      // Logic for rendering the about page
    }
  },
  // Add more routes as needed
];

const router = new Router(routes);
```
### Navigating Between Routes

Navigation between routes can be achieved by changing the URL hash. The framework listens for hash changes and automatically loads the corresponding component:

```javascript

// Change the URL hash to navigate to a different route
window.location.hash = '/about';
```
### Example

Suppose we have a simple routing setup with routes for the home and about pages. Here's how we can define and use routes:

```javascript

const routes = [
  {
    path: '/',
    component: () => {
      // Logic for rendering the home page
      const homePage = createElement('div', {}, 'Home Page');
      document.body.appendChild(homePage);
    }
  },
  {
    path: '/about',
    component: () => {
      // Logic for rendering the about page
      const aboutPage = createElement('div', {}, 'About Page');
      document.body.appendChild(aboutPage);
    }
  },
];

const router = new Router(routes);

// Navigate to the about page
window.location.hash = '/about';
```
## Conclusion

Our Mini-Framework provides a simple yet powerful routing system to facilitate navigation in your web applications. By following the guidelines provided in this documentation, you can easily incorporate routing into your projects and create seamless user experiences. Happy coding!