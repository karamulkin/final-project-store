import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PageCheckoutForm } from "./PageCheckoutForm.js";
import { PageContainer } from "./PageContainer";
import { PageHome } from "./PageHome.js";
import { PageNotFound } from "./PageNotFound.js";
import { PageShoppingCart } from "./PageShoppingCart.js";
import { PageSingleProduct } from "./PageSingleProduct.js";
import { StoreProvider } from "./StoreLogic.js";
import { PageStore } from "./PageStore.js";
import { PageOrderAccepted } from "./PageOrderAccepted.js"

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
        path: "/singleproduct/:productId",
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
      {
        path:"/order-accepted",
        element: <PageOrderAccepted />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
};