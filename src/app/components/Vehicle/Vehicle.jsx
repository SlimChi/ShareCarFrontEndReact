import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsCarFront } from 'react-icons/bs';
import { PiBackpack } from 'react-icons/pi';
import { PiSuitcaseRolling } from 'react-icons/pi';
import CarouselVehicle from '../../components/Vehicle/CarouselVehicle';
import { HiOutlineUsers } from 'react-icons/hi';

export default function Vehicle() {
  const [voitures, setVoitures] = useState([]);

  useEffect(() => {
    const fetchVoitures = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            console.error("Le token d'authentification est manquant.");
            return;
          }
          const response = await axios.get('https://127.0.0.1:8000/api/mycars', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token,
            },
          });
      
          setVoitures(response.data);
        } catch (error) {
          console.error('Erreur lors de la récupération des voitures:', error);
        }
      };
      

    fetchVoitures();
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col justify-between h-[20rem]  space-y-8">
          {voitures.map((car, index) => (
            <div key={index} className="flex w-[20rem] items-center">
              <BsCarFront className="text-[#57B526] text-4xl mr-6" />
              <p className="font-bold text-[20px]">x</p>
              <p className="ml-4">{`${car.modele_details.marque} ${car.modele_details.modele}`}</p>
            </div>
          ))}

          {voitures.map((car, index) => (
            <div key={index} className="flex w-[20rem] ">
              <HiOutlineUsers className="text-[#57B526] text-5xl mr-6" />
              <div className="flex w-[20rem] items-center">
                <p className="font-bold text-[20px]">x </p>
                <p className="ml-4">Nbre de passagers : {car.car.nbre_de_places}</p>
              </div>
            </div>
          ))}

          {voitures.map((car, index) => (
            <div key={index} className="flex w-[20rem] ">
              <PiBackpack className="text-[#57B526] text-5xl mr-6" />
              <div className="flex w-[20rem] items-center">
                <p className="font-bold text-[20px]">x </p>
                <p className="ml-4">Petits bagages : {car.car.nbre_petits_bagages}</p>
              </div>
            </div>
          ))}

          {voitures.map((car, index) => (
            <div key={index} className="flex w-[20rem]">
              <PiSuitcaseRolling className="text-[#57B526] text-5xl mr-6" />
              <div className="flex w-[20rem] items-center">
                <p className="font-bold text-[20px]">x </p>
                <p className="ml-4">Grands bagages : {car.car.nbre_grands_bagages}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-[15rem]">
          <CarouselVehicle />
        </div>
      </div>
    </div>
  );
}
