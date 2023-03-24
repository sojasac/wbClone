import { SliderView } from "./slider/index.js";
import { CardsView } from "./cards/index.js";
import { UserAuthorization } from "./modal_windows/userModal/userAuthorization/index.js"; //todo user
import { ModalWindowsView } from "./modal_windows/index.js";
import { Search } from "./search/index.js";
import { searchForm } from "./search/constants.js";

import { elements } from "../constants.js";

export class WBView {
  constructor({onToCartPurchase, onSearch, userName, onBackToCards, onCart, onRemoveCartRow, onCreateUser}){
    this.instans = {
      slider : new SliderView(),
      userWelcome : new UserAuthorization({userName}),
      cardsItems : new CardsView({onToCartPurchase}),
      search : new Search(onSearch),
      modalWindows : new ModalWindowsView({
        onRemoveCartRow, 
        onCreateUser,
        onCloseModal : this.closeModal,
      })
    }
    this.functions = {
      backToCards : onBackToCards,
      searchForm : searchForm,
      overlayRender : this.instans.modalWindows.overlay(),
      cart : onCart
    }
    
    elements.burger.addEventListener('click',() => {
      if (elements.burger.innerHTML === '<i class="fa-solid fa-x"></i>'){
        this.removeOverlay()
      } else {
        this.renderAside();
      }
    })

    this.functions.overlayRender.addEventListener('click', this.removeOverlay)

    elements.showMore.addEventListener('click', () => {
      this.renderMoreCards()
      if(document.getElementById('show_more_text').textContent === 'Показать ещё'){
        elements.showMore.innerHTML = 
        `<p class="s-cards__btn-show_more" id="show_more_text">Скрыть</p>
        <i class="fa-solid fa-arrow-up"></i>`     
      }
      else {
        elements.showMore.innerHTML = 
        `<p class="s-cards__btn-show_more" id="show_more_text">Показать ещё</p> 
        <i class="fa-solid fa-arrow-down"></i>`
      }
    })

    this.functions.searchForm.addEventListener('submit', (event) => {
      this.renderSearch(event)
      this.removeOverlay()
    })

    elements.scrollArrow.addEventListener('click', this.scrollToTop)

    this.scroll = window.addEventListener('scroll', () => {
      elements.scrollArrow.classList.toggle('active', scrollY > 500)
    })

    elements.searchFooter.addEventListener('click', () => {
      this.scrollToTop();
      this.renderAside();
      this.functions.searchForm.elements['search_input'].focus();

    })

    elements.searchCart.addEventListener('click', () => {
      this.scrollToTop();
      this.renderCartModal()
    })

     elements.searchUser.addEventListener('click', () => {
      this.scrollToTop();
      this.renderUserModal()
    })
    
    elements.cardsWrapper.addEventListener('click', ({target}) => {
      if (target.id === 'back'){
        this.functions.backToCards()
      }
    })

    elements.cartBtn.addEventListener('click', () => {
      this.renderCartModal()
    })

    elements.userBtn.addEventListener('click', () => {
      this.renderUserModal()
    })
    }
  renderCards = (cards) => {
    this.instans.cardsItems.createCards(cards);
  }

  renderAside = () => {
      document.getElementById('aside').classList.add('aside__active');
      this.renderOverlay()
      this.functions.overlayRender.style.top = '110px'
      elements.burger.innerHTML = '<i class="fa-solid fa-x"></i>'
  }


  removeOverlay = () => {
      this.functions.overlayRender.style.visibility = 'hidden';
      document.getElementById('aside').classList.remove('aside__active');
      document.body.classList.remove('__lock');
      elements.burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
      if(document.getElementById('modal_user')){
        document.getElementById('modal_user').style.display = 'none'
      }
      if(document.getElementById('modal_cart')){
        document.getElementById('modal_cart').style.display = 'none'
      }
  }

  renderOverlay = () => {
    document.body.classList.add('__lock')
    this.functions.overlayRender.style.visibility = 'visible'
  }

  renderMoreCards = () => {
    document.getElementById('cards_wrapper').classList.toggle('s-cards__item-wrapper__active')
  }
  
  scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
  renderSearch = (event) => {
      event.preventDefault()
      elements.cardsWrapper.innerHTML = '';
      this.instans.search.createSearchRow()
    }
  
  renderCart = (cards) => {
      this.instans.modalWindows.addCartContent(cards)
    }
    
    removeCartRow = (cardId) => {
      this.instans.modalWindows.removeCart(cardId)
    }

  closeModal = () => {
    this.removeOverlay()
  }

  renderCartModal = () => {
    this.functions.cart()
      document.getElementById('modal_cart').style.display = 'flex'
      this.functions.overlayRender.style.visibility = 'visible';
      this.functions.overlayRender.style.top = '0';
  }

  renderUserModal = () => {
    this.instans.modalWindows.openUser()
      document.getElementById('modal_user').style.display = 'flex'
      this.renderOverlay()
      this.functions.overlayRender.style.top = '0';
  }


}

