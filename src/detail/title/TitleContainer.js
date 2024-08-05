import React from 'react';
import styles from './TitleContainer.module.css';

const TitleContainer = ({title}) => {
    return (
        <div className={styles['title-container']}>
            {title}
        </div>
    );
};


export default TitleContainer;