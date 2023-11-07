import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosStar } from "react-icons/io";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";

const InfoUser = () => {
    const [oneUser, setOneUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios({
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            url: "http://127.0.0.1:8000/api/profil",
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
        let today = new Date();
        let birthDate = new Date(oneUser.date_de_naissance);
        let age = today.getFullYear() - birthDate.getFullYear();
        return age;
      };

    return (
        <div className="flex flex-col justify-center items-center h-[33rem]">
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <p>Erreur lors de la récupération des données</p>
            ) : oneUser ? (
                <div>
                    <div className="mt-4 flex justify-between">
                            <div className="flex items-center justify-between w-[6rem]">
                                <IoIosStar className="text-[yellow] text-4xl" />
                                <p className="">4.5 / 5</p>
                            </div>
                        <div className="mt-4 flex justify-between">
                            <div className="flex flex-col">
                                <p>Membre depuis : <em>{oneUser.date_inscription}</em></p><br/>
                                <p>Nbre de points: <em>{oneUser.credit_jeton}</em></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between mt-8">
                        <div className="flex flex-col justify-evenly h-[15rem]">
                            <p>Prénom : {oneUser.prenom}</p>
                            <p>Nom : {oneUser.nom}</p>
                            <p>Pseudo : {oneUser.pseudo}</p>
                            <p>Age : {calculateAge()}</p>
                            <p>Email : {oneUser.email}</p>
                        </div>
                        <div className="flex flex-col justify-evenly h-[7rem]">
                            <p>{oneUser.adresse}</p>
                            <div className="flex flex-row">
                                <p>{oneUser.code_postal}</p>
                                <p className="ml-8">{oneUser.ville}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            ) : (
                <p>Aucune donnée utilisateur disponible</p>
            )}
        </div>
    );
};

export default InfoUser;
