import { CartModal } from "./cartModal/index.js"
import { ModalWindowUser } from "./userModal/index.js";

export class ModalWindowsView {
  constructor({onRemoveCartRow, onCloseModal, onCreateUser}){
    this.cart = new CartModal({onRemoveCartRow, onCloseModal});
    this.user = new ModalWindowUser({onCloseModal, onCreateUser})
  }

  overlay = () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay')
    document.body.append(overlay);
    return overlay;
  }

  addCartContent = (cards) => {
    console.log('main')
    this.cart.createCartContent(cards)
  }

  removeCart = (cardId) => {
    this.cart.removeCartRow(cardId)
  }
  
  openUser = () => {
    this.user.createModalUser()
  }

  openItem = () => {
    this.item.openCartModal()
  }

}
