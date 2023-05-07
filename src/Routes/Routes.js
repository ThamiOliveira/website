import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Estante from "../Components/Estante/Estante";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Estante }  path="/es" />
       </BrowserRouter>
   )
}

export default Routes;