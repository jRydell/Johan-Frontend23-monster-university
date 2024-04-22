import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AddMonster } from "./pages/AddMonster";
import { Monster } from "./pages/Monster";
import { Monsters } from "./pages/Monsters";
import { Navigation } from "./pages/Navigation";
import { NotFound } from "./pages/NotFound";
import { Start } from "./pages/Start";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: "/start",
        element: <Start />,
      },
      {
        path: "/monsters",
        element: <Monsters />,
      },
      {
        path: "/addMonster",
        element: <AddMonster />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
