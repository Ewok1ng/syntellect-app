import React from 'react';

import styles from './ResultItem.module.css';

interface ResultItemProps {
    flag: string;
    name: string;
    fullName: string;
    onSelect: () => void;
}

export default function ResultItem({ flag, name, fullName, onSelect }: ResultItemProps) {
    return (
        <li className={styles.resultItem} onClick={onSelect}>
            <img className={styles.flag} src={flag} alt="flag" />
            <div className={styles.info}>
                <h4 className={styles.name}>{name}</h4>
                <p className={styles.fullName}>{fullName}</p>
            </div>
        </li>
    );
}
