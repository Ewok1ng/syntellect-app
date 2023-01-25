import React from 'react';

import styles from './Button.module.css';

interface ButtonProps {
    text: string;
    callback: () => void;
}

export default function Button({ text, callback }: ButtonProps) {
    return (
        <button
            className={styles.button}
            onClick={(e) => {
                e.preventDefault();
                callback();
            }}
        >
            {text}
        </button>
    );
}
