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
    const cartContent = document.createElement('tbody');
    cartContent.classList.add(names.modalCartContent);

    const cartFooter = document.createElement('tfoot');
    cartFooter.classList.add(names.cartFooter);

    tableHead.append(tr);
    table.append(tableHead, cartContent, cartFooter)
    return table
  }

export function cartItem ({cardName, price, id, cardCount}) {
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
            item.textContent = `${cardCount}`
        }
        if(item.className === names.cartRowNames[2]){
            item.textContent = `${parseInt(price) * cardCount} р.`
        }
        if(item.className === names.cartRowNames[3]){
            item.innerHTML = `<button data-cart-del=${id} id='cart_delete'>X</button>`;
        }
        cartRow.append(item)
    }


    return cartRow
}

export function emptyCart () {
    const tr = document.createElement('tr');
    tr.style.textAlign = 'center'
    tr.textContent = 'Ваша корзина пуста'

    return tr
}

export function cartFooterContent (totalProducts, totalPrice) {
    const trFootTotal = document.createElement('tr');
    // trFootTotal.textContent = 'Итого:'
    trFootTotal.innerHTML = `
        <td>Колиество товаров: ${totalProducts}</td>
        <td>Общая сумма: ${totalPrice} p.</td>
        <td><button id="deleteAllCart_btn">Удалить все товары</button></td>
    `
    return trFootTotal

}