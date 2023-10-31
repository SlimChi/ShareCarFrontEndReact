import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { URL_PROFIL  } from "../../constants/urls/urlFrontEnd";

import { IoIosStar } from "react-icons/io";
import { BsPen } from "react-icons/bs";


const ModifInfoUser = () => {

    const [oneUser, setOneUser] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            url: 'http://127.0.0.1:8000/api/profil',
        }).then(function (response) {
            console.log(response.data);
            setOneUser(response.data);

        })
    }, []);

    const formik = useFormik({
        initialValues: {
          nom:  oneUser.nom,
          prenom:  oneUser.prenom,
          pseudo: oneUser.pseudo,
          date_de_naissance: '' || oneUser.date_de_naissance,
          email: oneUser.email,
          adresse: '' || oneUser.adresse,
          code_postal: '' || oneUser.code_postal,
          ville: '' || oneUser.ville,
        },validationSchema: Yup.object({
            email: Yup.string()
                .email("Adresse e-mail invalide")
        }),

        onSubmit: () => {
            axios({
                method: 'put',
                url: `http://127.0.0.1:8000/api/profil_modif`, 
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                data: {
                    nom: formik.values.nom ?? oneUser.nom,
                    prenom: formik.values.prenom ?? oneUser.prenom,
                    pseudo: formik.values.pseudo ?? oneUser.pseudo,
                    email: formik.values.email ?? oneUser.email,
                    date_de_naissance: formik.values.date_de_naissance ?? oneUser.date_de_naissance, 
                    adresse: formik.values.adresse ?? oneUser.adresse,
                    code_postal: formik.values.code_postal ?? oneUser.code_postal,
                    ville: formik.values.ville ?? oneUser.ville,
                    // roles: formik.values.roles

                }
            }).then(function (response) {
                console.log(response.data);
                if (response.data.status === true) {
                    window.location.href = URL_PROFIL
                } else {
                    return (response.data.message);
                }
            }).catch(function (error) {
                console.log(error);
            });
        },

    })

    
    return (
        <div className="flex flex-col justify-between h-[33rem]">
            <div className="mt-4 flex justify-between">
                <div className="flex items-center justify-between w-[6rem]">
                    <IoIosStar className="text-[yellow] text-4xl"/>
                    <p className="">4.5 / 5</p>
                </div>
                <div className="flex flex-col ">
                    <p>Membre depuis : <em>oct 2023</em></p>
                    <p>Nbre de points : <em>2 500</em></p>
                </div>
            </div>
            <div className="flex justify-end">
               <BsPen /> 
            </div>
            
        <form onSubmit={formik.handleSubmit} >
            <div className="flex flex-col justify-between mt-8 w-[35rem]">
                <div className="flex flex-col justify-evenly h-[15rem]">
                    <input 
                        type="text"
                        id="nom"
                        name="nom"
                        placeholder={oneUser.nom}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nom}
                        className="input"/>
                    
                    <input 
                        type="text"
                        id="prenom"
                        name="prenom"
                        placeholder={oneUser.prenom}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.prenom}
                        className="input"/>
                  
                    <input 
                        type="text"
                        id="pseudo"
                        name="pseudo"
                        placeholder={oneUser.pseudo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.pseudo}
                        className="input"/>
           
                    <input 
                        type="date"
                        id="date_de_naissance"
                        name="date_de_naissance"
                        placeholder={formik.values.date_de_naissance}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date_de_naissance}
                        className="input"/>
                
                    <input 
                        type="Email"
                        id="email"
                        name="email"
                        placeholder={oneUser.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className="input"/>
                        <span>
                            {formik.touched.email && formik.errors.email ? (
                                <>{formik.errors.email}</>
                            ) : null}
                        </span>
                </div>

                <div className="flex flex-col justify-evenly h-[7rem]">
                    <input
                        type="text"
                        id="adresse"
                        name="adresse"
                        placeholder={oneUser.adresse}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.adresse}
                        className="input"/>
                
                    <div className="flex flex-row">
                        <input 
                            type="text"
                            id="code_postal"
                            name="code_postal"
                            placeholder={oneUser.code_postal}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.code_postal}
                            className="input w-[10rem]"/>
                        <input
                            type="text"
                            id="ville" 
                            name="ville"
                            placeholder={oneUser.ville}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ville}
                            className="input"/>
                    </div>
                    
                </div>
            </div>
            <button type="submit" className="btn-green w-[15rem] h-[3rem] mt-[5rem]">
                Enregistrer
            </button>
            </form>
        </div>
         );
};

export default ModifInfoUser;