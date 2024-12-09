import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import ContactDetails from "./components/ContactDetails";
import Auth from "./components/Auth/auth";
import { GlobalStyle } from "./styles";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Introduction />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <RouterProvider router={routes}></RouterProvider>
      <Appointment></Appointment>
      <ContactDetails></ContactDetails>
      {/* <Auth></Auth> */}
    </>
  );
}

export default App;
