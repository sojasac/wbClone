import { createModalItem } from './utilies.js'
import { UserAuthorization } from './userAuthorization/index.js';

export class ModalWindowUser {
    constructor({onCloseModal, onCreateUser}){
        this.authorization = new UserAuthorization()
        this.createUserModal = createModalItem();
        this.createUserModal.addEventListener('click', ({target}) => {
            if (target.id === 'close_modal'){
                onCloseModal()
            }
            if (target.id === 'logIn'){
              const {value} = document.getElementById('login_input');
              const correctValue = value.trim();
              if (correctValue){
                this.authorization.renderWelkome(correctValue)
                onCloseModal()
                onCreateUser(correctValue)
            }
            }
        })

    }

    createModalUser = () => {
        const item = this.createUserModal;
        if (item) {
            document.body.append(item)
        }
        document.getElementById('login_input').value = ''
    }

}
