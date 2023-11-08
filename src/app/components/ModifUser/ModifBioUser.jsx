import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import axios from 'axios';
import { BsPen } from "react-icons/bs";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import app from '../../components/modifuser/firebase.jsx';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


const ModifBioUser = () => {

    const [oneUserBio, setOneUserBio] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            url: 'http://127.0.0.1:8000/api/profil',
        }).then(function (response) {
            console.log(response.data);
            setOneUserBio(response.data);

        })
    }, []);


    const formik = useFormik({
        initialValues: {
          biographie: '',
        },

        onSubmit: () => {
            axios({
                method: 'put',
                url: `http://127.0.0.1:8000/api/profil_modif`, 
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                data: {
                    biographie: formik.values.biographie,
                }
            }).then(function (response) {
                console.log(response.data);
                if (response.data.status === true) {
                    window.location.href = URL_PROFIL
                    // alert(response.data.message);
                } else {
                    return (response.data.message);
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
    });

    // ------------------------------------------------- Gestion de l'image ----------------------------------------
    const [oneUser, setOneUser] = useState([]);
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
        
        <div className="flex flex-col items-center justify-center w-[25rem] bg-blue-200 space-y-4 md:items-center md:space-y-0 md:space-x-4 ">
            {imageURL && (
                <div className="flex justify-center items-center mb-4 bg-white h-[15rem] w-[15rem] border-2 rounded-full mt-[-7rem]">
                    <img src={imageURL} alt="Avatar" className="flex rounded-full h-[14rem] w-[14rem]" onClick={openDialog}/>
                </div>
            )}
            <label className="cursor-pointer">
                <input type="file" accept="image/*" onChange={handleImageChange} 
                className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-[#57B526]
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-[#57B526] 
                            hover:file:bg-violet-100
                            "/>
            </label>
            {showSaveButton && ( // Affiche le bouton "Sauvegarder" uniquement si showSaveButton est true
                <button onClick={handleImageUpload} className="cursor-pointer">Sauvegarder</button>
            )}
                {/* <div className="flex justify-center items-center bg-white h-[15rem] w-[15rem] border-2 rounded-full mt-[-7rem]">
                    <div className="flex flex-col ">
                        <img src="/src/Images/avatar1.jpg" alt="" className=" flex rounded-full h-[14rem] w-[14rem]"/>
                    </div>

                    
                </div>

                <div className="flex items-end ">
                    <label className="block mt-4">
                            <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-[#57B526]
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-[#57B526] 
                            hover:file:bg-violet-100
                            "/>
                        </label>
                    </div> */}
            
            <div className="flex flex-col justify-center w-[15rem] h-[35rem]">
           
                <div className="flex items-center">
                    <h3 className="mb-4 text-[#114076]">Ma Bio</h3> <BsPen className="ml-4"/>
                </div>
                <form action="" 
                 onSubmit={formik.handleSubmit} 
                >
                <textarea rows={18} className="indent-8 w-[18rem] ml-[-2rem] border-[#57B526]" 
                defaultValue={oneUserBio.biographie}
                type="text"
                id="biographie"
                name="biographie"
                placeholder={oneUserBio.biographie}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.biographie}
                >
                    {formik.values.biographie}
                </textarea>
                </form>
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

export default ModifBioUser;