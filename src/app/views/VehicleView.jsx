import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Sidebar from "../components/layouts/SideBar";
import NewVehicle from "../components/Vehicle/NewVehicle";
import OptionTravel from "../components/Vehicle/OptionTravel";
import FormNewVehicle from "../components/Vehicle/FormNewVehicle";





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

            
            <div className="flex flex-coljustify-evenly">
               <div className="w-[20rem]">
                    <FormNewVehicle />
                </div>
                <div className="w-[50rem]">
                    <OptionTravel />
                </div>
            </div>

            <div className="">
                <NewVehicle />
            </div>
        </div>
    )
}