import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import BioUser from "../components/user/BioUser";
import InfoUser from "../components/user/InfoUser";
import Sidebar from "../components/user/SIdeBar";




export default function ProfilView () {
    // const { id } = useParams();
    // const [OneUser, setOneUsers] = useState([]);

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
            
                <img src="../../../../src/Images/covoit2.png" alt="" className="object-cover h-[30rem] w-full"/>
                
                    <Sidebar/>

            
            <div className="flex flex-row justify-evenly">
               <div className="w-[20rem]">
                    <BioUser/>
                </div>
                <div className="w-[50rem]">
                    <InfoUser/>
                </div>
            </div>
        </div>
    )
}