import {createItem} from './utils.js';
export class UserAuthorization {
    constructor(){
        this.el = createItem

    }
    renderWelkome = (userName) => {
        const wrap = document.getElementById('welcome_wrapper');
        wrap.innerHTML = '';
        const item = this.el(userName);
        wrap.append(item);
    }
}
