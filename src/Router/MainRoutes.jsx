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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);
  export default router;