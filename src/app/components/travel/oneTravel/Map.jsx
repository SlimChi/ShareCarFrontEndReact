import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import axios from "axios";

export default function Map() {
  const [trips, setTrips] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error("Le token d'authentification est manquant.");
          return;
        }

        const response = await axios.get('https://127.0.0.1:8000/api/get_all_trips', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
        });
        setTrips(response.data);

        // Si vous avez des trajets, initialisez la carte pour le premier trajet
        if (response.data.length > 0) {
          initMap(response.data[0]);
        }
      } catch (error) {
        console.error("Error fetching trajets:", error);
      }
    };

    const initMap = async (trip) => {
      // Récupérer les coordonnées des villes
      const departureLatLng = await geocodeAddress(trip.etapes[0].adresse_depart);
      const arrivalLatLng = await geocodeAddress(trip.etapes[0].adresse_arrivee);
    
      if (departureLatLng && arrivalLatLng) {
        // Calculer le centre de la carte pour inclure les deux villes
        const bounds = L.latLngBounds(departureLatLng, arrivalLatLng);
    
        // Initialiser la carte avec le centre calculé et un niveau de zoom approprié
        const mymap = L.map("mapid", {
          dragging: false, // Désactiver le déplacement de la carte
        }).fitBounds(bounds);
    
        mapRef.current = mymap;  // Stocker la référence à la carte
    
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(mymap);
    
        // Utiliser Leaflet Routing Machine pour obtenir le tracé d'itinéraire
        try {
          
          const routingControl = L.Routing.control({
            waypoints: [
              L.latLng(parseFloat(departureLatLng[0]), parseFloat(departureLatLng[1])),
              L.latLng(parseFloat(arrivalLatLng[0]), parseFloat(arrivalLatLng[1])),
            ],
            routeWhileDragging: true,
            lineOptions: {
              styles: [{ color: '#3388ff', opacity: 0.8, weight: 6, clickable: false }], // Désactiver les interactions avec la ligne
            },
            draggableWaypoints: false,
            addWaypoints: false, 
            
          }).addTo(mymap);
          
          // Désactiver le déplacement de la carte après l'ajout du trajet
          mymap.dragging.disable();
          
          // Désactiver le déplacement des marqueurs après l'ajout du trajet
          routingControl.getWaypoints().forEach(waypoint => {
            waypoint.dragging.disable();
          });
          
    
          mymap.on("routingerror", function (error) {
            console.error("Erreur lors de la récupération de l'itinéraire:", error);
          });
    
          // Désactiver le déplacement de la carte après l'ajout du trajet
          mymap.dragging.disable();
    
          // Désactiver le déplacement des marqueurs après l'ajout du trajet
          routingControl.getWaypoints().forEach(waypoint => {
            waypoint.dragging.disable();
          });
        } catch (error) {
          console.error("Erreur lors de la création du contrôle de routage:", error);
        }
      }
    };

    const geocodeAddress = async (address) => {
      try {
        const geocodeResponse = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
        if (geocodeResponse.data.length > 0) {
          const coordinates = [geocodeResponse.data[0].lat, geocodeResponse.data[0].lon];
          console.log(`Coordinates for ${address}:`, coordinates);
    
          // Vérifier que les coordonnées sont valides
          if (coordinates.every(coord => !isNaN(parseFloat(coord)))) {
            return coordinates;
          } else {
            console.error("Invalid coordinates found for address:", address);
            return null;
          }
        } else {
          console.error("No coordinates found for address:", address);
          return null;
        }
      } catch (error) {
        console.error("Error geocoding address:", error);
        return null;
      }
    };
    
    

    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des trajets</h1>

      <div id="mapid" style={{ height: "400px" }}></div>
      <div className="cards-container">
        {trips.map((trip) => (
          <div key={trip.id} className="card">
            <h4>{trip.etapes[0].ville_depart} - {trip.etapes[0].ville_arrivee}</h4>
            <p><b>Prix:</b> {trip.prix} €</p>
            <p><b>Date de départ:</b> {trip.date_depart}</p>
            <p><b>Heure de départ:</b> {trip.heure_depart}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
