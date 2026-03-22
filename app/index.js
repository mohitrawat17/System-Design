import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Infinite_Scroll from "./sessions/Infinite_Scroll";
import All_Sessions from "./sessions/All_Sessions";
import Accordion from "./sessions/Accordion";
import "./style.css";
import ImageSlider from "./sessions/ImageSlider";
import Zustand from "./sessions/zustand";
import Game from "./sessions/TicTacToe";
import ParallaxComp from "./sessions/parallax";
import FramerMotion from "./sessions/FramerMotion";
import Virtualization from "./sessions/Virtualization";
import Pagination from "./sessions/Pagination";
import ProgressBar from "./sessions/ProgressBar";
import FileExp from "./sessions/FileExp";

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
  {
    path: "/zustand",
    element: <Zustand />,
  },
  {
    path: "/tik-tac-toe",
    element: <Game />,
  },
  {
    path: "/parallax",
    element: <ParallaxComp />,
  },
  {
    path: "/framer",
    element: <FramerMotion />,
  },
  {
    path: "/virtualize",
    element: <Virtualization />,
  },
  {
    path: "/pagination",
    element: <Pagination />,
  },
  {
    path: "/progress-bar",
    element: <ProgressBar />,
  },
  {
    path: "/explorer",
    element: <FileExp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
