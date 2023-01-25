import { makeAutoObservable } from 'mobx';

import ButtonControlModel from '../models/ButtonControlModel';

export default class ButtonControlViewModel {
    model: ButtonControlModel;

    constructor(model: ButtonControlModel) {
        makeAutoObservable(this);
        this.model = model;
    }

    onInputChange = (value: string) => {
        this.model = {
            ...this.model,
            inputValue: value,
        };
    };

    clearInput = () => {
        this.model.inputValue = '';
    };

    alertNumber = () => {
        if (!isNaN(Number(this.model.inputValue)) && this.model.inputValue !== '') {
            alert(this.model.inputValue);
        }
    };

    alertInputValue = () => {
        alert(this.model.inputValue);
    };

    helloWorld = () => {
        this.model.inputValue = 'Hello world!';
    };
}
