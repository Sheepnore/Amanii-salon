import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import ContactDetails from "./components/ContactDetails";
import "./App.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Introduction />,
  },
  {
    path: "/",
    element: <Services />,
  },
  {
    path: "/",
    element: <Appointment />,
  },
  {
    path: "/",
    element: <ContactDetails />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <Services></Services>
    </>
  );
}

export default App;
