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
import Auth from "./components/Auth/Auth";
import {
  SucessAppointmentProvider,
  useSucess,
} from "./components/SucessSubmitContext";
import { UserDataProvider, useAuth } from "./components/Auth/UserDataContext";
import "firebaseui/dist/firebaseui.css";

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
    setOnAppointmentSucess(false);
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
          index: true, // the default route
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
          path: "/login",
          element: <Auth />,
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
  return (
    <UserDataProvider>
      <SucessAppointmentProvider>
        <AppRoutes />
      </SucessAppointmentProvider>
    </UserDataProvider>
  );
}

export default App;
