import { cardClassName as clName } from './constants.js';

const {itemKey, imgKey, wrapperTextKey, priceKey, deliveryKey, nameKey, aKey, rateKey, btnKey} = clName;

export function createItem ({img, cardName, price, cardRate, id, deliveryMonth, deliveryDate}) {

    const item = createEl('div',{class: itemKey, id: `${id}`});
    
    const imgEl = createEl('img',{class: imgKey, src: `${img}`, 'data-img-id' : id, id : 'card_img'});
    item.append(imgEl);

    const wrapperText = createEl('div',{class: wrapperTextKey});
    item.append(wrapperText);

    const priceEl = createEl('div',{class: priceKey}, `${price} р.`);
    wrapperText.append(priceEl);

    const deliveryEl = createEl('div',{class: deliveryKey}, `Delivery: ${deliveryMonth} ${deliveryDate}`);
    wrapperText.append(deliveryEl);

    const name = createEl('div',{class: nameKey}, `${cardName}`);
    wrapperText.append(name);

    const a = createEl('a',{class: aKey, style: 'font-size: 14px;'});
    wrapperText.append(a);

    const starIcon = createEl('i',{class: 'fa-solid fa-star', style: 'margin-right: 5px;'});
    a.append(starIcon);

    const rate = createEl('span',{class: rateKey}, `${cardRate}`);
    a.append(rate);

    const button = createEl('button',{class: btnKey, id : 'toCartBtn'}, 'В корзину');
    button.setAttribute('data-row-btn', `${id}`)
    wrapperText.append(button);

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
