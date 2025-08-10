import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
            path: "/",
            element: <HomePage />,
    },
    {
        path: 'login',
        element: <Login/>
    }
])
