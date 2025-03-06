import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./Component/Header";
import OurProducts from "./Component/OurProducts";
import About from "./Component/About";
import Body from "./Component/Body";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import DetailProduct from "./Component/DetailProduct"; // Import DetailProduct
import "./index.css";

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet /> {/* Renders the nested components */}
            <Footer />
        </div>
    );
};

const route = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Body /> },
            { path: "/about-us", element: <About /> },
            { path: "/our-products", element: <OurProducts /> },
            { path: "/contact-us", element: <Contact /> },
            { path: "/detail-product/:productId", element: <DetailProduct /> }, // ✅ Added this route
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={route} />);
