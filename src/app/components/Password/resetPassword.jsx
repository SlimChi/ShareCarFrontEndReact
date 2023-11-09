import React, { useState } from "react"; import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';

export default function ResetPassword() {
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);

    const handleEnregistrerClick = () => {

        setRedirect(true);
    }

    const formik = useFormik({

        initialValues: {
            nouveau_mot_de_passe: '',
        },
        validationSchema: Yup.object({
            nouveau_mot_de_passe: Yup.string()
                .min(8, "Mot de passe trop court - minimum 8 caractères")
                .required("Champ obligatoire"),
        }),
        onSubmit: (values) => {
            axios({
                method: 'post',
                url: 'https://127.0.0.1:8000/reinitialisationmdp',
                data: {
                    nouveau_mot_de_passe: values.nouveau_mot_de_passe,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(function (response) {
                console.log(response.data);
                if (response.data.status === true) {
                    alert("Mot de passe modifié avec succès.");
                    alert(response.data.message);
                }
            }).catch(function (error) {
                console.log(error);
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
                <div className="w-[25rem] flex flex-col space-y-8">
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
        </div>

    )
}    