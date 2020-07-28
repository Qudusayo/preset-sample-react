import React from "react";
import img from "../../assets/header.webp";
import img1 from "../../assets/meeting.webp";
import img2 from "../../assets/laundry.webp";
import Card from "./Card";
import styles from "./style.module.scss";

function index() {
    return (
        <div className={styles.factors}>
            <div className={styles.content}>
                <p>4 new cities</p>
                <h1>New suites for you</h1>
                <p className={styles.info}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    cupiditate eos consectetur omnis, tenetur impedit
                    repellendus officiis officia sed molestias, aspernatur ea
                    veritatis?
                </p>
            </div>
            <div className={styles.content2}>
                <Card image={img} text="Amsterdam" />
                <Card image={img1} text="Dubai" />
                <Card image={img2} text="London" />
            </div>
        </div>
    );
}

export default index;
