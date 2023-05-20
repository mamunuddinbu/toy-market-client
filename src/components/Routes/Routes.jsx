import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../home/Home";
import AllToys from "../toys/AllToys";
import MyToys from "../toys/MyToys";
import AddToy from "../toys/AddToy";
import Blogs from "../blogs/Blogs";
import NotFound from "../notFound/NotFound";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import AboutUs from "../other/AboutUs";
import Contact from "../other/Contact";
import PrivateRoute from "../other/PrivateRout";
import Details from "../toys/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/all-toys",
            element:<AllToys></AllToys>
        },
        {
            path:"/my-toys",
            element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path:"/add-toy",
            element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path:"/blogs",
            element:<Blogs></Blogs>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
            path:"/about",
            element:<AboutUs></AboutUs>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },
        {
            path:"/details/:_id",
            element:<Details></Details>
        },
      
      ]
    },
    {
      path:"*",
      element: <NotFound></NotFound>
    }
  ]);

  export default router;