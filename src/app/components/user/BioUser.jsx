import React, { useState, useEffect } from "react";
import axios from "axios";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import app from './firebase';
import { IoIosStar } from "react-icons/io";

const BioUser = () => {
    const [oneUser, setOneUser] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [showSaveButton, setShowSaveButton] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const response = await axios.get('https://127.0.0.1:8000/api/profil', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': 'Bearer ' + token,
                        },
                    });

                    console.log(response.data);
                    setOneUser(response.data);

                    if (response.data.image_url) {
                        setImageURL(response.data.image_url);
                    }
                } else {
                    console.error("Le token d'authentification est manquant.");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, []);

    useEffect(() => {
        const fetchUserImages = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const response = await axios.get('https://127.0.0.1:8000/api/get_user_images', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': 'Bearer ' + token,
                        },
                    });

                    if (response.data.images && response.data.images.length > 0) {
                        const lastImage = response.data.images[response.data.images.length - 1];
                        setImageURL(lastImage.url);
                    }
                } else {
                    console.error("Le token d'authentification est manquant.");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserImages();
    }, []);

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setSelectedImage(imageFile);

        if (imageFile) {
            const imageURL = URL.createObjectURL(imageFile);
            setImageURL(imageURL);
            setShowSaveButton(true);
        }
    };

    const handleImageUpload = async () => {
        if (selectedImage) {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const timestamp = Date.now();
                    const uniqueFileName = `${timestamp}_${Math.random().toString(36).substring(2)}.jpg`;
                    const storagePath = `images/${uniqueFileName}`;

                    const storage = getStorage(app);
                    const storageRef = ref(storage, storagePath);

                    await uploadBytes(storageRef, selectedImage);
                    const downloadURL = await getDownloadURL(storageRef);
                    axios.post('https://127.0.0.1:8000/api/useraddurl', { image_url: downloadURL }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token,
                        },
                    }).then((response) => {
                        console.log(response.data);
                        setImageURL(downloadURL);
                        setShowSaveButton(false);
                    }).catch((error) => {
                        console.error(error);
                    });
                } catch (error) {
                    console.error(error);
                }
            } else {
                console.error("Le token d'authentification est manquant.");
            }
        } else {
            console.error("Sélectionnez une image à télécharger.");
        }
    };
    const calculateAge = () => {
        let today = new Date();
        let birthDate = new Date(oneUser.date_de_naissance);
        let age = today.getFullYear() - birthDate.getFullYear();
        return age;
    };
    return (
        <div className="flex flex-col justify-center w-[25rem] bg-blue-200 space-y-4 md:items-center md:space-y-0 md:space-x-4">
            {imageURL && (
                <div className="flex justify-center items-center mb-4 bg-white h-[15rem] w-[15rem] border-2 rounded-full mt-[-7rem]">
                    <img src={imageURL} alt="Avatar" className="flex rounded-full h-[14rem] w-[14rem]" />
                </div>
            )}
            <label className="custom-file-upload">
                <input type="file" accept="image/*" onChange={handleImageChange} />
                Modifier l'image
            </label>
            {showSaveButton && ( // Affiche le bouton "Sauvegarder" uniquement si showSaveButton est true
                <button onClick={handleImageUpload} className="cursor-pointer">Sauvegarder</button>
            )}
            <div className="flex flex-col justify-center w-[5rem] h-[6rem]">
                <h5 className="mb-4 mt-4 text-[#114076]"> Ma Bio</h5>
            </div>
            <div className="flex flex-col  h-[35rem]">

                <div className="flex items-center mb-4">
                    <IoIosStar className="text-[yellow] text-4xl" />
                    <p className="ml-2">4.5 / 5</p>
                </div>
                <div className=" flex">
                    <div className="flex flex-col">
                        <p>Membre depuis : <em>Oct 2023</em></p>
                        <p>Nbre de points : <em>{oneUser.credit_jeton}</em></p>
                    </div>
                </div>

                <div className="flex flex-col justify-between mt-5">
                    <div className="flex flex-col justify-evenly h-[10rem]">
                        <div className="flex justify-between">
                            <label>Prénom:</label>
                            <p>{oneUser.prenom}</p>
                        </div>
                        <div className="flex justify-between">
                            <label>Nom:</label>
                            <p>{oneUser.nom}</p>
                        </div>
                        <div className="flex justify-between">
                            <label>Pseudo:</label>
                            <p>{oneUser.pseudo}</p>
                        </div>
                        <div className="flex justify-between">
                            <label>Âge:</label>
                            <p>{calculateAge()}</p>
                        </div>
                        <div className="flex justify-between">
                            <label>Email:</label>
                            <p>{oneUser.email}</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-evenly h-[7rem]">
                        <div className="flex justify-between">
                            <label>Adresse:</label>
                            <p>{oneUser.adresse}</p>
                        </div>
                        <div className="flex justify-between">
                            <label>Code Postal:</label>
                            <p>{oneUser.code_postal}</p>
                        </div>
                        <div className="flex justify-between">
                            <label>Ville:</label>
                            <p>{oneUser.ville}</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    );
};

export default BioUser;