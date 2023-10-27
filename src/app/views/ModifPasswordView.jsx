import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

import ModifPassword from "../components/Password/ModifPassword";
import Sidebar from "../components/layouts/SideBar";



export default function ModifPasswordView () {



    return (
        <div className="">
        
         
            <img src="../../../../src/Images/pass.png" alt="" className="object-cover h-[30rem] w-full"/>
            
                <Sidebar/>

        
            <div className="flex flex-col justify-evenly items-center mt-4 h-[30rem]">
                <h2 className="text-center text-2xl font-bold text-[#114076]">
                    Modification du mot de passe
                </h2>

                <ModifPassword/>

                
            </div>
     
    </div>
    )

}