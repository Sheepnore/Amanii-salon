import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Introduction from "./components/Introduction";
import Appointment from "./components/Appointment";
import Location from "./components/Location";
import Footer from "./components/Footer";
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
      <Location></Location>
      <Footer></Footer>
    </>
  );
}

export default App;
