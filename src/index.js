import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Header />
      <HomePage />
      <Footer />
    </>,
  },
  {
    path: "/thoi-su",
    element: <>
      <Header />
    </>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
