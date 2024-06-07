export const renderModalPizza = ({id, images, name, price, toppings}) => {
    const modalPizzaMain = document.querySelector('.modal-pizza__main');
    modalPizzaMain.textContent = '';

    let size = Object.keys(price)[0];

    const picture = document.createElement('picture');
    const source = document.createElement('source');
    source.srcset = images[1];
    source.type = 'image/webp';

    const img = document.createElement('img');
    img.classList.add('modal-pizza__img');
    img.src = images[0];
    img.alt = name.en;
    picture.append(source, img);
    
    const title = document.createElement('h2');
    title.classList.add('modal-pizza__title');
    title.textContent = name.en[0].toUpperCase() + name.en.slice(1).toLowerCase();

    const toppingsElement = document.createElement('p');
    toppingsElement.classList.add('modal-pizza__toppings');
    toppingsElement.textContent = toppings.en[0].toUpperCase() + toppings.en.slice(1).toLowerCase();

    const priceSizeInfo = document.createElement('p');
    priceSizeInfo.classList.add('modal-pizza__info');

    const priceElement = document.createElement('span');
    priceElement.classList.add('modal-pizza__price');
    const slashElement = document.createElement('span');
    slashElement.textContent = '/';
    const sizeElement = document.createElement('span');
    sizeElement.classList.add('modal-pizza__size');
    priceSizeInfo.append(priceElement, slashElement, sizeElement);

    const form = document.createElement('form');
    form.classList.add('modal-pizza__form');

    const groupFieldset = document.createElement('div');
    groupFieldset.classList.add('modal-pizza__group-fieldset');

    const fieldsetCrust = document.createElement('fieldset');
    fieldsetCrust.classList.add('modal-pizza__fieldset');

    const fieldsetSize = document.createElement('fieldset');
    fieldsetSize.classList.add('modal-pizza__fieldset');

    groupFieldset.append(fieldsetCrust, fieldsetSize);
    
    const addToCartBtn = document.createElement('button');
    
    form.append(groupFieldset, addToCartBtn)
    modalPizzaMain.append(picture, title, toppingsElement, priceSizeInfo, form);
}

{/* <div class="modal__main modal-pizza__main">
<form class="modal-pizza__form">
    <div class="modal-pizza__group-fieldset">
        <fieldset class="modal-pizza__fieldset">
            <input class="modal-pizza__radio" id="thick" type="radio" value="thick" name="crust">
            <label class="modal-pizza__label" for="thick">Deep dish crust</label>

            <input class="modal-pizza__radio" id="thin" type="radio" value="thin" name="crust" checked>
            <label class="modal-pizza__label" for="thin">Thin crust</label>
        </fieldset>

        <fieldset class="modal-pizza__fieldset">
            <input class="modal-pizza__radio" id="25cm" type="radio" value="25cm" name="size checked">
            <label class="modal-pizza__label" for="25cm">25 sm</label>

            <input class="modal-pizza__radio" id="30cm" type="radio" value="30cm" name="size">
            <label class="modal-pizza__label" for="30cm">30 sm</label>

            <input class="modal-pizza__radio" id="35cm" type="radio" value="35cm" name="size">
            <label class="modal-pizza__label" for="35cm">35 sm</label>
        </fieldset>
    </div>
    <button class="modal-pizza__add-cart">To cart</button>
</form>
<button class="modal__close">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14.8333" y="4" width="0.851136" height="15.3204" transform="rotate(45 14.8333 4)" fill="#C1AB91"/>
        <rect x="4" y="4.60184" width="0.851136" height="15.3204" transform="rotate(-45 4 4.60184)" fill="#C1AB91"/>
        </svg>
</button>
</div> */}