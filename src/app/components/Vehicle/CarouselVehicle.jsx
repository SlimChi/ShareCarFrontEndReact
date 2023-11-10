import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importez les styles du carrousel

export default function CarouselVehicle() {
    const [imageURLs, setImageURLs] = useState([]);

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

                console.log("Réponse de la requête : ", response);

                if (response.data.imagesVoiture && response.data.imagesVoiture.length > 0) {
                    setImageURLs(response.data.imagesVoiture);
                }
            } catch (error) {
                console.error("Erreur lors de la requête : ", error);
            }
        };

        fetchUserImages();
    }, []);

    console.log("URLs des images : ", imageURLs);

    return (
        <Carousel autoPlay showArrows infiniteLoop className="rounded-xl w-[30rem] h-[20rem]">
            {imageURLs.map((imageURL, index) => (
                <div key={index}>
                    <img
                        src={imageURL.url}
                        alt={`image ${index + 1}`}
                        className="h-full w-full object-cover"
                    />
                </div>
            ))}
        </Carousel>
    );
}
