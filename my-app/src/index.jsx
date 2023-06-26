import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './composants/pages/Home';
import Appartpage from './composants/pages/Appartpage';
import reportWebVitals from './reportWebVitals';
import Footer from './composants/Footer';
import Navbar from './composants/Navbar';
import About from './composants/pages/About';
import ErrorPage from './composants/pages/ErrorPage';


import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
// import Appart from './composants/Appart';


const HeaderFooterLayout = () => {
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
}

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />

      },
      {
        path: "/flat",
        element: <Appartpage/>
      },
      {
        path: "/about",
        element: <About/>
      },
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();