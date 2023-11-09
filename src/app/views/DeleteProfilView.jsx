import axios from 'axios';
import React, { useState } from "react";



import Sidebar from "../components/layouts/SideBar";



export default function ModifProfilView() {
    const desactiverCompte = async () => {
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
            // Redirigez l'utilisateur vers la page de déconnexion ou affichez un message de succès.
        } catch (error) {
            console.error(error);
            // Gérez les erreurs ici, par exemple en affichant un message d'erreur à l'utilisateur.
        }
    };

    return (
        <div className="">


            <img src="../../../../src/Images/delete.png" alt="" className="object-cover h-[30rem] w-full" />

            <Sidebar />


            <div className="flex flex-col justify-evenly items-center mt-8 mb-12">
                <h4 className="w-[25rem]" >
                    Etes vous sûre de vouloir supprimer votre compte ?
                </h4>

                <button type="button" onClick={desactiverCompte} className="btn-green w-[15rem] h-[3rem] mt-[5rem]">
                    Enregistrer
                </button>
            </div>

        </div>
    )
    }