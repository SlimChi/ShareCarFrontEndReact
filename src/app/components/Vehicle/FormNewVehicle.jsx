import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectIsLogged } from "../../redux-store/authenticationSlice";

export default function FormNewVehicle() {
    const [modeles, setModeles] = useState([]);
    const [marquesUniques, setMarquesUniques] = useState([]);
    const [selectedMarque, setSelectedMarque] = useState(""); // Pour stocker la marque sélectionnée
    const [filteredModeles, setFilteredModeles] = useState([]); // Pour stocker les modèles filtrés
    const isAuthenticated = useSelector(selectIsLogged);

    if (!isAuthenticated) {
        // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion.
        return <Navigate to="/login" />;
    }
    useEffect(() => {
        const fetchModeles = async () => {
            try {
                axios.get(`https://127.0.0.1:8000/api/modeles`)
                    .then((response) => {
                        setModeles(response.data);
                    });
            } catch (error) {
                console.error(error);
            }
        };
        fetchModeles();
    }, []);

    useEffect(() => {
        // Filtrer les marques uniques à partir des modèles
        const uniqueMarques = [...new Set(modeles.map(modele => modele.marque))];
        setMarquesUniques(uniqueMarques);
    }, [modeles]);

    useEffect(() => {
        // Filtrer les modèles en fonction de la marque sélectionnée
        if (selectedMarque) {
            const filtered = modeles.filter(modele => modele.marque === selectedMarque);
            setFilteredModeles(filtered);
        } else {
            setFilteredModeles([]); // Aucune marque sélectionnée, donc pas de modèles filtrés
        }
    }, [selectedMarque, modeles]);

    const handleMarqueChange = (e) => {
        const selectedMarque = e.target.value;
        setSelectedMarque(selectedMarque);
    };

    return (
        <div>
            <form action="" className="">
                <div className="px-8 pt-6 pb-8 mb-4 w-[25rem] space-y-8 ml-[5rem]">
                    <h6 className="font-bold text-[#114076] mb-8">NOUVEAU VEHICULE</h6>
                    <div className="flex justify-between w-[50vw]">
                        <div className="flex flex-col">
                            <label className="block text-gray-700 text-sm ">
                                
                            </label>
                            <select
                                id="marques"
                                value={selectedMarque}
                                onChange={handleMarqueChange}
                                className="input py-2 px-3 text-gray-700 w-[20rem] leading-tight focus:outline-none focus:shadow-outline"                            >
                                <option value="">Marques</option>
                                {marquesUniques.map((marque, index) => (
                                    <option key={index} value={marque}>
                                        {marque}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="block text-gray-700 text-sm">
                                
                            </label>
                            <select
                                id="modeles"
                                className="input w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option>Modeles</option>
                                {filteredModeles.map((modele, index) => (
                                    <option key={index} value={modele}>
                                        {modele.modele}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between w-[55rem] ml-[7rem]">
                    <label htmlFor="nbre_places" className="text-sm font-medium text-gray-900">Nbre de places disponibles</label>
                    <select id="nbre_places" className="select">
                        <option className="option" select="0">0</option>
                        <option className="option" value="1">1</option>
                        <option className="option" value="2">2</option>
                        <option className="option" value="3">3</option>
                        <option className="option" value="4">4</option>
                    </select>

                    <label htmlFor="nbre_places" className="block mb-2 text-sm font-medium text-gray-900 ">Nbre de petits bagages</label>
                    <select id="nbre_places" className="select">
                        <option className="option" select="0">0</option>
                        <option className="option" value="1">1</option>
                        <option className="option" value="2">2</option>
                        <option className="option" value="3">3</option>
                        <option className="option" value="4">4</option>
                    </select>

                    <label htmlFor="nbre_places" className="block mb-2 text-sm font-medium text-gray-900 ">Nbre de grands bagages</label>
                    <select id="nbre_places" className="select">
                        <option className="option" select="0">0</option>
                        <option className="option" value="1">1</option>
                        <option className="option" value="2">2</option>
                        <option className="option" value="3">3</option>
                        <option className="option" value="4">4</option>
                    </select>
                </div>
            </form>
        </div>
    );
}
