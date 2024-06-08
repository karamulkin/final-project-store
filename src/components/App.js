import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Footer } from "./Footer.js";
import { Header } from "./Header.js";
import { PageCheckoutForm } from "./PageCheckoutForm.js";
import { PageContainer } from "./PageContainer";
import { PageHome } from "./PageHome.js";
import { PageNotFound } from "./PageNotFound.js";
import { PageShoppingCart } from "./PageShoppingCart.js";
import { PageSingleProduct } from "./PageSingleProduct.js";
import { PageStore } from "./PageStore.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageContainer />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
      {
        path: "/checkout",
        element: <PageCheckoutForm />,
      },
      {
        path: "/shoppingcart",
        element: <PageShoppingCart />,
      },
      {
        path: "/singleproduct",
        element: <PageSingleProduct />,
      },
      {
        path: "/store",
        element: <PageStore />,
      },
      {
        path: "/cart",
        element: <PageShoppingCart />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <div>
      <h1>Hi, there!</h1>
      <RouterProvider router={router} />
    </div>
  );
};