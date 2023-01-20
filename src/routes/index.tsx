import React from "react"
import Hello from "../pages/Hello";
import Home from "../pages/Home";

// import components (Pages) to be rendered

// type declaration
type RouteArray = Array<{ path: string, element: JSX.Element }>;

// paths array
const MyRoutes:RouteArray = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <h1>This is projects page</h1>
  },
  {
    path: '/resume',
    element: <h1>This is Resume page</h1>
  },
  {
    path: 'hello',
    element: <Hello />
  },
];


export default MyRoutes;