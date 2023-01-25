import ButtonModel from './ButtonModel';

export default class ButtonControlModel {
    inputValue: string;
    rightButtons: ButtonModel[] | null;
    leftButtons: ButtonModel[] | null;

    constructor() {
        this.inputValue = '';
        this.rightButtons = [];
        this.leftButtons = [];
    }
}
