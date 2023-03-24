import { closeBtn } from "../utilies.js";

export function createModalItem () {
    const modalUserContainer = document.createElement ('div');
    modalUserContainer.classList.add('modal-user');
    modalUserContainer.id = 'modal_user'

    const modalUserHeader = document.createElement ('div');
    modalUserHeader.classList.add('modal-user-header');

    const closeModalUserWindow  = closeBtn(); 

    const enter = document.createElement('div');
    enter.classList.add('modal-user__title', 'modal-text')
    enter.innerText = 'Вход:';

    const formUser = document.createElement('form');
    formUser.classList.add('modal-user__form')

    const loginInput = document.createElement('input');
    loginInput.classList.add('modal-user__form__input');
    loginInput.setAttribute('type', 'text');
    loginInput.setAttribute('placeholder', 'Введите ваше имя');
    loginInput.id = 'login_input'

    const btnLogin = document.createElement('button');
    btnLogin.classList.add('modal-user__form__btn', 'btn');
    btnLogin.innerText = 'Вход';
    btnLogin.type = 'button';
    btnLogin.id = 'logIn';
  
    modalUserContainer.append(modalUserHeader,enter, formUser);
    modalUserHeader.append(closeModalUserWindow);
    formUser.append(loginInput, btnLogin);
    
    return modalUserContainer
}
