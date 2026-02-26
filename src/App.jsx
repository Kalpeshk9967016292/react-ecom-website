import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "./routes";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import { Login } from "./components/common";
import Account from "./pages/Account";

const router = createBrowserRouter([
  {
    element: <AppRoutes />,
    children: [
      { path: "/", element: <Home />, title: "Home", handle: { title: "Home" } },
    ],
  },
  {
    element: <AppRoutes withPageHeader />,
    children: [
      {
        path: "/about",
        element: <About />,
        title: "About Us",
        handle: { title: "About Us" },
      },
      {
        path: "/service",
        element: <Service />,
        title: "Services",
        handle: { title: "Services" },
      },
      {
        path: "/contact-us",
        element: <Contact />,
        title: "Contact Us",
        handle: { title: "Contact Us" },
      },
      {
        path: "/account",
        element: <Account />,
        title: "Account",
        handle: { title: "Account" },
        children: [
          {
            path: "login",
            element: <Login />,
            title: "Login",
            handle: { title: "Login" },
          },
        ],
      },
    ],
  },

]);

export default function App() {
  return <RouterProvider router={router} />;
}
