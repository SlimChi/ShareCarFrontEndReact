import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "../components/layouts/SideBar";

import { BsCarFront } from "react-icons/bs";
import { PiBackpack } from "react-icons/pi";
import { PiSuitcaseRolling } from "react-icons/pi";
import { URL_ADD_VEHICLE } from "../constants/urls/urlFrontEnd";
import CarouselVehicle from "../components/Vehicle/CarouselVehicle";


import { HiOutlineUsers } from "react-icons/hi";


export default function VehicleView () {

    return (
        <div>
            <img src="../../../../src/Images/Car2.png" alt="" className="object-cover h-[30rem] w-full"/>
            
                <Sidebar/>

            <h4 className="text-center uppercase font-bold text-[#114076] mt-8 mb-[5rem]">Gestion des véhicules</h4>

            <div className="flex justify-end mr-[7rem]">
                <Link to={URL_ADD_VEHICLE}>
                    <button className="btn-green-inverse text-sm">AJOUTER UN VEHICULE</button>
                </Link>
                <button className="btn-green-inverse text-sm ml-12">SUPPRIMER MON VEHICULE</button>
            </div>

            <div className="px-8 pt-6 w-[25rem] ml-[5rem] mt-8">
                <h6 className="font-bold text-[#114076] mb-8">MON VEHICULE</h6>
            </div>

            <Vehicle/>


                
        
    </div>
    );
}