import React from "react"
import Hello from "../pages/Hello";
import Home from "../pages/Home";
import Projects from "../pages/projects";

// import components (Pages) to be rendered
interface pathType {
  path: string, element: JSX.Element
}
// type declaration
type RouteArray = Array<{ path: string, element: JSX.Element, children?: pathType[] }>;

// paths array
const MyRoutes:RouteArray = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects/',
    element: <Projects />,
    children : [
     { 
      path: ':name',
      element: <Projects />,
    }
    ]
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