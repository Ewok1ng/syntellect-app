export default class ButtonModel {
    text: string;
    callback: () => void;

    constructor(text: string, cb: () => void) {
        this.text = text;
        this.callback = cb;
    }
}
