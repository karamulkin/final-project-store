import React from "react";
import { useRouteError } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const PageNotFound = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <Header />
            <div>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occured.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
            <Footer />
        </div>
    )
    
}