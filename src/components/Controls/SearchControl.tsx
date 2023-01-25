import React from 'react';
import { observer } from 'mobx-react-lite';

import SearchControlViewModel from '../../viewmodels/SearchControlViewModel';

import styles from './Controls.module.css';

import Input from '../Input';
import ResultItem from '../ResultItem';

interface SearchControlProps {
    viewModel: SearchControlViewModel;
}

export default observer(function SearchControl({ viewModel }: SearchControlProps) {
    const { inputValue, countries, isResultsVisible } = viewModel.model;
    const autocompleteRef = React.useRef(null);

    React.useEffect(() => {
        const onOutsideClickHandler = (e: MouseEvent) => {
            const paths = e.composedPath();

            if (!paths.includes(autocompleteRef.current!)) {
                viewModel.setResultsVisibility(false);
            }
        };

        document.body.addEventListener('click', onOutsideClickHandler);

        return () => {
            document.body.removeEventListener('click', onOutsideClickHandler);
        };
    }, [viewModel]);

    return (
        <form className={styles.form}>
            <div className={styles.inputWrapper}>
                <Input
                    inputValue={inputValue}
                    placeholder="Start searching..."
                    onChangeInput={(str) => viewModel.onInputChange(str)}
                />
                {countries.length > 0 && isResultsVisible && (
                    <ul ref={autocompleteRef} className={styles.autocompleteList}>
                        {countries.map((item, index) => (
                            <ResultItem
                                key={index}
                                {...item}
                                onSelect={() => {
                                    viewModel.onCountrySelect(item.name);
                                }}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </form>
    );
});
