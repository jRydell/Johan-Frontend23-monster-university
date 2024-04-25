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
import { EditMonster } from "./pages/EditMonster";
import { MonsterContextProvider } from "./components/MonsterContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/monsters",
        element: <Monsters />,
        children: [
          {
            path: "/monsters/:monsterID",
            element: <Monster />,
          },
          {
            path: "/:monsterID/edit", // Define the route for EditMonster
            element: <EditMonster />,
          },
        ],
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
    <MonsterContextProvider>
      <RouterProvider router={router} />
    </MonsterContextProvider>
  </React.StrictMode>
);
