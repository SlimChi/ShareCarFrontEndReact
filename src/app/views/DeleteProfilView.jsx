import axios from 'axios';
import React, { useState } from "react";
import Sidebar from "../components/layouts/SideBar";
import { useNavigate } from 'react-router-dom';
import { URL_REGISTER } from '../constants/urls/urlFrontEnd';
import { removeToken } from '../services/tokenServices';
import { useDispatch } from 'react-redux';
import { signOut } from '../redux-store/authenticationSlice';

export default function ModifProfilView() {
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false); // État pour afficher l'alerte de succès
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const desactiverCompte = async () => {
        const shouldDelete = window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ?");

        if (!shouldDelete) {
            // L'utilisateur a annulé la suppression
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error("Le token d'authentification est manquant.");
            return;
        }

        try {
            const response = await axios.post('https://127.0.0.1:8000/api/desactiver_profil', {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
            });

            console.log(response.data);
            removeToken();

            dispatch(signOut());
            // Afficher un message de succès
            setSuccessMessage('Votre compte a été désactivé avec succès.');
            setIsSuccessAlertVisible(true); // Afficher l'alerte de succès

            // Rediriger l'utilisateur vers la page d'inscription
            navigate(URL_REGISTER);
        } catch (error) {
            console.error(error);

            if (error.response) {
                // Erreur renvoyée par le backend
                setErrorMessage(error.response.data.message); // Remplacez "message" par le champ approprié dans la réponse du backend.
            } else {
                // Erreur inattendue
                setErrorMessage('Une erreur inattendue s\'est produite. Veuillez réessayer.');
            }
        }
    };

    return (
        <div className="">
            <img src="../../../../src/Images/delete.png" alt="" className="object-cover h-[30rem] w-full" />
            <Sidebar />
            {isSuccessAlertVisible && (
                <div className="bg-green-200 p-2 text-green-800 mb-4 rounded-md">
                    {successMessage}
                </div>
            )}
            <div className="flex flex-col justify-evenly items-center mt-8 mb-12">
                <h4 className="w-[25rem]">
                    Êtes-vous sûr de vouloir supprimer votre compte ?
                </h4>
                <button type="button" onClick={desactiverCompte} className="btn-green w-[15rem] h-[3rem] mt-[5rem]">
                    Enregistrer
                </button>
            </div>
        </div>
    );
}
