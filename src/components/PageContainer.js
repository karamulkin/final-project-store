import  React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from './PageContainer.module.css';

export const PageContainer = () => {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <div className={styles.content}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};