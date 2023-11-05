import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

import { URL_LOGIN  } from "../../constants/urls/urlFrontEnd";


function Register() {



    const formik = useFormik({
        initialValues: {
            nom: "",
            prenom: "",
            pseudo: "",
            email: "",
            mot_de_passe: "",
        },
        validationSchema: Yup.object({
            nom: Yup.string().required("Champ requis"),
            prenom: Yup.string().required("Champ requis"),
            pseudo: Yup.string().required("Champ requis"),
            email: Yup.string()
                .email("Adresse e-mail invalide")
                .required("Champ requis"),
            mot_de_passe: Yup.string()
                .min(8, "Mot de passe trop court - minimum 8 caractères")
                .required("Champ requis"),
        }),
        onSubmit: () => {
            axios({
                method: 'post',
                url: 'https://127.0.0.1:8000/inscription',
                data: {
                    nom: formik.values.nom,
                    prenom: formik.values.prenom,
                    pseudo: formik.values.pseudo,
                    email: formik.values.email,
                    mot_de_passe: formik.values.mot_de_passe,
                    roles: formik.values.roles

                }
            }).then(function (response) {
                console.log(response.data);
                if (response.data.status === true) {
                    window.location.href = URL_LOGIN;
                    // alert(response.data.message);
                } else {
                    return (response.data.message);
                }
            }).catch(function (error) {
                console.log(error);
            });
        }

    })


    return (
        <div className="w-full max-w-md space-y-8 rounded-md  p-4 py-12 px-4  sm:px-6 lg:px-8">
           
                <h2 className="mt-16 text-center text-2xl font-bold text-[#114076]">
                  INSCRIPTION
                </h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="flex flex-col space-y-3 ">
                        <input

                            className="input"
                            name="nom"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.nom}
                            placeholder="nom" />
                        <span>
                            {formik.touched.nom && formik.errors.nom ? (
                                <>{formik.errors.nom}</>
                            ) : null}
                        </span>
                        <input

                            className="input"
                            name="prenom"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.prenom}
                            placeholder="prenom" />
                        <span>
                            {formik.touched.prenom && formik.errors.prenom ? (
                                <>{formik.errors.prenom}</>
                            ) : null}
                        </span>
                        <input

                            className="input"
                            name="pseudo"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.pseudo}
                            placeholder="pseudo" />
                        <span>
                            {formik.touched.pseudo && formik.errors.pseudo ? (
                                <>{formik.errors.pseudo}</>
                            ) : null}
                        </span>
                        <input

                            className="input"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Email" />
                        <span>
                            {formik.touched.email && formik.errors.email ? (
                                <>{formik.errors.email}</>
                            ) : null}
                        </span>

                        <input
                            type="password"
                            className="input"
                            name="mot_de_passe"
                            placeholder="Mot de passe"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.mot_de_passe}
                        />
                        <span>
                            {formik.touched.mot_de_passe && formik.errors.mot_de_passe ? (
                                <>{formik.errors.mot_de_passe}</>
                            ) : null}
                        </span>
                       
                        </div>
                        <button
                            type="submit"
                            className="btn-green block w-full h-[3rem] mt-16 mb-8">
                        S'inscrire
                        </button>
                        <p className="text-[#114076]"><em>J'ai déjà un compte,</em> <Link to={URL_LOGIN} className="bold text-[#57B526] hover:text-[#87e824]">me connecter.</Link></p>
                    </form>
       


            </div>


    );
}


export default Register;
