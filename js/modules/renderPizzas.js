import { getData } from "./getData.js";

const btnReset = document.createElement('button');
btnReset.classList.add('pizza__reset-toppings');
btnReset.textContent = 'Reset filter';
btnReset.type = 'reset';
btnReset.setAttribute('form', 'toppings');


const createCard = (data) => {
    console.log('data: ', data);
    const card = document.createElement('article');
    card.classList.add('card', 'pizza__card');
    card.innerHTML = `
        <picture>
            <source srcset="${data.images[1]}" type="image/webp">
            <img class="card__image" src="${data.images[0]}" alt="${data.name.en}">
        </picture>
        <div class="card__content">
            <h3 class="card__title">${data.name.en.toUpperCase()}</h3>
            <p class="card__info">
                <span class="card__price">${data.price['30cm']}$</span>
                <span>/</span>
                <span class="card__weight">25 sm</span>
            </p>
            <button class="card__button" data-id="${data.id}">Choose</button>
        </div>
    `;

    return card;
}

export const renderPizzas = async (toppings) => {
    const pizzas = await getData(`http://localhost:3000/api/products${
        toppings ? `?toppings=${toppings}` : ''
    }`
    );

    const pizzaTitle = document.querySelector('.pizza__title');
    const pizzasList = document.querySelector('.pizza__list');
    pizzasList.textContent = '';

    if(pizzas.length) {
        pizzaTitle.textContent = 'Pizza';
        btnReset.remove();
        const items = pizzas.map( (data) => {
            const item = document.createElement('li');
            item.classList.add('pizza__item');
    
            const card = createCard(data);
            item.append(card);
    
            return item;
        });
        pizzasList.append(...items);
    } else {
        pizzaTitle.textContent = `Whoops, we don't have this pizza :(`;
        pizzaTitle.after(btnReset);

    }

};

btnReset.addEventListener('click', () => {
    renderPizzas();
    document.querySelector('.toppings__reset').remove();
})

