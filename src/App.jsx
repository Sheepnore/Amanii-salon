import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { GlobalStyle } from "./styles";
import Introduction from "./components/Home/Introduction";
import Products from "./components/Home/Products";
import Appointment from "./components/Appointment/Appointment";
import Location from "./components/Home/Location";
import Footer from "./components/Home/Footer";
import Navbar from "./components/Home/Navbar";
import SucessPage from "./components/Appointment/SuccessPage";
import {
  SucessAppointmentProvider,
  useSucess,
} from "./components/SucessSubmitContext";

function AppRoutes() {
  const { onAppointmentSucess, setOnAppointmentSucess } = useSucess();

  const Layout = () => {
    return (
      <>
        <GlobalStyle />
        <Outlet />
      </>
    );
  };

  const Home = () => {
    useEffect(() => {
      setOnAppointmentSucess(false);
    }, []);

    return (
      <>
        <Navbar />
        <Introduction />
        <Products></Products>
        <Location />
        <Footer />
      </>
    );
  };

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
          element: onAppointmentSucess ? (
            <Navigate to="/sucessPage" replace />
          ) : (
            <Appointment />
          ),
        },
        {
          path: "/sucessPage",
          element: <SucessPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

function App() {
  // Create the router configuration
  return (
    <SucessAppointmentProvider>
      <AppRoutes />
    </SucessAppointmentProvider>
  );
}

export default App;
