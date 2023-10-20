import react from "@heroicons/react";

export default function Footer() {
    return (
        <footer className="bg-[#114076] text-white h-40">
            <div className="flex justify-center items-center">
                <div className="flex justify-between w-1/5 mt-20">
                    <a href="">Informations légales</a>
                    <a href="">Paramètre des cookies</a>
                </div>
                <div className="flex flex-row justify-center items-center w-1/4">
                    <img
                        className="h-20"
                        src="../../../../src/Images/Logo_ShareCar.png"
                        alt="Workflow"  
                    />
                    <p className="text-base text-white">SHARE CAR</p>
                </div>

                <div className="flex justify-between w-1/5 mt-20">
                    <a href="">Nous contacter</a>
                    <a href="">Transparence des plateformes</a>
                </div>       
            </div>

            <div className="w-[60%] h-0.5 bg-[#57B526] flex ml-[20%] mt-4"></div>

            <div></div>
        </footer>
    )
}