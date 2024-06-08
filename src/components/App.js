import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PageCheckoutForm } from "./PageCheckoutForm.js";
import { PageContainer } from "./PageContainer";
import { PageHome } from "./PageHome.js";
import { PageNotFound } from "./PageNotFound.js";
import { PageShoppingCart } from "./PageShoppingCart.js";
import { PageSingleProduct, loader as productLoader } from "./PageSingleProduct.js";
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
        path: "/singleproduct/:productId",
        element: <PageSingleProduct />,
        loader: productLoader,
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
      <RouterProvider router={router} />
    </div>
  );
};