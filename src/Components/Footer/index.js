import React from "react";

import styles from "./style.module.scss";

function index() {
    return (
        <footer className={styles.footer}>
            <div className={styles.flex}>
                <h2>
                    Company<span className="serif">Logo</span>
                </h2>
                <div className={styles.flexmedia}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="feather feather-instagram"
                    >
                        <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="feather feather-twitter"
                    >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="feather feather-facebook"
                    >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                </div>
            </div>
            <div>
                <h2>Menu</h2>
                <ul>
                    <li>About us</li>
                    <li>lease to Bella</li>
                    <li>Contact Us</li>
                    <li>Help Center</li>
                </ul>
            </div>
            <div>
                <h2>Suites</h2>
                <ul>
                    <li>Dubai</li>
                    <li>Amserdam</li>
                    <li>Luxemburg</li>
                    <li>London</li>
                </ul>
            </div>
        </footer>
    );
}

export default index;
