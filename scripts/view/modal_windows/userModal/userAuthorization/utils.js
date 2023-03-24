import {createEl} from '../../../cards/utilies.js';

export function createItem (userName) {
    const span = createEl('span', {class: 'userAuthorization_text'}, `Добро пожаловать: ${userName}`)
    return span
}
