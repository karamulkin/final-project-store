import React from "react";
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Contact us: Best e-shop OÜ</p>
            <p>+372 555 666 777</p>
            <p>info@besteshop.ee</p>
        </footer>
    );
};