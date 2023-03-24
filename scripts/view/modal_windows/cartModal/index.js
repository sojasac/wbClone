import { createModal } from "./utilies.js";
import { cartItem } from "./utilies.js";
import { createTable } from "./utilies.js";
import { emptyCart } from "./utilies.js";



export class CartModal {
    constructor({onRemoveCartRow, onCloseModal}){
        this.modal = createModal('Корзина');
        this.list = createTable()
        this.modal.append(this.list)
        this.modal.addEventListener('click', ({target}) => {
            if(target.id === 'cart_delete'){
                console.log(onRemoveCartRow)
                onRemoveCartRow(target.dataset.cartDel)
            }
            if (target.id === 'close_modal'){
                onCloseModal()
            }
        })      
    }

    createCartContent = (cards) => {
        this.list.tBodies[0].innerHTML = '';
        if (cards.length > 0) {
            for (const card of cards) {
            const item = cartItem(card);
            this.list.tBodies[0].append(item);
        }
        }
        else {
            const epmtyP = emptyCart();
            this.list.tBodies[0].innerHTML = '';
            this.list.tBodies[0].append(epmtyP);
        }
        document.body.append(this.modal)
    }

    removeCartRow = (cardId) => {
        const row = document.getElementById(cardId + 1);
        console.log(row)
        if(row){
            row.remove()
        }
    }


}