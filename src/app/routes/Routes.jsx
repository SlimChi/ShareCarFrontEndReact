import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";

import { ROLE_ADMIN, ROLE_USER } from "../constants/rolesConstant";
import * as URL from "../constants/urls/urlFrontEnd";
import { PrivateRoute } from "./PrivateRoute";

import AdminHomeView from "../views/AdminHomeView";
import HomeView from "../views/HomeView";

import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView"; // Les pages d'inscription et de connexion

import ProfilView from "../views/ProfilView";
import ModifProfilView from "../views/ModifProfilView";
import DeleteProfilView from "../views/DeleteProfilView";

import ModifPasswordView from "../views/ModifPasswordView";
import SendPasswordView from "../views/SendPasswordView";

import VehicleView from "../views/VehicleView";

const Routes = () => {
  return (
    <RoutesContainer>
      <Route path={URL.URL_HOME} element={<HomeView />} />
      <Route path={URL.URL_ADMIN_HOME} element={<PrivateRoute roles={[ROLE_ADMIN]}><AdminHomeView /></PrivateRoute>} />

      {/* Les pages d'inscription et de connexion sans PrivateRoute */}
      <Route path={URL.URL_LOGIN} element={<LoginView />} />
      <Route path={URL.URL_REGISTER} element={<RegisterView />} />

      {/* Les autres pages protégées par PrivateRoute */}
      <Route path={URL.URL_PROFIL} element={<PrivateRoute roles={[ROLE_USER]}><ProfilView /></PrivateRoute>} />
      <Route path={URL.URL_MODIF_PROFIL} element={<ModifProfilView />} />
      <Route path={URL.URL_DELETE_PROFIL} element={<DeleteProfilView />} />
      <Route path={URL.URL_MODIF_PASSWORD} element={<ModifPasswordView />} />
      <Route path={URL.URL_SEND_PASSWORD} element={<SendPasswordView />} />
      <Route path={URL.URL_VEHICLES} element={<VehicleView />} />
    </RoutesContainer>
  );
};

export default Routes;
