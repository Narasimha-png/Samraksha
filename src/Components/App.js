import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import FeatureSpace from "./Featues";
import Footer from "./Footer";

const App = () =>(
  <>
  <NavBar />
  <Welcome />
  <FeatureSpace />
  <Footer />
  </>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
