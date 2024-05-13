import { renderPizzas } from "./modules/renderPizzas.js";
import { renderToppings } from "./modules/renderToppings.js";
import { toppingsToggle } from "./modules/toppingToggle.js";


const init = () => {
    toppingsToggle();
    renderToppings();
    renderPizzas();
}

init();