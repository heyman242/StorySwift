import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Portfolio } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 200,
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
