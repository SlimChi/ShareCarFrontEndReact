import React, { useState, useEffect } from "react";
import axios from "axios";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from "../components/modifuser/firebase.jsx";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import Sidebar from "../components/layouts/SideBar";

export default function VehicleFormImgView() {
    const [imageURLs, setImageURLs] = useState([]);
    const [showSaveButton, setShowSaveButton] = useState(false);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [dialogImageURL, setDialogImageURL] = useState(null);
    const [newImagePreviews, setNewImagePreviews] = useState([]);
    const [newImages, setNewImages] = useState([]);
    const [newImageIds, setNewImageIds] = useState([]);

    useEffect(() => {
        const fetchUserImages = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error("Le token d'authentification est manquant.");
                    return;
                }

                const response = await axios.get('https://127.0.0.1:8000/api/get_voitures_images', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    },
                });

                if (response.data.imagesVoiture && response.data.imagesVoiture.length > 0) {
                    setImageURLs(response.data.imagesVoiture);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserImages();
    }, []);

    const handleImageChange = (event) => {
        const newImages = Array.from(event.target.files);
        setNewImages(newImages); // Stockez les nouvelles images

        if (newImages.length > 0) {
            setShowSaveButton(true);

            // Afficher les aperçus des nouvelles images sélectionnées
            const newImageURLs = newImages.map((newImage) => URL.createObjectURL(newImage));
            setNewImagePreviews(newImageURLs);

            // Générez et stockez les IDs pour les nouvelles images
            const newImageIds = newImages.map(() => {
                const timestamp = Date.now();
                return `${timestamp}_${Math.random().toString(36).substring(2)}.jpg`;
            });
            setNewImageIds(newImageIds);
        }
    };

    const handleImageUpload = async () => {
        if (newImages.length === 0) {
            console.error("Sélectionnez au moins une image à télécharger.");
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error("Le token d'authentification est manquant.");
            return;
        }

        try {
            const uploadedImageURLs = [];
            const promises = [];

            newImages.forEach((imageFile, index) => {
                const storagePath = `voitures/${newImageIds[index]}`;
                const storage = getStorage(app);
                const storageRef = ref(storage, storagePath);

                promises.push(uploadBytes(storageRef, imageFile).then(async () => {
                    const downloadURL = await getDownloadURL(storageRef);
                    uploadedImageURLs.push({ id: newImageIds[index], url: downloadURL });
                }));
            });

            Promise.all(promises).then(() => {
                const updatedImageURLs = [...imageURLs, ...uploadedImageURLs];
                setImageURLs(updatedImageURLs); // Mettez à jour immédiatement l'état imageURLs avec les nouvelles images

                setNewImages([]);
                setNewImagePreviews([]);
                setShowSaveButton(false);

                axios.post('https://127.0.0.1:8000/api/useraddurlvoitures', { image_voiture_urls: uploadedImageURLs.map(image => image.url) }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    },
                }).then((response) => {
                    console.log(response.data);
                }).catch((error) => {
                    console.error(error);
                });
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleImageDelete = async (id, isNewImage) => {
        const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cette image ?");

        if (confirmDelete) {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error("Le token d'authentification est manquant.");
                return;
            }

            try {
                if (isNewImage) {
                    // Si c'est une nouvelle image, supprimez-la de newImages, newImagePreviews et newImageIds
                    const newImagesCopy = [...newImages];
                    const newImagePreviewsCopy = [...newImagePreviews];
                    const newImageIdsCopy = [...newImageIds];
                    const index = newImageIdsCopy.indexOf(id);
                    if (index !== -1) {
                        newImagesCopy.splice(index, 1);
                        newImagePreviewsCopy.splice(index, 1);
                        newImageIdsCopy.splice(index, 1);
                    }
                    setNewImages(newImagesCopy);
                    setNewImagePreviews(newImagePreviewsCopy);
                    setNewImageIds(newImageIdsCopy);
                }

                const response = await axios.delete(`https://127.0.0.1:8000/api/delete_voiture_image/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    },
                });
                console.log(response.data);

                const updatedImageURLs = imageURLs.filter(image => image.id !== id);
                setImageURLs(updatedImageURLs);
            } catch (error) {
                console.error("Erreur lors de la suppression de l'image :", error);
            }
        }
    };

    const openDialog = (url) => {
        setDialogImageURL(url);
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
        setDialogImageURL(null);
    };

    return (
        <div>

            <img
                src="../../../../src/Images/Car2.png"
                alt=""
                className="object-cover h-[30rem] w-full"
            />
            <Sidebar />
            <h4 className="text-center uppercase font-bold text-[#114076] mt-8 mb-[5rem]" >
                IMAGES DU VEHICULE
            </h4>
            <form>
                <div>
                    <div className="grid grid-cols-2 gap-4">
                        {newImagePreviews.length > 0 && newImagePreviews.map((imageURL, index) => (
                            <div key={index} className="bg-white p-0 rounded-md shadow-md relative">
                                <img
                                    src={imageURL}
                                    alt={`Nouvelle Image ${index}`}
                                    className="max-h-[200px] max-w-[200px] object-cover"
                                />
                                <Button onClick={() => handleImageDelete(newImageIds[index], true)}>
                                    <DeleteIcon />
                                </Button>
                            </div>
                        ))}
                        {imageURLs.length > 0 && imageURLs.map((image, index) => (
                            <div key={index} className="bg-white p-0 rounded-md shadow-md relative">
                                <img
                                    src={image.url}
                                    alt={`Image ${index}`}
                                    className="max-h-[200px] max-w-[200px] object-cover"
                                    onClick={() => openDialog(image.url)}
                                    style={{ cursor: "pointer", margin: "0" }}
                                />

                                <Button onClick={() => openDialog(image.url)}>Ouvrir</Button>

                                <Button onClick={() => handleImageDelete(image.id, false)}>
                                    <DeleteIcon />
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <label className="custom-file-upload mt-5">
                            <input type="file" accept="image/*" onChange={handleImageChange} multiple />
                            Ajouter des images
                        </label>
                    </div>

                   

                    <Dialog open={isDialogOpen} onClose={closeDialog}>
                        <DialogContent sx={{ padding: '0' }}>
                            {dialogImageURL && <img src={dialogImageURL} alt="Image" />}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeDialog} color="primary">
                                Fermer
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                {/* rediriger vers URL_VEHICLE une fois validé */}
                <div className="m-16 flex justify-end mr-[8rem]">
                    {showSaveButton && (
                        <Button
                            variant="contained"
                            size="small"
                            className="btn-green w-[15rem] h-[3rem]"
                            onClick={handleImageUpload}
                        >
                            ENREGISTER
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
}