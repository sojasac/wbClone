import {createItem, createEmptyItem} from './utilies.js';
import {wrapperItems} from './constants.js';

export class CardsView {
    constructor({ onToCartPurchase}){
    this.container = wrapperItems
    this.item = createItem;
    this.toCart = onToCartPurchase;
    }
    createCards = (cards) => {
        this.container.innerHTML = '';
        if (cards.length > 0) {
            for (const card of cards) {
                const item = this.item(card);
                this.container.append(item);
                item.addEventListener('click', ({target}) => {
                    if(target.id === 'toCartBtn'){
                        this.toCart(target.dataset.rowBtn);
                        target.textContent = 'В корзине';
                        target.classList.add('__inCart')
                    }
                })
            }
        }else{
            this.container.append(createEmptyItem());
        }
    }

    
}
