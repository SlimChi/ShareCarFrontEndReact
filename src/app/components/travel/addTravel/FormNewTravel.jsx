import react from "@heroicons/react";

import EditLocationAltOutlinedIcon from '@mui/icons-material/EditLocationAltOutlined';
import {FaRegCreditCard} from "react-icons/fa"
import {AiOutlineFieldTime} from "react-icons/ai"
import {BsCalendar3} from "react-icons/bs"


export default function FormNewTravel () {



    return (
        <div className="flex flex-col justify-between items-center h-[100vh]">
            <div className="flex justify-center ">
                <div className="">
                    <h3 className="flex items-center font-bold text-[#114076] text-[18px]">
                        <EditLocationAltOutlinedIcon className="text-[#57B526] text-[24px] mr-4"/>
                        Adresse Départ</h3>
                    <div className="flex flex-col space-y-4 w-[35rem]">
                        <input type="text" name="adresse" id="adresse1" placeholder="adresse" className="input"/>
                        <div className="flex">
                            <input type="text" name="code_postal" id="code_postal"placeholder="code_postal" className="input w-[10rem] mr-6" />
                            <input type="text" name="ville" id="ville" placeholder="ville" className="input"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center ">
                <div className="">
                    <h3 className="flex items-center font-bold text-[#114076] text-[18px]">
                        <EditLocationAltOutlinedIcon className="text-[#57B526] text-[24px] mr-4"/>
                        Etape Intermediaire</h3>
                    <div className="flex flex-col space-y-4 w-[35rem]">
                        <input type="text" name="adresse" id="adresse1" placeholder="adresse" className="input"/>
                        <div className="flex">
                            <input type="text" name="code_postal" id="code_postal"placeholder="code_postal" className="input w-[10rem] mr-6" />
                            <input type="text" name="ville" id="ville" placeholder="ville" className="input"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center ">
                <div className="">
                    <h3 className="flex items-center font-bold text-[#114076] text-[18px]">
                        <EditLocationAltOutlinedIcon className="text-[#57B526] text-[24px] mr-4"/>
                        Adresse Arrivée</h3>
                    <div className="flex flex-col space-y-4 w-[35rem]">
                        <input type="text" name="adresse" id="adresse1" placeholder="adresse" className="input"/>
                        <div className="flex">
                            <input type="text" name="code_postal" id="code_postal"placeholder="code_postal" className="input w-[10rem] mr-6" />
                            <input type="text" name="ville" id="ville" placeholder="ville" className="input"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-evenly w-full mt-[5rem]">
                <div>
                    <h4 className="text-sm text-[#114076]">Tarif</h4>
                    <div className="flex items-center">
                        <FaRegCreditCard className="text-[#57B526] text-[28px] mt-4 mr-4"/>
                        <input type="text" name="tarif" id="tarif" className="input w-[15rem]"/>
                    </div>
                </div>
                <div>
                    <h4 className="text-sm text-[#114076]">Date</h4>
                    <div className="flex items-center">
                        <BsCalendar3 className="text-[#57B526] text-[28px] mt-4 mr-4"/>
                        <input type="date" name="tarif" id="tarif" className="input w-[15rem]"/>
                    </div>
                </div>
                <div>
                    <h4 className="text-sm text-[#114076]">Heure départ</h4>
                    <div className="flex items-center">
                        <AiOutlineFieldTime className="text-[#57B526] text-[28px] mt-4 mr-4"/>
                        <input type="time" name="tarif" id="tarif" className="input w-[15rem]"/>
                    </div>
                </div>
            </div>


        </div>
    )
}