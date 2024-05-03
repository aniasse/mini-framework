// Routing system

export default class Router {
  constructor(routes) {
    this.routes = routes;
    window.addEventListener("hashchange", () => this.loadPage());
    this.containerDiv = document.querySelector('.todo-list');
    console.log(this.containerDiv, "the container selected");
    this.loadPage();
  }

  async loadPage() {
    const path = getHash();
    const route = this.routes.find((r) => r.path === path);
    if (!route) {
      return;
    }
    this.containerDiv.innerHTML = "";
    const component = await route.component(); 
    this.containerDiv.appendChild(component);
  }
}

// url update handle
export const handleURLChange = () => {
  const currentHash = getHash();
  if (currentHash === "") {
    console.log("this is the home page maybe!");
    return;
  }
  console.log("current hash: ", currentHash);
};

// Route Extraction
function getHash() {
  return window.location.hash.substring(1);
}
