import React from 'react';

import styles from './Input.module.css';

interface InputProps {
    placeholder: string;
    inputValue: string;
    onChangeInput: (value: string) => void;
}

export default function Input({ placeholder, inputValue, onChangeInput }: InputProps) {
    return (
        <input
            className={styles.input}
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => onChangeInput(e.target.value)}
        />
    );
}
