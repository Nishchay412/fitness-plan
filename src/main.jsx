import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Questions } from './components/questionpage.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Schedule } from './components/schedule.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from './components/signup.jsx';
import { Diet } from './components/diet.jsx';
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/questions",
    element:<Questions/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/schedule",
    element:<Schedule/>
  },
  {
    path:"/diet",
    element:<Diet/>
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="321438657393-6moc1faajuk5ppdn641009rn7oarav6p.apps.googleusercontent.com">
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </GoogleOAuthProvider>
);