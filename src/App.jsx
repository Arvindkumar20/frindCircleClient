import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import MainLayout from "./components/MainLayout"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Profile from "./components/Profile"
const browserRouter=createBrowserRouter([{
         path:"/",
        element:<MainLayout/>,
        children:[ {
          path:"/",
          element:<Home/>
          },
          {
            path:"/profile"
            ,element:<Profile/>
          }
         ]
        },
        {
          path:"/login",
          element:<Login/>
          },
          {
            path:"/signup",
            element:<Signup/>
          }
      
]
)


export default function App() {
  return (
    <div>
 <RouterProvider router={browserRouter}/>

    </div>
  )
}
