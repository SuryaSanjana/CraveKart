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


//Implenting Grocer as a lazy loaded component using React.lazy and Suspense
import { lazy, Suspense } from 'react';

const Grocery = lazy(() => import('./components/Grocery'));  //lazy loading the Grocery component
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
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<div>Loading...</div>}> {/* Suspense component is used to show a fallback UI while the Grocery component is being loaded */}
                        <Grocery />
                    </Suspense>
                )
            }
       ]
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router} />
);
