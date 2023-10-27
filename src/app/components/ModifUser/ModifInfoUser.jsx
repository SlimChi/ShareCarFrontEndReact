import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { URL_PROFIL  } from "../../constants/urls/urlFrontEnd";

import { IoIosStar } from "react-icons/io";
import { BsPen } from "react-icons/bs";


const ModifInfoUser = () => {
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
            email: Yup.string()
                .email("Adresse e-mail invalide")
        }),

        onSubmit: () => {
            axios({
                method: 'post',
                url: `http://127.0.0.1:8000/profil`, 
                data: {
                    // nom: formik.values.nom,
                    // prenom: formik.values.prenom,
                    // pseudo: formik.values.pseudo,
                    // email: formik.values.email,
                    date_de_naissance: formik.values.date_de_naissance, 
                    adresse: formik.values.adresse,
                    code_postal: formik.values.code_postal,
                    ville: formik.values.ville,
                    // roles: formik.values.roles

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
                        // placeholder={formik.values.nom}
                        placeholder="Nom"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nom}
                        className="input"/>
                    
                    <input 
                        type="text"
                        id="prenom"
                        name="prenom"
                        placeholder="Prenom"
                        // placeholder={formik.values.prenom}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.prenom}
                        className="input"/>
                  
                    <input 
                        type="text"
                        id="pseudo"
                        name="pseudo"
                        placeholder="Pseudo"
                        // placeholder={formik.values.pseudo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.pseudo}
                        className="input"/>
           
                    <input 
                        type="date"
                        id="date_de_naissance"
                        name="date_de_naissance"
                        placeholder="Date de naissance"
                        // placeholder={formik.values.date_de_naissance}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date_de_naissance}
                        className="input"/>
                
                    <input 
                        type="Email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        // placeholder={formik.values.email}
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
                        placeholder="Adresse"
                        // placeholder={formik.values.adresse}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.adresse}
                        className="input"/>
                
                    <div className="flex flex-row">
                        <input 
                            type="text"
                            id="code_postal"
                            name="code_postal"
                            placeholder="Code postal"
                            // placeholder="{oneUser.code_postal}"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.code_postal}
                            className="input w-[10rem]"/>
                        <input
                            type="text"
                            id="ville" 
                            name="ville" 
                            placeholder="Ville"
                            // placeholder={formik.values.ville}
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