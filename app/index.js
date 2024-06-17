import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Infinite_Scroll from "./sessions/Infinite_Scroll";
import Home from "./Home";
import All_Sessions from "./sessions/All_Sessions";

function Index({ children }) {
  return (
    <div>
      <div>Header</div>
      {children}
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "sessions",
        element: <All_Sessions />,
      },
    ],
  },
  {
    path: "/infinite-scroll",
    element: <Infinite_Scroll />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
