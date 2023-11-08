import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom"; // Importez Navigate
import axios from "axios";

import Sidebar from "../components/layouts/SideBar";
import OptionTravel from "../components/Vehicle/OptionTravel";
import FormNewVehicle from "../components/Vehicle/FormNewVehicle";

export default function VehiculeFormView() {
  const [redirect, setRedirect] = useState(false);

  const handleEnregistrerClick = () => {
    // Effectuez des vérifications ou des actions avant la redirection

    // Activer la redirection vers la page URL_ADD_IMG_VEHICLE
    setRedirect(true);
  }

  return (
    <div className="">
     
        <img
          src="../../../../src/Images/Car2.png"
          alt=""
          className="object-cover h-[30rem] w-full"
        />
        <Sidebar />
        <h4 className="text-center uppercase font-bold text-[#114076] mt-8 mb-12" >
          AJOUTER UN VEHICULE
        </h4>
        <form action=""> 
          <FormNewVehicle/>

          <OptionTravel />
          
          {/* Ajoutez un gestionnaire d'événements pour le bouton "ENREGISTRER" */}
          <div className="flex justify-end mr-[7rem] mb-8">
            <button
              className="btn-green block rounded-md w-[12rem] h-[3rem] mt-16 mb-4 text-[14px]"
              onClick={handleEnregistrerClick} // Appel de la fonction handleEnregistrerClick
            >
              ENREGISTRER
            </button>
          </div>
        
          {/* Redirection vers URL_ADD_IMG_VEHICLE si redirect est vrai */}
          {redirect && <Navigate to="/add-img-vehicle" />}
        
      </form>
    </div>
  );
}
