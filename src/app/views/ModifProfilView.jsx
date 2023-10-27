import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';



import Sidebar from "../components/layouts/SideBar";
import ModifBioUser from "../components/ModifUser/ModifBioUser";
import ModifInfoUser from "../components/ModifUser/ModifInfoUser";


export default function ModifProfilView () {

    // const { id } = useParams();
    // const [oneUser, setOneUsers] = useState([]);

    // const fetchDataUser = () => {
    //     axios.get (`http://127.0.0.1:8000/un_utilisateur/{id}`)
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
                        <ModifBioUser/>
                    </div>
                    <div className="w-[50rem]">
                        <ModifInfoUser/>

                       
                    </div>
                </div>

        </div>
    )
}