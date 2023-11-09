import React, { useState, useEffect } from "react"; import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';
import { URL_HOME, URL_LOGIN, URL_PROFIL, URL_RESET_PASSWORD } from "../../constants/urls/urlFrontEnd";
import { useDispatch } from 'react-redux';

export default function SendPassword() {
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();

    const handleEnregistrerClick = () => {

        setRedirect(true);
    }

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Adresse email invalide")
                .required("Champ obligatoire"),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post('https://127.0.0.1:8000/reinitialisationmdp', {
                    email: values.email,
                });

                if (response.data.status === true) {
                    alert("Un e-mail de réinitialisation de mot de passe a été envoyé avec succès.");
                } else {
                    alert("Échec de l'envoi de l'e-mail de réinitialisation.");
                }
            } catch (error) {
                alert("Une erreur s'est produite lors de l'envoi de l'e-mail.");
            }
        },
    });
    return (
        <div className="flex justify-between items-center ml-[10%] mt-20">
            <div className="flex flex-col w-full items-center justify-between h-[25rem]">
                <form onSubmit={formik.handleSubmit}>
                    <input
                        type="email"
                        className="input"
                        placeholder="Adresse e-mail"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        name="email"
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error-message">{formik.errors.email}</div>
                    ) : null}

                    <button type="submit" onClick={handleEnregistrerClick} className="btn-green w-[15rem] h-[3rem] mt-[1rem]">
                        Envoyer l'e-mail de réinitialisation
                    </button>
                    {redirect && <Navigate to={URL_RESET_PASSWORD} />}
                </form>
            </div>

        
        </div>
    );
}