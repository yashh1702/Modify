import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/Pages/Login.jsx";
import Register from "./features/auth/Pages/Register.jsx";
import Protected from "./features/auth/Components/Protected.jsx";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Protected><h1>Home</h1></Protected>
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
