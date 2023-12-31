import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';



import Sidebar from "../components/layouts/SideBar";
import ModifBioUser from "../components/modifuser/ModifBioUser";
import ModifInfoUser from "../components/modifuser/ModifInfoUser";


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