import { useState, useEffect } from "react";
import axios from "axios";


export default function FormNewVehicle() {
    const [modeles, setModeles] = useState([]);
    const [marquesUniques, setMarquesUniques] = useState([]);
    const [selectedMarque, setSelectedMarque] = useState("");
    const [selectedModele, setSelectedModele] = useState("");
    const [nbreDePlaces, setNbreDePlaces] = useState(0);
    const [nbrePetitsBagages, setNbrePetitsBagages] = useState(0);
    const [nbreGrandsBagages, setNbreGrandsBagages] = useState(0);


    useEffect(() => {
        const fetchModeles = async () => {
            try {
                const response = await axios.get("https://127.0.0.1:8000/api/modeles");
                setModeles(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchModeles();
    }, []);

    useEffect(() => {
        const uniqueMarques = [...new Set(modeles.map((modele) => modele.marque))];
        setMarquesUniques(uniqueMarques);
    }, [modeles]);

    const handleMarqueChange = (e) => {
        const selectedMarque = e.target.value;
        setSelectedMarque(selectedMarque);
        // Réinitialiser le modèle sélectionné lorsque la marque change
        setSelectedModele("");
    };

    const handleModeleChange = (e) => {
        const selectedModele = e.target.value;
        setSelectedModele(selectedModele);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Vérifier si un modèle est sélectionné
        if (!selectedModele) {
            console.error("Veuillez sélectionner un modèle.");
            return;
        }

        // Vérifier si le token d'authentification est présent
        const token = localStorage.getItem('token');
        if (!token) {
            console.error("Le token d'authentification est manquant.");
            return;
        }

        // Construire l'objet de données
        const data = {
            modele_id: selectedModele,
            nbre_de_places: nbreDePlaces,
            nbre_petits_bagages: nbrePetitsBagages,
            nbre_grands_bagages: nbreGrandsBagages,
        };

        console.log("Submitting data:", data);
        try {
            const response = await axios.post("https://127.0.0.1:8000/api/ajouter_voiture", data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
            });
            console.log(response.data.message); // Message de réussite
        } catch (error) {
            console.error("Erreur lors de l'ajout de la voiture :", error);
        }
        setRedirect(true);
    };
    return (
        <div>
            <form>
                <div className="px-8 pt-6 pb-8 mb-4 w-[25rem] space-y-8 ml-[5rem]">
                    <h6 className="font-bold text-[#114076] mb-8">NOUVEAU VEHICULE</h6>
                    <div className="flex justify-between w-[50vw]">
                        <div className="flex flex-col">
                            <label htmlFor="marques" className="block text-gray-700 text-sm ">
                                Marques
                            </label>
                            <select
                                id="marques"
                                value={selectedMarque}
                                onChange={handleMarqueChange}
                                className="input py-2 px-3 text-gray-700 w-[20rem] leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Marques</option>
                                {marquesUniques.map((marque, index) => (
                                    <option key={index} value={marque}>
                                        {marque}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="modeles" className="block text-gray-700 text-sm">
                                Modeles
                            </label>
                            <select
                                id="modeles"
                                value={selectedModele}
                                onChange={handleModeleChange}
                                className="input w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Modeles</option>
                                {modeles
                                    .filter((modele) => modele.marque === selectedMarque)
                                    .map((modele, index) => (
                                        <option key={index} value={modele.id}>
                                            {modele.modele}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between w-[55rem] ml-[7rem]">
                    <div>
                        <label htmlFor="nbreDePlaces" className="block mb-2 text-sm font-medium text-gray-900">
                            Nbre de places disponibles
                        </label>
                        <select
                            id="nbreDePlaces"
                            value={nbreDePlaces}
                            onChange={(e) => setNbreDePlaces(e.target.value)}
                            className="select"
                        >
                            {[0, 1, 2, 3, 4].map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="nbrePetitsBagages" className="block mb-2 text-sm font-medium text-gray-900">
                            Nbre de petits bagages
                        </label>
                        <select
                            id="nbrePetitsBagages"
                            value={nbrePetitsBagages}
                            onChange={(e) => setNbrePetitsBagages(e.target.value)}
                            className="select"
                        >
                            {[0, 1, 2, 3, 4].map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="nbreGrandsBagages" className="block mb-2 text-sm font-medium text-gray-900">
                            Nbre de grands bagages
                        </label>
                        <select
                            id="nbreGrandsBagages"
                            value={nbreGrandsBagages}
                            onChange={(e) => setNbreGrandsBagages(e.target.value)}
                            className="select"
                        >
                            {[0, 1, 2, 3, 4].map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                 
                </div>
                <div className="flex justify-end mr-[7rem] mb-8">
                        <button
                            type="button"
                            className="btn-green block rounded-md w-[12rem] h-[3rem] mt-[10rem] text-[14px]"
                            onClick={handleSubmit}
                        >
                            Ajouter Voiture
                        </button>
                    </div>
                
            </form>
        </div>
    );
}
