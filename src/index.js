import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import GiaiTriPage from "./Pages/GiaiTriPage";
import PodcastPage from "./Pages/PodcastPage";
import GocNhinPage from "./Pages/GocNhinPage";
import TheGioiPage from "./Pages/TheGioiPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/goc-nhin",
    element: (
      <>
        <Header />
        <GocNhinPage />
      </>
    ),
  },
  {
    path: "/GiaiTriPage",
    element: (
      <>
        <Header />
        <GiaiTriPage />
      </>
    ),
  },
  {
    path: "/PodcastPage",
    element: (
      <>
        <Header />
        <PodcastPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/TheGioiPage",
    element: (
      <>
        <Header />  
        <TheGioiPage />
        <Footer />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
