import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Sidebar from "../components/layouts/SideBar";
import NewVehicle from "../components/Vehicle/NewVehicle";
import OptionTravel from "../components/Vehicle/OptionTravel";
import FormNewVehicle from "../components/Vehicle/FormNewVehicle";
import GestionImagesVehicle from "../components/Vehicle/GestionImagesVehicle";





export default function VehicleView () {
    // const { id } = useParams();
    // const [oneUser, setOneUsers] = useState([]);

    // const fetchDataUser = () => {
    //     axios.get (`http://127.0.0.1:8000/api/users/${id}`)
    //     .then((res) => {
    //         setOneUsers(res.data);
    //     })
    // }

    // useEffect(() => {
    //     fetchDataUser();
    // }, [])

    return(
        <div className="">
            
                <img src="../../../../src/Images/Car2.png" alt="" className="object-cover h-[30rem] w-full"/>
                
                    <Sidebar/>

                <h4 className="text-center uppercase font-bold text-[#114076] mt-8">Gestion des véhicules</h4>
            <div className="flex flex-col justify-between">
                <div className="flex h-[30rem] mt-16">
                    <FormNewVehicle />
                    <GestionImagesVehicle />
                </div>
                
                <div className="">
                    <OptionTravel />
                </div>
            </div>

            <div className="">
                <NewVehicle />
            </div>
        </div>
    )
}