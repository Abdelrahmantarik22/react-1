import {createBrowserRouter,RouterProvider} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "./Layout";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  const routes = createBrowserRouter([
    { path: "/",element: <Layout />,children: [
        { index:true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      </>
  );
}
export default App;
