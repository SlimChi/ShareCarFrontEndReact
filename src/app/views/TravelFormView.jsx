import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom"; // Importez Navigate
import axios from "axios";

import FormNewTravel from "../components/travel/addTravel/FormNewTravel";
import VehiculeChoice from "../components/travel/addTravel/vehiculeChoice";

export default function TravelFormView() {
  // const [redirect, setRedirect] = useState(false);

  // const handleEnregistrerClick = () => {
    // Effectuez des vérifications ou des actions avant la redirection

    // Activer la redirection vers la page URL_ADD_IMG_VEHICLE
  //   setRedirect(true);
  // }

  return (
    <div className="">
     
        <img
          src="../../../../src/Images/map1.png"
          alt=""
          className="object-cover h-[30rem] w-full"
        />
        
        <h1 className="text-center uppercase font-bold text-3xl text-[#114076] mt-8 mb-12" >
          VOTRE TRAJET
        </h1>
        <form action=""> 
          <FormNewTravel/>

          <VehiculeChoice />

          {/* Ajoutez un gestionnaire d'événements pour le bouton "ENREGISTRER" */}
          <div className="flex justify-center mt-12 mb-12">
            <button
              className="btn-green block rounded-md w-[12rem] h-[3rem] mt-16 mb-4 text-[14px]"
              // onClick={handleEnregistrerClick} // Appel de la fonction handleEnregistrerClick
            >
              ENREGISTRER
            </button>
          </div>
        
      </form>
    </div>
  );
}
