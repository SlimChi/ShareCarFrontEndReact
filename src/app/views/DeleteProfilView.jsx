import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";



import Sidebar from "../components/layouts/SideBar";



export default function ModifProfilView () {

    return (
        <div className="">
        
         
            <img src="../../../../src/Images/delete.png" alt="" className="object-cover h-[30rem] w-full"/>
            
                <Sidebar/>

        
            <div className="flex flex-col justify-evenly items-center mt-8">
                    <h4 className="w-[25rem]" >
                    Etes vous sûre de vouloir supprimer votre compte ?
                    </h4>

                    <button type="submit" className="btn-green w-[15rem] h-[3rem] mt-[5rem]">
                        Enregistrer
                    </button>
            </div>
     
    </div>
    )

}