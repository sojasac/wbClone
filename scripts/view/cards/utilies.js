import { cardClassName as clName } from './constants.js';

const {itemKey, imgKey, wrapperTextKey, priceKey, deliveryKey, nameKey, aKey, rateKey, btnKey} = clName;

export function createItem ({img, cardName, price, cardRate, id, deliveryMonth, deliveryDate, cardReviews, cardNameDesc}) {

    const spanPrice = document.createElement('span');
    const spanName = document.createElement('span');
    const spanDelivery = document.createElement('span');

    const item = createEl('div',{class: itemKey, id: `${id}`});
    
    const imgEl = createEl('img',{class: imgKey, src: `${img}`, 'data-img-id' : id, id : 'card_img'});
    item.append(imgEl);

    const wrapperText = createEl('div',{class: wrapperTextKey});
    item.append(wrapperText);

    const priceEl = createEl('div',{class: priceKey});
    spanPrice.innerHTML = `${price} p.`
    priceEl.append(spanPrice);
    wrapperText.append(priceEl);

    const deliveryEl = createEl('div',{class: deliveryKey});
    spanDelivery.innerHTML = `<i class="fa-solid fa-truck-fast"></i> ${deliveryMonth} ${deliveryDate} - ${deliveryMonth} ${deliveryDate + 3}`
    deliveryEl.append(spanDelivery);
    wrapperText.append(deliveryEl);

    const name = createEl('div',{class: nameKey});
    spanName.innerHTML = `${cardName} &#183; ${cardNameDesc}`
    name.append(spanName);
    wrapperText.append(name);

    const reviews = createEl('div',{class: aKey, style: 'font-size: 14px;'});
    reviews.innerHTML = `<i class="fa-solid fa-star" style="margin-right: 5px;"></i>
    <span class=${rateKey}>${cardRate} &#183; ${cardReviews} Reviews</span>`
    wrapperText.append(reviews);
    

    const button = createEl('button',{class: btnKey, id : 'toCartBtn'}, 'В корзину');
    button.setAttribute('data-row-btn', `${id}`)
    item.append(button);

    document.getElementById('show_more').style.visibility = 'visible';
    document.getElementById('cards_wrapper').style = 'height: auto;'

    return item;
}

export function createEmptyItem(){
    const span = createEl('span', {class : 's-cards__wrapper-empty__button', id: 'back'}, 'назад')
    const emptyItem = createEl('div',{class: 's-cards__wrapper-empty'}, `Запрашиваемые вами товары не были найдены! Повторите поиск или вернитесь ` );
    emptyItem.append(span)
    document.getElementById('show_more').style.visibility = 'hidden';
    document.getElementById('cards_wrapper').style = "height: 100vh; display: flex; justify-content: center; text-align: center;"
    return emptyItem
}

// Функции создания элементов
//_________________________________________

export function createEl(tag, elProps, text = ''){
    const el = document.createElement(tag)
    el.textContent = text
    for (const key in elProps) {
        el.setAttribute(key, elProps[key]);
    }
    return el;
}
