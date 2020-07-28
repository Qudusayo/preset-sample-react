
import React from 'react'

import styles from './style.module.scss'

function index(props) {
    return (
        <div className={styles.card}>
            <img src={props.image} alt={props.text} />
            <h1 className={styles.title}>{props.title}</h1>
            <span className={styles.text}>{props.text}</span>
        </div>
    )
}

export default index
