import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, Outlet, createBrowserRouter, useLocation } from "react-router-dom";
import Header from "./Component/Header";
import OurProducts from "./Component/OurProducts";
import About from "./Component/About";
import Services from "./Component/CertificationsMain";
import Body from "./Component/Body";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import "./index.css";

import CertificationsMain from "./Component/CertificationsMain";


const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            
            <Footer />
           
        </div>
    );
};

// Conditional Floating Button Component
const ConditionalFloatingButton = () => {
    const location = useLocation(); // Get the current location

    // Check if the current path is not '/contact-us'
    const shouldShowButton = location.pathname !== '/contact-us';

    return shouldShowButton ? <FloatingButton /> : null; // Render the button conditionally
};

const route = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,

        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about-us",
                element: <About />
            },
            {
                path: "/certification",
                element: <CertificationsMain />
            },
            {
                path: "/our-products",
                element: <OurProducts />
            },
            {
                path: "/contact-us",
                element: <Contact />
            },
           
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={route} />);
