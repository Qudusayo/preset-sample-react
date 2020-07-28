import React, { useState } from "react";

import styles from "./style.module.scss";

function Index() {
    const [isVisible, changeVisibility] = useState(false);

    const visibilityHandler = () => {
        changeVisibility(!isVisible)
    }

    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.lg}>About</li>
                <li className={styles.lg}>Reservations</li>
                <li className={styles.logo}>
                    COMPANY <span> LOGO</span>
                </li>
                <li className={styles.lg}>Login</li>
                <li className={styles.lg}>SignUp</li>
                <li className={styles.bars} onClick={visibilityHandler}>
                    {isVisible ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    : <h2>☰</h2>}
                </li>
            </ul>
            <ul
                className={[
                    styles.nav,
                    isVisible ? styles.nav_visible : styles.nav_hidden,
                ].join(" ")}
            >
                <li>About</li>
                <li>Reservations</li>
                <li>Login</li>
                <li>SignUp</li>
            </ul>
        </nav>
    );
}

export default Index;
