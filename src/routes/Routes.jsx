import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import UnderConstruction from "../components/UnderConstruction";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import Quote from "../Pages/Quote";
import Team from "../Pages/Team";
import ScrollToTop from "../components/ScrollToTop";

const router = createBrowserRouter([
  {
    element: (
      <>
      <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/quote",
        element: <Quote />,
      },
    ],
  },
]);

const Routes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
