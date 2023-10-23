import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import Sidebar from "../components/user/SIdeBar";
import ModifBioUser from "../components/ModifUser/ModifBioUser";
import ModifInfoUser from "../components/ModifUser/ModifInfoUser";


export default function ModifProfilView () {


    return(
        <div className="">
            
                <img src="../../../../src/Images/covoit2.png" alt="" className="object-cover h-[30rem] w-full"/>
                
                    <Sidebar/>

            
            <div className="flex flex-row justify-evenly">
               <div className="w-[20rem]">
                    <ModifBioUser/>
                </div>
                <div className="w-[50rem]">
                    <ModifInfoUser/>
                </div>
            </div>
        </div>
    )
}