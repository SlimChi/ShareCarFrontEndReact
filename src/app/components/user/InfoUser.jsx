import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosStar } from "react-icons/io";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";
import { useNavigate  } from 'react-router-dom';

const InfoUser = () => {
    const [oneUser, setOneUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios({
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            url: "https://127.0.0.1:8000/api/profil",
        })
            .then(function (response) {
                setOneUser(response.data);
            })
            .catch(function (err) {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


    const calculateAge = () => {
        if (oneUser && oneUser.date_de_naissance) {
            const birthDate = new Date(oneUser.date_de_naissance);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            return age;
        }
        return null;
    };
    
    if (!oneUser) {
        navigate("/login");
    }

    return (
        <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <p className="text-red-500 text-2xl font-semibold mt-4">Erreur lors de la récupération des données</p>
            ) : oneUser ? (
                <div>

                        <div className="shadow-md rounded-md p-6 w-[50rem]">
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <p className="text-lg font-semibold">Membre depuis :</p>
                                    <p> <em>
                                        {new Date(oneUser.date_inscription).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'long',
                                        })}
                                    </em></p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-lg font-semibold">Nbre de points :</p>
                                    <p><em>{oneUser.credit_jeton}</em></p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <IoIosStar className="text-[yellow] text-3xl" />
                                    <p className="text-3xl font-semibold ml-8">4.5 / 5</p>
                                </div>
                            </div>
                        </div>
            

                    <div className=" shadow-md rounded-md p-6 w-[50rem] mt-12">
                        <h3 className="text-2xl font-semibold text-[#114076]">Informations personnelles :</h3>
                        <div className="divide-y divide-gray-100">
                            <div className="flex flex-row justify-between ">
                                <div className="flex items-center py-4 w-[20rem]">
                                    <p className="font-semibold mr-4">Prénom :</p>
                                    <p>{oneUser.prenom}</p>
                                </div>
                                <div className="flex items-center py-6 w-[20rem] ">
                                    <p className="font-semibold mr-4">Nom :</p>
                                    <p>{oneUser.nom}</p>
                                </div>
                                <div className="flex items-center py-6 w-[20rem]">
                                    <p className="font-semibold mr-4">Age :</p>
                                    <p>{calculateAge()}</p>
                                </div>
                            </div>

                            <div className="flex items-center py-6 w-[20rem] ">
                                <p className="font-semibold mr-4">Pseudo :</p>
                                <p>{oneUser.pseudo}</p>
                            </div>
                            
                            <div className="flex items-center py-6 w-[20rem]">
                                <p className="font-semibold mr-4">Email :</p>
                                <p>{oneUser.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md rounded-md p-6 w-[50rem]">
                        <h3 className="text-2xl font-semibold text-[#114076]">Coordonnées :</h3>
                        {/* <div className="mt-4 divide-y divide-gray-100"> */}
                            <div className="flex py-2 mt-4 mb-4">
                                <p className="font-semibold mr-4">Adresse :</p>
                                <p>{oneUser.adresse}</p>
                            </div>
                            <div className="py-2">
                                <div className="flex mt-4 mb-4">
                                    <p className="font-semibold mr-4">Code postal :</p>
                                    <p>{oneUser.code_postal}</p>
                                </div>
                                <div className="flex mt-4 mb-4">
                                    <p className="font-semibold mr-4">Ville :</p>
                                    <p>{oneUser.ville}</p>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            ) : (
                <p className="text-red-500 text-2xl font-semibold mt-4">Aucune donnée utilisateur disponible</p>
            )}
        </div>
    );
};

export default InfoUser;