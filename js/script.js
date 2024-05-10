import { renderPizzas } from "./modules/renderPizzas.js";
import { toppingsToggle } from "./modules/toppingToggle.js";


const init = () => {
    toppingsToggle();
    renderPizzas();
}

init();