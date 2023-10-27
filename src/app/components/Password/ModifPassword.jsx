import React from "react";


export default function ModifPassword () {

    return(
        <form 
            action="" 
            className="flex flex-col items-center"
            >
                <div className="w-[25rem] flex flex-col space-y-8">
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Mot de passe"/>

                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Nouveau mot de passe"/>
                </div>

                <button type="submit" className="btn-green w-[15rem] h-[3rem] mt-[5rem]">
                    Enregistrer
                </button>
        </form>
    )
    
}