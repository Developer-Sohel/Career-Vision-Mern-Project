import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayouts/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/blog',
          element: <Blog/>
        }
        
      ]
    },
  ]);