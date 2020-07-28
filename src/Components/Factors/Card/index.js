import React from "react";
import styles from "./style.module.scss";

function index(props) {
    return (
        <div className={styles.card}>
            <img src={props.image} alt={props.text} />
            <h2 className={styles.text}>{props.text}</h2>
        </div>
    );
}

export default index;
