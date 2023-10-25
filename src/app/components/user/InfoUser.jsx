import React from "react";

import { IoIosStar } from "react-icons/io";


const InfoUser = ({}) => {
    return (
        <div className="flex flex-col justify-between h-[33rem]">
            <div className="mt-4 flex justify-between">
                <div className="flex items-center justify-between w-[6rem]">
                    <IoIosStar className="text-[yellow] text-4xl"/>
                    <p className="">4.5 / 5</p>
                </div>
                <div className="flex flex-col ">
                    {/* <p>Membre depuis : <em>{oneUser.date}</em></p> */}
                    <p>Membre depuis : <em>Oct 2023</em></p>
                    <p>Nbre de points: <em>2 500pt</em></p>
                </div>
            </div>

            <div className="flex flex-col justify-between mt-8 ">
                <div className="flex flex-col justify-evenly h-[15rem]">
                    {/* <p>{oneUser.firstname}</p>
                    <p>{oneUser.lastname}</p>
                    <p>{oneUser.username}</p>
                    <p>{oneUser.age}</p>
                    <p>{oneUser.email}</p> */}
                    <p>firstname</p>
                    <p>lastname</p>
                    <p>username</p>
                    <p>age</p>
                    <p>email</p>
                </div>
                <div className="flex flex-col justify-evenly h-[7rem]">
                    {/* <p>{oneUser.address}</p> */}
                    <p>address</p>
                
                    <div className="flex flex-row">
                        {/* <p>{oneUser.zipcode}</p> */}
                        <p>zipcode</p>
                        {/* <p className="ml-8">{oneUser.city}</p> */}
                        <p className="ml-8">city</p>
                    </div>
                </div>
            </div>

        </div>
         );
};

export default InfoUser;