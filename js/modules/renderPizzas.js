import { getData } from "./getData.js";

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
            <h3 class="card__title">${data.name.en}</h3>
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

export const renderPizzas = async () => {
    const pizzas = await getData('http://localhost:3000/api/products');
    const pizzasList = document.querySelector('.pizza__list');
    pizzasList.textContent = '';

    const items = pizzas.map( (data) => {
        const item = document.createElement('li');
        item.classList.add('pizza__item');
        // item.textContent = data.name.en;

        const card = createCard(data);
        item.append(card);

        return item;
    });

    pizzasList.append(...items);
};