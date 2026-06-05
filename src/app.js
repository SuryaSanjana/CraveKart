import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from "./components/Footer";

import { createBrowserRouter, RouterProvider } from 'react-router-dom' ; //named imports
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'; 

const AppLayout = () =>
(
    <div id="app-layout" className="app-layout">
        <Header />
        <Body />
        <Footer />
    </div>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
       
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <Error />
    },
    {
        path: "/contact",
        element: <Contact />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router} />
);
