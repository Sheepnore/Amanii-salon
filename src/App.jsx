import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import ContactDetails from "./components/ContactDetails";
import { GlobalStyle } from "./styles";

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
      <GlobalStyle></GlobalStyle>
      <RouterProvider router={routes}></RouterProvider>
      <Services></Services>
    </>
  );
}

export default App;
