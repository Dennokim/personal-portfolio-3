import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContactPage from './pages/ContactPage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AboutPage from './pages/AboutPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "ContactPage",
    element: <ContactPage/>,
  },
  {
    path: "WorkPage",
    element: <WorkPage/>,
  },
  {
    path: "BlogPage",
    element: <BlogPage/>,
  },
  {
    path: "AboutPage",
    element: <AboutPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

