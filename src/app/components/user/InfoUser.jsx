import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosStar } from "react-icons/io";

const InfoUser = () => {

    const [oneUser, setOneUser] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            url: 'https://127.0.0.1:8000/api/profil',
        }).then(function (response) {
            console.log(response.data);
            setOneUser(response.data);

        })
    }, []);

    const calculateAge = () => {
        let today = new Date();
        let birthDate = new Date(oneUser.date_de_naissance);
        let age = today.getFullYear() - birthDate.getFullYear();
        return age;
      };

    return (
        <div className="flex flex-col justify-between h-[33rem]">
            <div className="mt-4 flex justify-between">
                <div className="flex items-center justify-between w-[6rem]">
                    <IoIosStar className="text-[yellow] text-4xl" />
                    <p className="">4.5 / 5</p>
                </div>
                <div className="flex flex-col ">
                    {/* <p>Membre depuis : <em>{oneUser.date}</em></p> */}
                    <p>Membre depuis : <em>Oct 2023</em></p>
                    <p>Nbre de points: <em>{oneUser.credit_jeton}</em></p>
                </div>
            </div>

            <div className="flex flex-col justify-between mt-8 ">
                
                <div className="flex flex-col justify-evenly h-[15rem]">
                    <p>{oneUser.prenom}</p>
                    <p>{oneUser.nom}</p>
                    <p>{oneUser.pseudo}</p>
                    <p>{calculateAge()}</p>
                    <p>{oneUser.email}</p>

                </div>
                <div className="flex flex-col justify-evenly h-[7rem]">
                    {/* <p>{oneUser.address}</p> */}
                    <p>{oneUser.adresse}</p>

                    <div className="flex flex-row">
                        {/* <p>{oneUser.code_postal}</p> */}
                        <p>{oneUser.code_postal}</p>
                        {/* <p className="ml-8">{oneUser.ville}</p> */}
                        <p className="ml-8">{oneUser.ville}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InfoUser;