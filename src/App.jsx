import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Appointment, SucessPage } from "./components/Appointment";
import {
  Footer,
  Introduction,
  Location,
  Navbar,
  Products,
} from "./components/Home";
import { GlobalStyle } from "./styles";
import Auth from "@/components/Auth/Auth";
import "firebaseui/dist/firebaseui.css";
import MemberDashboard from "./components/Auth/MemberDashboard";
import { UserDataProvider } from "./components/Auth/UserDataContext";
import SalonOwnerCalendar from "./components/OwnerDashboard/SalonOwnerCalendar";
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
        <Products />
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
        {
          path: "/memberDashboard",
          element: <MemberDashboard />,
        },
        {
          path: "/SalonOwnerDashboard",
          element: <SalonOwnerCalendar />,
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
