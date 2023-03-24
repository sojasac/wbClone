import {seacrhInput} from './constants.js';

export class Search {
    constructor(onSearch){
    this.seacrhInput = seacrhInput;
    this.search = onSearch
    }


    createSearchRow = () => {
            const {value} = this.seacrhInput;
            const formattedValue = value.trim().toLowerCase();
                this.search(formattedValue)
                this.seacrhInput.value = ''
    }
}
