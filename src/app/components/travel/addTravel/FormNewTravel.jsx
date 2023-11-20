import React, { useState, useEffect } from 'react';
import { FaRegCreditCard } from 'react-icons/fa';
import { BsCalendar3 } from 'react-icons/bs';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { HiOutlineUsers, HiOutlineMusicNote } from 'react-icons/hi';
import { MdOutlineVoiceOverOff, MdPets } from 'react-icons/md';
import EditLocationAltOutlinedIcon from '@mui/icons-material/EditLocationAltOutlined';
import axios from 'axios';
import { LiaSmokingSolid } from 'react-icons/lia';

export default function FormulaireNewTrajet() {

    const [formData, setFormData] = useState({
        adresseDepart: '',
        codePostalDepart: '',
        villeDepart: '',
        adresseArrivee: '',
        codePostalArrivee: '',
        villeArrivee: '',
        tarif: '',
        date: '',
        heureDepart: '',
        nombrePassagers: false,
        cigaretteAutorisee: false,
        conducteurSilencieux: false,
        animauxAutorises: false,
        musiqueEnConduisant: false,
    });

    const [suggestionsDepart, setSuggestionsDepart] = useState([]);
    const [suggestionsArrivee, setSuggestionsArrivee] = useState([]);

    const handleInputChange = async (e, type) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    
        // Call Adresse Data Gouv API for address suggestions
        try {
            const response = await axios.get(
                `https://api-adresse.data.gouv.fr/search/?q=${value}&limit=5&type=housenumber&autocomplete=1`
            );
    
            if (type === 'depart') {
                setSuggestionsDepart(response.data.features);
            } else if (type === 'arrivee') {
                setSuggestionsArrivee(response.data.features);
            }
        } catch (error) {
            console.error('Error fetching address suggestions:', error);
        }
    };
    
    

    const handleAddressSelect = async (selectedAddress, type) => {
        try {
            // Utilisez les coordonnées directement pour obtenir les détails de l'adresse
            const result = selectedAddress;
    
            const detailsAdresse = {
                ville: result.properties.city,
                codePostal: result.properties.postcode,
            };
    
            if (type === 'depart') {
                console.log('Setting Depart Address:', result.properties.label);
                setFormData({
                    ...formData,
                    adresseDepart: result.properties.label,
                    codePostalDepart: detailsAdresse.codePostal,
                    villeDepart: detailsAdresse.ville,
                });
    
                setSuggestionsDepart([]);
            } else if (type === 'arrivee') {
                console.log('Setting Arrival Address:', result.properties.label);
                setFormData({
                    ...formData,
                    adresseArrivee: result.properties.label,
                    codePostalArrivee: detailsAdresse.codePostal,
                    villeArrivee: detailsAdresse.ville,
                });
                setSuggestionsArrivee([]);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des coordonnées :', error);
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Construire l'objet de données
        const data = {
            voiture_id: 2,
            prix: formData.tarif,
            fumeur: formData.cigaretteAutorisee,
            silence: formData.conducteurSilencieux,
            musique: formData.musiqueEnConduisant,
            animaux: formData.animauxAutorises,
            date_depart: formData.date,
            heure_depart: formData.heureDepart,
            adresse_depart: formData.adresseDepart,
            code_postal_depart: formData.codePostalDepart,
            ville_depart: formData.villeDepart,
            adresse_arrivee: formData.adresseArrivee,
            code_postal_arrivee: formData.codePostalArrivee,
            ville_arrivee: formData.villeArrivee,
        };

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error("Le token d'authentification est manquant.");
                return;
            }

            const response = await axios.post(
                'https://127.0.0.1:8000/api/add_trip',
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + token,
                    },
                }
            );

            console.log(response.data.message); 
            alert("Trajet ajouter avec succès.");
        } catch (error) {
            console.error("Erreur lors de l'ajout du trajet :", error);
        }
    };

    // Clear suggestions when the component unmounts
    useEffect(() => {
        return () => {
            setSuggestionsDepart([]);
            setSuggestionsArrivee([]);
        };
    }, []);

    const handleInputChangeChoice = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <div className="flex flex-col justify-between items-center h-[100vh]">
            <div className="flex justify-center ">
                <div className="">
                    <h3 className="flex items-center font-bold text-[#114076] text-[18px]">
                        <EditLocationAltOutlinedIcon className="text-[#57B526] text-[24px] mr-4" />
                        Adresse de Départ
                    </h3>
                    <div className="flex flex-col space-y-4 w-[35rem]">
                        <input
                            type="text"
                            name="adresseDepart"
                            id="adresse1"
                            placeholder="Rue, adresse"
                            className="input"
                            onChange={(e) => handleInputChange(e, 'depart')}
                            value={formData.adresseDepart}
                        />
                        <div className="flex">
                            <input
                                type="text"
                                name="codePostalDepart"
                                id="code_postal"
                                placeholder="Code postal"
                                className="input w-[10rem] mr-6"
                                value={formData.codePostalDepart}
                                readOnly
                            />
                            <input
                                type="text"
                                name="villeDepart"
                                id="ville"
                                placeholder="Ville"
                                className="input"
                                value={formData.villeDepart}
                                readOnly
                            />
                        </div>
                    </div>
                    <ul>
                        {suggestionsDepart.map((address) => (
                            <li key={address.properties.id} onClick={() => handleAddressSelect(address, 'depart')}>
                                {address.properties.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex justify-center ">
                <div className="">
                    <h3 className="flex items-center font-bold text-[#114076] text-[18px]">
                        <EditLocationAltOutlinedIcon className="text-[#57B526] text-[24px] mr-4" />
                        Adresse d'Arrivée
                    </h3>
                    <div className="flex flex-col space-y-4 w-[35rem]">
                        <input
                            type="text"
                            name="adresseArrivee"
                            id="adresse1"
                            placeholder="Rue, adresse"
                            className="input"
                            onChange={(e) => handleInputChange(e, 'arrivee')}
                            value={formData.adresseArrivee}
                        />
                        <div className="flex">
                            <input
                                type="text"
                                name="codePostalArrivee"
                                id="code_postal"
                                placeholder="Code postal"
                                className="input w-[10rem] mr-6"
                                value={formData.codePostalArrivee}
                                readOnly
                            />
                            <input
                                type="text"
                                name="villeArrivee"
                                id="ville"
                                placeholder="Ville"
                                className="input"
                                value={formData.villeArrivee}
                                readOnly
                            />
                        </div>
                    </div>
                    <ul>
                        {suggestionsArrivee.map((address) => (
                            <li key={address.properties.id} onClick={() => handleAddressSelect(address, 'arrivee')}>
                                {address.properties.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex justify-evenly w-full mt-[5rem]">
                <div>
                    <h4 className="text-sm text-[#114076]">Tarif</h4>
                    <div className="flex items-center">
                        <FaRegCreditCard className="text-[#57B526] text-[28px] mt-4 mr-4" />
                        <input
                            type="text"
                            name="tarif"
                            id="tarif"
                            className="input w-[15rem]"
                            onChange={(e) => handleInputChangeChoice(e)}
                        />
                    </div>
                </div>
                <div>
                    <h4 className="text-sm text-[#114076]">Date</h4>
                    <div className="flex items-center">
                        <BsCalendar3 className="text-[#57B526] text-[28px] mt-4 mr-4" />
                        <input
                            type="date"
                            name="date"
                            id="date"
                            className="input w-[15rem]"
                            onChange={(e) => handleInputChangeChoice(e)}
                        />
                    </div>
                </div>
                <div>
                    <h4 className="text-sm text-[#114076]">Heure de Départ</h4>
                    <div className="flex items-center">
                        <AiOutlineFieldTime className="text-[#57B526] text-[28px] mt-4 mr-4" />
                        <input
                            type="time"
                            name="heureDepart"
                            id="heureDepart"
                            className="input w-[15rem]"
                            onChange={(e) => handleInputChangeChoice(e)}
                        />
                    </div>
                </div>
            </div>

            <div>
                <div className="px-8 pt-6 w-[25rem] ml-[5rem] mt-8">
                    <h6 className="font-bold text-[#114076] mb-8">Options de voyage</h6>
                </div>

                <div className="flex justify-evenly w-full">
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between items-center w-[20rem]">
                            <div className="flex items-center w-[13rem]">
                                <HiOutlineUsers className="text-[#57B526] text-[24px]" />
                                <p className="ml-4">Nombre de passagers</p>
                            </div>
                            <input
                                type="checkbox"
                                name="nombrePassagers"
                                onChange={(e) => handleInputChangeChoice(e)}
                                checked={formData.nombrePassagers}
                            />
                        </div>
                        <div className="flex justify-between items-center w-[20rem]">
                            <div className="flex items-center w-[13rem]">
                                <LiaSmokingSolid className="text-[#57B526] text-[24px]" />
                                <p className="ml-4">Cigarette autorisée</p>
                            </div>
                            <input
                                type="checkbox"
                                name="cigaretteAutorisee"
                                onChange={(e) => handleInputChangeChoice(e)}
                                checked={formData.cigaretteAutorisee}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between items-center w-[20rem]">
                            <div className="flex items-center w-[13rem]">
                                <MdOutlineVoiceOverOff className="text-[#57B526] text-[24px]" />
                                <p className="ml-4">Conducteur silencieux</p>
                            </div>
                            <input
                                type="checkbox"
                                name="conducteurSilencieux"
                                onChange={(e) => handleInputChangeChoice(e)}
                                checked={formData.conducteurSilencieux}
                            />
                        </div>
                        <div className="flex justify-between items-center w-[20rem]">
                            <div className="flex items-center w-[13rem]">
                                <MdPets className="text-[#57B526] text-[24px]" />
                                <p className="ml-4">Animaux autorisés</p>
                            </div>
                            <input
                                type="checkbox"
                                name="animauxAutorises"
                                onChange={(e) => handleInputChangeChoice(e)}
                                checked={formData.animauxAutorises}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between items-center w-[20rem]">
                            <div className="flex items-center w-[13rem]">
                                <HiOutlineMusicNote className="text-[#57B526] text-[24px]" />
                                <p className="ml-4">Musique en conduisant</p>
                            </div>
                            <input
                                type="checkbox"
                                name="musiqueEnConduisant"
                                onChange={(e) => handleInputChangeChoice(e)}
                                checked={formData.musiqueEnConduisant}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <button
                className="bg-[#57B526] text-white px-6 py-3 rounded-full mt-8"
                onClick={handleSubmit}
            >
                Ajouter Trajet
            </button>
        </div>
    );
}
