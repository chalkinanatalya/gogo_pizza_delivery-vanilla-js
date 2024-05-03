const toppingsToggle = () => {
    const toppingsButton = document.querySelector('.toppings__button');
    const toppingsList = document.querySelector('.toppings__list');

    toppingsButton.addEventListener('click', () => {
        if(!toppingsList.classList.contains('toppings__list_show')) {
            toppingsList.classList.add('toppings__list_show');
            toppingsButton.classList.add('toppings__button_active');

            toppingsList.style.maxHeight = toppingsList.scrollHeight + 'px';
        } else {
            toppingsButton.classList.remove('toppings__button_active');
            toppingsList.style.maxHeight = null;


            setTimeout(() => {
                toppingsList.classList.remove('toppings__list_show');
            }, 300);
        }
    });
};

const getPizzas = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/products');
        if(!response.ok) {
            throw new Error('fetching server problems')
        }
        return  await response.json();
    } catch (error) {
        console.error(`Error fetching pizzas: ${error}`);
    }

}

const createCard = (data) => {
    console.log('data: ', data);
    const card = document.createElement('article');
    card.classList.add('card');
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
                <span class="card__weight">25 cm</span>
            </p>
            <button class="card__button">Choose</button>
        </div>
    `;

    return card;
}

const renderPizzas = async () => {
    const pizzas = await getPizzas();
    const pizzasList = document.querySelector('.pizza__list');
    pizzasList.textContent = '';

    const items = pizzas.map( data => {
        const item = document.createElement('li');
        item.classList.add('pizza__item');
        item.textContent = data.name.en;

        const card = createCard(data);
        item.append(card);

        return item;
    });

    pizzasList.append(...items);
};

const init = () => {
    toppingsToggle();
    renderPizzas();
}

init();