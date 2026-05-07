import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/Pages/Login.jsx";
import Register from "./features/auth/Pages/Register.jsx";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<h1>Home</h1>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }
])
