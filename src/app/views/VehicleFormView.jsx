import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Sidebar from "../components/layouts/SideBar";
import OptionTravel from "../components/Vehicle/OptionTravel";
import FormNewVehicle from "../components/Vehicle/FormNewVehicle";

export default function VehiculeFormView() {

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
          
{/* mettre la redirection si le formulaire est rempli on passe a l'insersion d'images URL_ADD_IMG_VEHICLE */}
          <div className="flex justify-end mr-[7rem] mb-8">
            <button className="btn-green block rounded-md w-[12rem] h-[3rem] mt-16 mb-4 text-[14px]">
              ENREGISTRER
            </button>
          </div>
        
        
      </form>
    </div>
  );
}
