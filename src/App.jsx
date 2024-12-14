import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Introduction from "./components/Introduction";
import Appointment from "./components/Appointment";
import Location from "./components/Location";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles";

// Create a Layout component that will be used as the main wrapper
const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
};

// Home page component (you can add content for the root route)
const Home = () => {
  return (
    <div>
      <Introduction />
      <Location />
      <Footer />
    </div>
  );
};

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // This makes it the default route
        element: <Home />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
]);

// App component becomes very simple
function App() {
  return <RouterProvider router={router} />;
}

export default App;
