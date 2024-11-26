import DashBoard from "./components/pages/dashboard"
import ContactForm from "./components/pages/contactus"
import LandingPage from "./components/pages/LandingPage/Landingpage"
import RegistrationForm from "./components/pages/RegistrationForm"
import OurEvents from "./components/pages/Ourevent"
import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./components/layout/AppLayout"
import Event from "./components/pages/algoolympics"
import LoginPage  from "./components/pages/Login"
import Registration  from "./components/pages/RegistrationForm"
import CreateTeam  from "./components/pages/CreateTeam"
import AddMember  from "./components/pages/AddMembers"
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      // errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<LandingPage/>
        },
        {
          path:"/events",
          element:<OurEvents/>
        },
        {
          path:"/events/eve",
          element:<Event/>
        },
        {
          path:"/team",
          element:<LandingPage/>,
          // loader:getmovieData,
        },
        {
          path:"/createTeam",
          element:<CreateTeam/>,
          // loader:getmovieData,
        },
        {
          path:"/addmem",
          element:<AddMember/>,
          // loader:getmovieData,
        },
        {
          path:"/register",
          element:<Registration/>,
          // loader:getmovieData,
        },
        
        {
          path:"/contact",
          element:<ContactForm/> 
        },
        {
          path:"/login",
          element:<LoginPage/> 
        },
        {
          path:"/dashboard",
          element:<DashBoard/>,
        },
      ]
     },
   ]);
   return <RouterProvider router={router}/>
}

export default App