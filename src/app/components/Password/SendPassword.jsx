import React from "react";


export default function SendPassword () {

    return(
        <>
        <form 
            action="" 
            className="flex flex-col items-center"
            >
                <div className="w-[25rem] flex flex-col space-y-8">
                    

                    <input 
                        type="email" 
                        name="email"
                        className="input" 
                        placeholder="Email"/>
                </div>

                <button type="submit" className="btn-green w-[15rem] h-[3rem] mt-[5rem]">
                    Envoyer
                </button>
        </form>
        </>
    )
    
}