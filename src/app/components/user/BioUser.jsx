import React, { useState, useEffect } from "react";
import axios from "axios";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const BioUser = () => {
    const [imageURL, setImageURL] = useState(null);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [oneBioUser, setOneBioUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserImages = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error("Le token d'authentification est manquant.");
                    return;
                }

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
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserImages();

        const fetchBioUser = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error("Le token d'authentification est manquant.");
                    return;
                }

                const response = await axios.get('https://127.0.0.1:8000/api/profil', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    },
                });
                setOneBioUser(response.data);
            } catch (err) {
              setError(err);
            } 
          };
          fetchBioUser();
    }, []);



    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div className="flex flex-col justify-center w-[25rem] bg-blue-200 space-y-4 md:items-center md:space-y-0 md:space-x-4">
            {imageURL && (
                <div className="flex justify-center items-center  bg-white h-[15rem] w-[15rem] border-2 rounded-full mt-[-7rem]">
                    <img
                        src={imageURL}
                        alt="Avatar"
                        className="flex rounded-full h-[14rem] w-[14rem]"
                        onClick={openDialog}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            )}


            <div className="flex flex-col justify-center w-[15rem] h-[40rem]">
                <h4 className="mb-4 text-[#114076]"> Ma Bio</h4>
                <p className="">
                {oneBioUser && oneBioUser.biographie}
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec a risus nec enim eleifend bibendum. Sed tincidunt 
                    nibh nec augue sodales vehicula. Aliquam erat volutpat. 
                    Vestibulum sed fringilla nibh. Aenean ornare posuere egestas. 
                    Fusce luctus varius risus, nec laoreet leo euismod id. Integer 
                    porttitor, ante et volutpat rhoncus, mauris ante porttitor 
                    mauris, vulputate venenatis lorem dolor at mauris. 
                    Phasellus sit amet sem urna.  */}
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