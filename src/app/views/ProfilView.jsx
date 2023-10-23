import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import BioUser from "../components/user/BioUser";
import InfoUser from "../components/user/InfoUser";
import Sidebar from "../components/user/SIdeBar";




export default function ProfilView () {


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