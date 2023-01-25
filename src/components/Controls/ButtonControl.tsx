import { observer } from 'mobx-react-lite';

import ButtonControlViewModel from '../../viewmodels/ButtonControlViewModel';

import styles from './Controls.module.css';

import Button from '../Button';
import Input from '../Input';

interface ControlProps {
    viewModel: ButtonControlViewModel;
}

export default observer(function ButtonControl({ viewModel }: ControlProps) {
    const { inputValue, leftButtons, rightButtons } = viewModel.model;

    return (
        <form className={styles.form}>
            <div className={styles.left}>
                {leftButtons?.map((button, buttonId) => (
                    <Button key={buttonId} text={button.text} callback={button.callback} />
                ))}
            </div>
            <div className={styles.inputWrapper}>
                <Input
                    inputValue={inputValue}
                    placeholder={'Start typing...'}
                    onChangeInput={(str) => viewModel.onInputChange(str)}
                />
            </div>
            <div className={styles.right}>
                {rightButtons?.map((button, buttonId) => (
                    <Button key={buttonId} text={button.text} callback={button.callback} />
                ))}
            </div>
        </form>
    );
});
