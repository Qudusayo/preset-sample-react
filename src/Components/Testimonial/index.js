import React, { useState } from "react";

import banner from "../../assets/bannerr.png";
import me from "../../assets/image.png";
import styles from "./style.module.scss";

const Index = () => {
    const [value, changeValue] = useState(0);

    const changeValueInc = () => {
        if (value < testimonials.length - 1) {
            changeValue(value + 1);
        } else {
            changeValue(testimonials.length - 1);
        }
    };

    const changeValueDec = () => {
        if (value < 1) {
            changeValue(0);
        } else {
            changeValue(value - 1);
        }
    };

    const testimonials = [
        {
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorum consectetur inventore corporis quae accusantium amet veniam in, provident nemo.",
            user: "Jane Cooper",
            id: "@jane_cooper",
            image: me,
        },
        {
            content:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti neque pariatur illo facilis quam distinctio accusantium eveniet ratione saepe totam?",
            user: "Steve Jobs",
            id: "@steve_jobs",
            image: me,
        },
        {
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia omnis iusto voluptatum, tempore quis minus incidunt est suscipit necessitatibus!",
            user: "Dev Qudusayo",
            id: "@dev_qudusayo",
            image: me,
        },
    ];
    return (
        <div className={styles.testimonial}>
            <div className={styles.card}>
                <h1>Our Clients reviews</h1>
                <p className={styles.about}>{testimonials[value].content}</p>
                <div className={[styles.flex, styles.flex1].join(" ")}>
                    <img src={testimonials[value].image} alt="testimonial" />
                    <div className={styles.flex}>
                        <p>{testimonials[value].user}</p>
                        <p>{testimonials[value].id}</p>
                    </div>
                </div>
                <div className={styles.flex2}>
                    <p
                        onClick={changeValueDec}
                        className={value === 0 ? styles.done : styles.undone}
                    >
                        ←
                    </p>
                    <p
                        onClick={changeValueInc}
                        className={
                            value === testimonials.length - 1
                                ? styles.done
                                : styles.undone
                        }
                    >
                        →
                    </p>
                </div>
            </div>
            <img src={banner} alt="banner" />
        </div>
    );
};

export default Index;
