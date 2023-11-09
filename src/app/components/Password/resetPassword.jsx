import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { URL_LOGIN } from "../../constants/urls/urlFrontEnd";

export default function ResetPassword() {
    const { token } = useParams();
    console.log(token);
    const [resetSuccess, setResetSuccess] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const formik = useFormik({
        initialValues: {
            newpassword: '',
        },
        validationSchema: Yup.object({
            newpassword: Yup.string()
                .min(8, "Mot de passe trop court - minimum 8 caractères")
                .required("Champ obligatoire"),
        }),
        onSubmit: (values) => {
            axios.post(`https://127.0.0.1:8000/resetpassword/${token}`, {
                newpassword: values.newpassword,
            })
            .then(function (response) {
                console.log("Réponse du backend : ", response.data);

                if (response.data.status === true) {
                    alert(response.data.message);
                    setResetSuccess(true);
                    navigate(URL_LOGIN);
                } else {
                    setErrors([response.data.message]);
                }
            })
            .catch(function (error) {
                console.log("Erreur lors de la requête : ", error);
                if (error.response && error.response.data && error.response.data.message) {
                    setErrors([error.response.data.message]);
                } else {
                    console.log(error);
                }
            });
        },
    });

    return (
        <div>
            <form
                onSubmit={formik.handleSubmit}
                action=""
                className="flex flex-col mt-[25rem] items-center"
            >
                {errors.length > 0 && (
                    <div className="text-red-500">
                        {errors.map((error, index) => (
                            <p key={index}>{error}</p>
                        ))}
                    </div>
                )}
                <div className="w-[25rem] flex flex-col space-y-8">
                    <input
                        type="password"
                        className="input"
                        placeholder="Nouveau mot de passe"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.newpassword}
                        name="newpassword"
                    />
                    <span>
                        {formik.touched.newpassword && formik.errors.newpassword ? (
                            <>{formik.errors.newpassword}</>
                        ) : null}
                    </span>
                </div>

                <button type="submit" className="btn-green w-[15rem] h-[3rem] mt-[5rem]">
                    Enregistrer
                </button>
            </form>
        </div>
    );
}
