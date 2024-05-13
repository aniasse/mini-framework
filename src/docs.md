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

## Code Examples
### Creating an Element

```javascript
const container = MiniFramework.createElement('div', { class: 'container' });
document.body.appendChild(container);
```

### Creating an Event

```javascript
// Création du bouton
const button = MiniFramework.createElement('button', { id: 'myButton' }, 'Click Me');
container.appendChild(button);

// Ajout de l'événement au bouton
MiniFramework.event('click', button, () => {
    console.log('Button clicked!');
});
```
### Nesting Elements
```javascript
const parent = MiniFramework.createFamily({
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
const input = MiniFramework.createElement('input', { type: 'text', placeholder: 'Enter your name' });
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
      const homePage = MiniFramework.createElement('div', {}, 'Home Page');
      document.body.appendChild(homePage);
    }
  },
  {
    path: '/about',
    component: () => {
      // Logic for rendering the about page
      const aboutPage = MiniFramework.createElement('div', {}, 'About Page');
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