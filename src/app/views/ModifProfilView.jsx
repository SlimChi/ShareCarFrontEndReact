import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';



import Sidebar from "../components/user/SIdeBar";
import ModifBioUser from "../components/ModifUser/ModifBioUser";
import ModifInfoUser from "../components/ModifUser/ModifInfoUser";


export default function ModifProfilView () {

    const formik = useFormik({
        initialValues: {
          firstname: '',
          lastname: '',
          username: '',
          date: '',
          email: '',
          adresse: '',
          zipcode: '',
          city: '',
        },

        onSubmit: (values) => {
            axios
            .post('http://127.0.0.1:8000/api/users',values)
            .then((response) => {
                console.log(response.status, response.data.token);
                JSON.stringify(values);
                console.log(values);
            })
          console.log(values);
        },

    })

    return(
        <div className="">
            <form onSubmit={formik.handleSubmit} >
             
                <img src="../../../../src/Images/covoit2.png" alt="" className="object-cover h-[30rem] w-full"/>
                
                    <Sidebar/>

            
            <div className="flex flex-row justify-evenly">
               <div className="w-[20rem]">
                    <ModifBioUser/>
                </div>
                <div className="w-[50rem]">
                    <ModifInfoUser/>

                    <button type="submit" className="btn-green w-[15rem] h-[3rem] mt-[5rem]">Enregistrer</button>
                </div>
            </div>
            </form>
        </div>
    )
}