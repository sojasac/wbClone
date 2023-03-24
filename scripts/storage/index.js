const LocalStorageKey = {
  cards: 'cards',
  cardsInCart: 'cart',
  users: 'users'
};

export class WBData {
  constructor(){
    this.cards = [];
    const savedCards = localStorage.getItem(LocalStorageKey.cardsInCart)
    this.shopCards = savedCards ? JSON.parse(savedCards) : [];
    const savedUsers = localStorage.getItem(LocalStorageKey.users)
    this.users = savedUsers ? JSON.parse(savedUsers) : []
  }

  setCards = (cards) => {
      this.cards = cards;
      localStorage.setItem(LocalStorageKey.cards, JSON.stringify(this.cards))
      return this.cards.slice()
    }
  getCards = () => {
    return this.cards.slice()
  }
  pushShopCards = (id) => {
    this.cards.forEach((el) => {
      if(el.id === id){
        this.shopCards.push(el)
      };
    });
    localStorage.setItem(LocalStorageKey.cardsInCart, JSON.stringify(this.shopCards))
  }

  createUsers = (userName) => {
    const user = {
      id : window.crypto.randomUUID(),
      name : userName
    }
    this.users.push(user)
    localStorage.setItem(LocalStorageKey.users, JSON.stringify(this.users))
    return this.users.slice()
  }
  getUser = () => {
    return this.users.slice()[this.users.slice().length - 1]
  }
  getShopCards = () => {
    return this.shopCards.slice();
  }


  removeShopCard = (cardId) => {
      const indexToRemove = this.shopCards.findIndex(({ id }) => id === cardId);
      if (indexToRemove > -1) {
        this.shopCards.splice(indexToRemove, 1)
      }
      if (this.shopCards.length === 0) { 
          localStorage.removeItem(LocalStorageKey.cardsInCart);
      } else {
        localStorage.setItem(LocalStorageKey.cardsInCart, JSON.stringify(this.shopCards));
      }
      return this.shopCards.slice();
    }


  getSearch = (serchValue) => {
    if(serchValue){
      return this.cards.slice().filter((el) => el.cardName.toLowerCase().includes(serchValue));
    }
    else {
      return this.cards.slice()
    }
  }
}
