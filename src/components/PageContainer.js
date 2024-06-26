import  React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const PageContainer = () => {
    return (
        <div className="page-container">
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};