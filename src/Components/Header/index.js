import React from "react";

import logo from "../../assets/header.webp";
import styles from "./style.module.scss";

function index() {
    return (
        <div className={styles.header}>
            <img src={logo} alt="HeaderLogo" />
            <form>
                <h1>Welcome Home</h1>
                <p>
                    Introducing an entirely a new way to stay in your favorite
                    neigborhoods arround the world
                </p>
                <select>
                    <option>Location</option>
                </select>
                <input type="date" placeholder="Check in - Check out" />
                <div className={styles.flex}>
                    <input type="number" placeholder="Check in - Check out" />
                    <button>Search</button>
                </div>
            </form>
        </div>
    );
}

export default index;
