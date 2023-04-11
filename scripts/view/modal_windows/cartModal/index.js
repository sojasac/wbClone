import { createModal, 
    cartItem, 
    createTable, 
    emptyCart, 
    cartFooterContent 
} from "./utilies.js";


export class CartModal {
    constructor({onRemoveCartRow, onCloseModal, onRemoveCart}){
        this.modal = createModal('Корзина');
        this.list = createTable();
        this.modal.append(this.list)
        this.modal.addEventListener('click', ({target}) => {
            if(target.id === 'cart_delete'){
                onRemoveCartRow(target.dataset.cartDel)
            }
            if(target.id === 'deleteAllCart_btn'){
                onRemoveCart()
            }
            
            if (target.id === 'close_modal'){
                onCloseModal()
            }
        })      
    }

    createCartContent = (cards) => {
        this.list.tBodies[0].innerHTML = '';
        let totalPrice = 0;
        let count = 0;
        if (cards.length > 0) {
            for (const card of cards) {
            const item = cartItem(card);
            this.list.tBodies[0].append(item);
            count += card.cardCount
            let price = parseInt(card.price) * card.cardCount
            totalPrice += price
        }
        }
        else {
            const epmtyP = emptyCart();
            this.list.tBodies[0].innerHTML = '';
            this.list.tBodies[0].append(epmtyP);
        }
        const footer = cartFooterContent(count,totalPrice)
        this.list.tFoot.innerHTML = ``
        this.list.tFoot.append(footer)
        document.body.append(this.modal)
    }



}