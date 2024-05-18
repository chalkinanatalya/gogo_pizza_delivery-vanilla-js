import { getData } from "./getData.js";
import { renderPizzas } from "./renderPizzas.js";

export const renderToppings = async () => {
    const {en: enToppings, ru: ruToppings} = await getData('http://localhost:3000/api/toppings');
    const toppingsList = document.querySelector('.toppings__list');
    toppingsList.textContent = '';

    const items = enToppings.map( (enName) => {
        const displayName = enName.replace(/_/g, ' ');
        const item = document.createElement('li');
        item.classList.add('toppings__item');
        item.innerHTML = `
        <input class="toppings__checkbox" id="${enName}" type="checkbox" value="${enName}" name="topping">
        <label class="toppings__label" for="${enName}">${displayName.toUpperCase()}</label>
        `

        return item;
    });

    toppingsList.append(...items);

    const itemReset = document.createElement('li');
    itemReset.classList.add('toppings__item');
    const btnReset = document.createElement('button');
    btnReset.classList.add('toppings__reset');
    btnReset.textContent = 'RESET';
    btnReset.type = 'reset';

    itemReset.append(btnReset);

    // btnReset.addEventListener('click', () => {
    //     itemReset.remove();
    // })

    const toppingsForm = document.querySelector('.toppings__form');
    toppingsForm.addEventListener('change', (e) => {
        const formData = new FormData(toppingsForm);
        const checkedToppings = [];
        
        for(const [, value] of formData.entries()) {
            checkedToppings.push(value);
        }

        renderPizzas(checkedToppings);

        if(checkedToppings.length) {
            toppingsList.append(itemReset);
        } else {
            itemReset.remove();
        }
    });

    btnReset.addEventListener('click', () => {
        itemReset.remove();
        toppingsForm.reset();
    })

}