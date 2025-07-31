import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import UnderConstruction from "../components/UnderConstruction";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    }
])

const Routes = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Routes