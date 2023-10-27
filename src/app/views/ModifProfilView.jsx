import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { URL_PROFIL  } from "../constants/urls/urlFrontEnd";

import Sidebar from "../components/layouts/SideBar";
import ModifBioUser from "../components/ModifUser/ModifBioUser";
import ModifInfoUser from "../components/ModifUser/ModifInfoUser";


export default function ModifProfilView () {

    const { id } = useParams();
    const [oneUser, setOneUsers] = useState([]);

    const fetchDataUser = () => {
        axios.get (`http://127.0.0.1:8000/profil/${id}`)
        .then((res) => {
            setOneUsers(res.data);
        })
    }

    useEffect(() => {
        fetchDataUser();
    }, [])

    const formik = useFormik({
        initialValues: {
          nom: '',
          prenom: '',
          pseudo: '',
          date_de_naissance: '',
          email: '',
          adresse: '',
          code_postal: '',
          ville: '',
        },validationSchema: Yup.object({
            nom: Yup.string().required("Champ requis"),
            prenom: Yup.string().required("Champ requis"),
            pseudo: Yup.string().required("Champ requis"),
            email: Yup.string()
                .email("Adresse e-mail invalide")
                .required("Champ requis"),
            date_de_naissance: Yup.date().required("Champ requis"),
            adresse: Yup.string().required("Champ requis"),
            code_postal: Yup.string().required("Champ requis"),
            ville: Yup.string().required("Champ requis"),
        }),

        onSubmit: () => {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/updateUser/' + id,
                data: {
                    nom: formik.values.nom,
                    prenom: formik.values.prenom,
                    pseudo: formik.values.pseudo,
                    email: formik.values.email,
                    date_de_naissance: formik.values.date_de_naissance, 
                    adresse: formik.values.adresse,
                    code_postal: formik.values.code_postal,
                    ville: formik.values.ville,
                    roles: formik.values.roles

                }
            }).then(function (response) {
                console.log(response.data);
                if (response.data.status === true) {
                    window.location.href = URL_PROFIL
                    // alert(response.data.message);
                } else {
                    return (response.data.message);
                }
            }).catch(function (error) {
                console.log(error);
            });
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