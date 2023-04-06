import { inicioPage } from "./pages/inicio"
import { juegoPage } from "./pages/juego";
import { reglasPage } from "./pages/reglas";


class Router {
    routes: { [key: string]: () => void };
  
    constructor() {
      this.routes = {};
    }
  
    addRoute(path: string, handler: () => void) {
      this.routes[path] = handler;
    }
  
    navigate() {
      const path = window.location.pathname;
      const handler = this.routes[path];
      if (handler) {
        handler();
      } else {
        console.error(`No route found for ${path}`);
      }
    }
  }
  
  // Create a new router instance
  const router = new Router();
  
  // Define your routes
  router.addRoute('/', () => {
    inicioPage() // Render the home page
  });
  
  router.addRoute('/reglas', () => {
    reglasPage() // Render the reglas page
  });

  router.addRoute('/juego', () => {
    juegoPage() // Render the reglas page
  });
  
  // Handle navigation events
  window.addEventListener('popstate', () => {
    router.navigate();
  });
  
  // Call the navigate method to render the initial page
  router.navigate();

