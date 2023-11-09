import React, { useState, useEffect } from "react";import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';
import { URL_HOME, URL_LOGIN, URL_PROFIL } from "../../constants/urls/urlFrontEnd";
import { signOut } from '../../redux-store/authenticationSlice';
import { useDispatch } from 'react-redux';

export default function ModifPassword() {
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();

    const handleEnregistrerClick = () => {
        
        setRedirect(true);
      }
     
       const formik = useFormik({
        
        initialValues: {
            ancien_mot_de_passe: '',
            nouveau_mot_de_passe: '', 
        },
        validationSchema: Yup.object({
            ancien_mot_de_passe: Yup.string().required("Champ obligatoire"),
            nouveau_mot_de_passe: Yup.string()
                .min(8, "Mot de passe trop court - minimum 8 caractères")
                .required("Champ obligatoire"),
        }),
        onSubmit: (values) => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error("Le token d'authentification est manquant.");
                return;
            }
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/profil/updatepassword',
                data: {
                    ancien_mot_de_passe: values.ancien_mot_de_passe,
                    nouveau_mot_de_passe: values.nouveau_mot_de_passe,
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
            }).then(function (response) {
                console.log(response.data);
                if (response.data.status === true) {
                    alert("Mot de passe modifié avec succès.");
                    alert(response.data.message); 
                    dispatch(signOut());
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
    });
    return (
        <form
            onSubmit={formik.handleSubmit}
            action=""
            className="flex flex-col items-center"
        >
            <div className="w-[25rem] flex flex-col space-y-8">
                <input
                    type="password"
                    className="input"
                    placeholder="Ancien mot de passe"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ancien_mot_de_passe}
                    name="ancien_mot_de_passe" 
                />
                <span>
                    {formik.touched.ancien_mot_de_passe && formik.errors.ancien_mot_de_passe ? (
                        <>{formik.errors.ancien_mot_de_passe}</>
                    ) : null}
                </span>

                <input
                    type="password"
                    className="input"
                    placeholder="Nouveau mot de passe"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nouveau_mot_de_passe}
                    name="nouveau_mot_de_passe" 
                />
                <span>
                    {formik.touched.nouveau_mot_de_passe && formik.errors.nouveau_mot_de_passe ? (
                        <>{formik.errors.nouveau_mot_de_passe}</>
                    ) : null}
                </span>

            </div>

            <button type="submit" onClick={handleEnregistrerClick} className="btn-green w-[15rem] h-[3rem] mt-[5rem]">
                Enregistrer
            </button>
            {redirect && <Navigate to="/login" />}
        </form>
    )
}    