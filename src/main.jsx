import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./page/index/Index";
import Root from "./routes/Root";
import "./main.css";
import Page404 from "./page/404/page404";
import Galeria, { loader as galeriaLoader } from "./page/galeria/Galeria";
import ShowItem from "./page/showItem/ShowItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        errorElement: <Page404 />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "/ropa",
            element: <Galeria />,
            loader: galeriaLoader,
          },
          {
            path: "/ropa/show",
            element: <ShowItem />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
