import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

import { URL_LOGIN } from "../../constants/urls/urlFrontEnd";

function Register() {
    const [error, setError] = useState(""); // State pour stocker les erreurs

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
            confirmer_mot_de_passe: Yup
                .string()
                .oneOf([Yup.ref('mot_de_passe')], 'Les mots de passe ne sont pas identiques')
        }),
        onSubmit: () => {
            setError("");

            axios({
                method: 'post',
                url: 'https://127.0.0.1:8000/register',
                data: {
                    nom: formik.values.nom,
                    prenom: formik.values.prenom,
                    pseudo: formik.values.pseudo,
                    email: formik.values.email,
                    mot_de_passe: formik.values.mot_de_passe,
                    roles: formik.values.roles
                }
            }).then(function (response) {
                if (response.data.status === true) {
                    window.location.href = URL_LOGIN;
                } else {
                    setError(response.data.message);
                }
            }).catch(function (error) {
                if (error.response) {

                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    setError(error.response.data.message);
                } else if (error.request) {

                    console.log(error.request);
                } else {

                    console.log('Error', error.message);
                }
                console.log(error.config);
            });

        }
    })

    return (
        <div className="w-full max-w-md space-y-8 rounded-md p-4 py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="mt-16 text-center text-2xl font-bold text-[#114076]">
                INSCRIPTION
            </h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col space-y-3 ">
                    <input
                        className="input"
                        name="nom"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nom}
                        placeholder="Nom"
                    />
                    {formik.touched.nom && formik.errors.nom && (
                        <span className="text-red-500">{formik.errors.nom}</span>
                    )}
                    <input
                        className="input"
                        name="prenom"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.prenom}
                        placeholder="Prénom"
                    />
                    {formik.touched.prenom && formik.errors.prenom && (
                        <span className="text-red-500">{formik.errors.prenom}</span>
                    )}
                    <input
                        className="input"
                        name="pseudo"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.pseudo}
                        placeholder="Pseudo"
                    />
                    {formik.touched.pseudo && formik.errors.pseudo && (
                        <span className="text-red-500">{formik.errors.pseudo}</span>
                    )}
                    <input
                        className="input"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="Email"
                    />
                    {formik.touched.email && formik.errors.email && (
                        <span className="text-red-500">{formik.errors.email}</span>
                    )}
                    <input
                        type="password"
                        className="input"
                        name="mot_de_passe"
                        placeholder="Mot de passe"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mot_de_passe}
                    />
                    {formik.touched.mot_de_passe && formik.errors.mot_de_passe && (
                        <span className="text-red-500">{formik.errors.mot_de_passe}</span>
                    )}
                    <input
                        type="password"
                        className="input"
                        name="confirmer_mot_de_passe"
                        placeholder="Confirmer mot de passe"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmer_mot_de_passe}
                    />
                    {formik.touched.confirmer_mot_de_passe && formik.errors.confirmer_mot_de_passe && (
                        <span className="text-red-500">{formik.errors.confirmer_mot_de_passe}</span>
                    )}
                </div>
                <button
                    type="submit"
                    className="btn-green block rounded-md w-full h-[3rem] mt-16 mb-8"
                >
                    S'inscrire
                </button>
                <p className="text-[#114076]">
                    <em>J'ai déjà un compte,</em>{" "}
                    <Link to={URL_LOGIN} className="bold text-[#57B526] hover:text-[#87e824]">
                        me connecter.
                    </Link>

                </p>
            </form>
        </div>
    );
}

export default Register;
