import React, { useState, useEffect } from "react";
import axios from "axios";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from '../../components/modifuser/firebase.jsx';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const BioUser = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [showSaveButton, setShowSaveButton] = useState(false);
    const [isDialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        const fetchUserImages = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error("Le token d'authentification est manquant.");
                    return;
                }

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
        if (!selectedImage) {
            console.error("Sélectionnez une image à télécharger.");
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error("Le token d'authentification est manquant.");
            return;
        }

        try {
            const timestamp = Date.now();
            const uniqueFileName = `${timestamp}_${Math.random().toString(36).substring(2)}.jpg`;
            const storagePath = `images/${uniqueFileName}`;

            const storage = getStorage(app);
            const storageRef = ref(storage, storagePath);

            await uploadBytes(storageRef, selectedImage);
            const downloadURL = await getDownloadURL(storageRef);

            axios.post('http://127.0.0.1:8000/api/useraddurl', { image_url: downloadURL }, {
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
    };

    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div className="flex flex-col justify-center w-[25rem] bg-blue-200 space-y-4 md:items-center md:space-y-0 md:space-x-4">
            {imageURL && (
                <div className="flex justify-center items-center mb-4 bg-white h-[15rem] w-[15rem] border-2 rounded-full mt-[-7rem]">
                    <img
                        src={imageURL}
                        alt="Avatar"
                        className="flex rounded-full h-[14rem] w-[14rem]"
                        onClick={openDialog}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            )}

            <label className="custom-file-upload">
                <input type="file" accept="image/*" onChange={handleImageChange} />
                Modifier l'image
            </label>

            {showSaveButton && (
                <button onClick={handleImageUpload} className="cursor-pointer">
                    Sauvegarder
                </button>
            )}

            <div className="flex flex-col justify-center w-[15rem] h-[100rem]">
                <h4 className="mb-4 mt-4 text-[#114076]"> Ma Bio</h4>
                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec a risus nec enim eleifend bibendum. Sed tincidunt 
                    nibh nec augue sodales vehicula. Aliquam erat volutpat. 
                    Vestibulum sed fringilla nibh. Aenean ornare posuere egestas. 
                    Fusce luctus varius risus, nec laoreet leo euismod id. Integer 
                    porttitor, ante et volutpat rhoncus, mauris ante porttitor 
                    mauris, vulputate venenatis lorem dolor at mauris. 
                    Phasellus sit amet sem urna. 
                </p>

            </div>





            <Dialog open={isDialogOpen} onClose={closeDialog}>
                <DialogContent sx={{ padding: '0' }}>
                    <img src={imageURL} alt="Image en grand" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color="secondary">
                        Fermer
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
};

export default BioUser;