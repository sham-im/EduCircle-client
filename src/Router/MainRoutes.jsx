// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from '../components/Home';
// import About from '../components/About';
// import Contact from '../components/Contact';
// import NotFound from '../components/NotFound';

// const MainRoutes = () => {
//     return (
//         <Router>
//             <Switch>
//                 <Route exact path="/" component={Home} />
//                 <Route path="/about" component={About} />
//                 <Route path="/contact" component={Contact} />
//                 <Route component={NotFound} />
//             </Switch>
//         </Router>
//     );
// };

// export default MainRoutes;

import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Login from "../authPages/Login";
import Home from "../pages/Shared/Home";
import FAQ from "../pages/components/HomePages/Faq";
import RegisterPage from "../authPages/RegisterPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <div> Not Found</div>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/Register',
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: '/Assignments',
        element: <Home></Home>,
      },
      {
        path: '/createAssignments',
        element: <Home></Home>,
      },
      {
        path: '/myAssignments',
        element: <Home></Home>,
      },
      {
        path: '/pendingAssignments',
        element: <Home></Home>,
      },
      {
        path: '/FAQ',
        element: <FAQ></FAQ>,
      },
    ],
  }
]);
export default router;