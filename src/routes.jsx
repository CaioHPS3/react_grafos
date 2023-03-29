import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const AllRoutes = () => {
   return(
       <BrowserRouter>
        <Routes>
          <Route element={<Home />}  path="/" exact />
          <Route element={<Login />}  path="/login" />
          <Route element={<Signup />}  path="/signup" />
        </Routes>
       </BrowserRouter>
   )
}

export default AllRoutes;

// import React from "react";
// import { Route, BrowserRouter } from "react-router-dom";

// import Home from "./pages/Home";
// import Sobre from "./pages/About";
// import Usuario from "./pages/Login";

// const Routes = () => {
//    return(
//        <BrowserRouter>
//            <Route component = { Home }  path="/" exact />
//            <Route component = { Sobre }  path="/sobre" />
//            <Route component = { Usuario }  path="/usuario" />
//        </BrowserRouter>
//    )
// }

// export default Routes;