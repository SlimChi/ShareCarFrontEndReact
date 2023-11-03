import React, { useState, useEffect } from "react";
import axios from "axios";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import app from '../ModifUser/firebase';
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
                    const response = await axios.get('http://127.0.0.1:8000/api/profil', {
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
                    const response = await axios.get('http://127.0.0.1:8000/api/get_user_images', {
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

    return (
        <div className="flex flex-col justify-center w-[25rem] h-[100vh] bg-blue-200 space-y-4 md:items-center md:space-y-0 md:space-x-4">
   
            {imageURL && (
                <div className="flex justify-center items-center mb-4 bg-white h-[15rem] w-[15rem] border-2 rounded-full mt-[-7rem]">
                    <img src={imageURL} alt="Avatar" className="flex rounded-full h-[14rem] w-[14rem]" />
                </div>
            )}

            <div className="flex flex-col justify-center w-[15rem] h-[100rem]">
                <h3 className="mb-4 text-[#114076]"> Ma Bio</h3>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec a risus nec enim eleifend bibendum. Sed tincidunt 
                    nibh nec augue sodales vehicula. Aliquam erat volutpat. 
                    Vestibulum sed fringilla nibh. Aenean ornare posuere egestas. 
                    Fusce luctus varius risus, nec laoreet leo euismod id. Integer 
                    porttitor, ante et volutpat rhoncus, mauris ante porttitor 
                    mauris, vulputate venenatis lorem dolor at mauris. 
                    Phasellus sit amet sem urna. </p>
            </div>
           

        </div>


    );
};

export default BioUser;