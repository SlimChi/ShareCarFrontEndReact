import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { URL_PROFIL  } from "../../constants/urls/urlFrontEnd";

export default function ModifPassword () {


    const formik = useFormik({
        initialValues: {
         mot_de_passe:'',
        },validationSchema: Yup.object({
            mot_de_passe: Yup.string()
                .min(8, "Mot de passe trop court - minimum 8 caractères")
        }),

        onSubmit: () => {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/profil/',
                data: {
                    mot_de_passe: formik.values.mot_de_passe,

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
        <form 
            onSubmit={formik.handleSubmit}
            action="" 
            className="flex flex-col items-center"
            >
                <div className="w-[25rem] flex flex-col space-y-8">
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Mot de passe"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mot_de_passe}/>
                        <span>
                            {formik.touched.mot_de_passe && formik.errors.mot_de_passe ? (
                                <>{formik.errors.mot_de_passe}</>
                            ) : null}
                        </span>

                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Nouveau mot de passe"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mot_de_passe}/>
                        <span>
                            {formik.touched.mot_de_passe && formik.errors.mot_de_passe ? (
                                <>{formik.errors.mot_de_passe}</>
                            ) : null}
                        </span>
                </div>

                <button type="submit" className="btn-green w-[15rem] h-[3rem] mt-[5rem]">
                    Enregistrer
                </button>
        </form>
    )
    
}