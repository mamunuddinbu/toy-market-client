import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./components/Routes/Routes";



ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='max-w-5xl mx-auto'>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </div>
  
);
