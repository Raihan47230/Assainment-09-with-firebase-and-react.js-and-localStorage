import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./components/Roots";
import Home from "./components/Layout/HomePage/Home";
import Learning from "./components/Layout/Start-Learning/Learning";
import ErrorPage from "./components/Layout/ErrorPage/ErrorPage";
import Login from "./components/Layout/Login/Login";
import Register from "./components/Layout/Regester/Register";
import AuthProviders from "./components/AuthProviders/AuthProviders";
import Lessons from "./components/Lessons";
import MyProfile from "./components/MyProfile";
import Tutorials from "./components/Tutorials";
import PrivateRoute from "./components/PrivateRoute";
import Update from "./components/Update";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Start-learning",
        element: <Learning></Learning>,
        loader: () => fetch("Lesson.json"),
      },
      {
        path: "/Tutorials",
        element: <PrivateRoute><Tutorials></Tutorials></PrivateRoute>,
      },
      {
        path: "/about-us",
        element: <div>start about</div>,
      },
      {
        path:'/my_profile',
        element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: "/update_profile",
        element: <Update></Update>,
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:'/Register',
        element:<Register></Register>
      },
      
     
      {
        path: "/lesson/:Lesson_no",
        element: <Lessons></Lessons>,
        loader:()=>fetch('./vocabulary.json')
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);
