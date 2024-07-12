import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Infinite_Scroll from "./sessions/Infinite_Scroll";
import All_Sessions from "./sessions/All_Sessions";
import Accordion from "./sessions/Accordion";
import './style.css'
import ImageSlider from "./sessions/ImageSlider";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <All_Sessions />,
  },
  {
    path: "/infinite-scroll",
    element: <Infinite_Scroll />,
  },
  {
    path: "/accordion",
    element: <Accordion />,
  },
  {
    path: "/image-slider",
    element: <ImageSlider />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
