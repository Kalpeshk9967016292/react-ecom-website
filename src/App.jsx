<<<<<<< Updated upstream
import { createBrowserRouter, RouterProvider } from "react-router";
import {
  AppRoutesWithoutHeader,
  AppRoutesWithHeader,
} from "./routes/AppRoutes";
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
>>>>>>> Stashed changes
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./components/common/Login";
import Account from "./pages/Account";

const router = createBrowserRouter([
  {
<<<<<<< Updated upstream
    element: <AppRoutesWithoutHeader />,
    children: [{ path: "/", element: <Home />, title: "Home" }],
=======
    element: <AppRoutes />,
    children: [
      { path: "/", element: <Home />, title: "Home", handle: { title: "Home" } },
    ],
>>>>>>> Stashed changes
  },
  {
    element: <AppRoutes withPageHeader />,
    children: [
      {
        path: "/about",
        element: <About />,
        title: "About Us",
      },
      {
        path: "/Service",
        element: <Service />,
        title: "Services",
      },
      {
        path: "/contact-us",
        element: <Contact />,
        title: "Contact Us",
      },
      {
        path: "/account",
        element: <Account />,
        title: "Account",
        children: [
          {
            path: "/account/login",
            element: <Login />,
            title: "Login",
          },
        ],
      },
    ],
  },

]);

export default function App() {
  return <RouterProvider router={router} />;
}
