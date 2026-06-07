import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from "./components/Footer";

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom' ; //named imports
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'; 
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () =>
(
    <div id="app-layout" className="app-layout">
        <Header />
        <Outlet />  {/* Outlet component is used to render the child components based on the matched route */}
        <Footer />


    </div>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
       children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            }
       ]
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router} />
);
