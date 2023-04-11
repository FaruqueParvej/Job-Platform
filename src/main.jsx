import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Jobs from "./components/jobs/jobs";
import Blog from "./components/Blog/Blog";
import Banner from "./components/Banner/Banner";
import JobCategory from "./components/JobCategories/JobCategories";
import Details from "./components/Details/Details";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "details/:id",
        element: <Details>,</Details>,
        loader: ({ params }) => fetch(`/details.json`),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
