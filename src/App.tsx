import React from "react";
import NavigationRoot from "./routes/root";

// react router dom implementatioin
import { createBrowserRouter, RouterProvider , BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Error404 from "./pages/errorPages/Error404";
import MyRoutes from "./routes";

const App = ():JSX.Element => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavigationRoot />,
      errorElement: <Error404 />,
      children : [ ...MyRoutes]
    }
  ])
  return (<>
      <RouterProvider router={router}/>
      <Router>
        <Routes>
          <Route path="/nav" element={<NavigationRoot/>}/>
        </Routes>
      </Router>
    </>)
}

export default App;