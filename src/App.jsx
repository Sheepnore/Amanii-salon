import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Introduction from "./components/Introduction";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
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
      <Contact></Contact>
    </>
  );
}

export default App;
