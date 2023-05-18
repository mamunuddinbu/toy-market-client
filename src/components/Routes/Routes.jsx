import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../home/Home";
import AllToys from "../toys/AllToys";
import MyToys from "../toys/MyToys";
import AddToy from "../toys/AddToy";
import Blogs from "../blogs/Blogs";
import NotFound from "../notFound/NotFound";

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
            element:<MyToys></MyToys>
        },
        {
            path:"/add-toy",
            element:<AddToy></AddToy>
        },
        {
            path:"/blogs",
            element:<Blogs></Blogs>
        },
      
      ]
    },
    {
      path:"*",
      element: <NotFound></NotFound>
    }
  ]);

  export default router;