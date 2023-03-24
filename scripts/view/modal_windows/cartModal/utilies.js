import { names } from "../constants.js";
import { closeBtn } from "../utilies.js";


export function createModal (title = '') {
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add(names.modalWrapper);
    modalWrapper.id = 'modal_cart'
    const modalTitle = document.createElement('h2')
    modalTitle.classList.add(names.modalTitle)
    modalTitle.textContent = `${title}`
    const closeButton = closeBtn();

    modalWrapper.append(modalTitle, closeButton)
    return modalWrapper;
}


export function createTable(){
    const table = document.createElement('table')
    // table.classList.add('');
    const tableHead = document.createElement('thead')
    const tr = document.createElement('tr')
    for (let key of names.cartHeadNames){
      const th = document.createElement('th');
      th.textContent = key;
      tr.append(th)
    }
    const cartContent = document.createElement('tbody')
    cartContent.classList.add(names.modalCartContent)

    tableHead.append(tr);
    table.append(tableHead, cartContent)
    return table
  }

export function cartItem ({cardName, price, id}) {
    const cartRow = document.createElement('tr')
    cartRow.classList.add(names.modalCartItem);
    cartRow.id = id + 1;
    for (const name of names.cartRowNames){
        const item = document.createElement('td');
        item.classList.add(name)
        if (item.className === names.cartRowNames[0]){
            item.textContent = `${cardName}`
        }
        if(item.className === names.cartRowNames[1]){
            item.textContent = `${price} р.`
        }
        if(item.className === names.cartRowNames[2]){
            item.innerHTML = `<button data-cart-del=${id} id='cart_delete'>X</button>`;
        }
        cartRow.append(item)
    }


    return cartRow
}

export function emptyCart () {
    const p = document.createElement('p');
    p.textContent = 'Ваша корзина пуста'

    return p
}