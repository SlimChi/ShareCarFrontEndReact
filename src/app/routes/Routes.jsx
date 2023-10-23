import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";

import { ROLE_ADMIN } from "../constants/rolesConstant";
import * as URL from "../constants/urls/urlFrontEnd";
import AdminHomeView from "../views/AdminHomeView";
import HomeView from "../views/HomeView";
import ProfilView from "../views/ProfilView";
import LoginView from "../views/LoginView";
import ModifProfilView from "../views/ModifProfilView";
import { PrivateRoute } from "./PrivateRoute";

/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
  return (
    <RoutesContainer>
      <Route
        path={URL.URL_HOME}
        element={
            <HomeView />
        }
      />
      <Route
        path={URL.URL_ADMIN_HOME}
        element={
          <PrivateRoute roles={[ROLE_ADMIN]}>
            <AdminHomeView />
          </PrivateRoute>
        }
      />
      <Route path={URL.URL_LOGIN} element={<LoginView />} />
      <Route path={URL.URL_PROFIL} element={<ProfilView />} />
      <Route path={URL.URL_MODIF_PROFIL} element={<ModifProfilView />} />

    </RoutesContainer>
  );
};

export default Routes;
