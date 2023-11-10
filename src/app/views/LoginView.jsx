import React from 'react';

import Login from './../components/account/Login';


const LoginView = () => {


    return (
      
        <div className="flex items-center ml-[15%]">
            <div className="flex w-full  ">
                <Login className="" />
            </div>
            <div className="flex  w-full items-center ">
                <img src='../../../../src/Images/Logo_ShareCar.png ' className="opacity-30 w-[40rem]" />
            </div>
    
        </div>
    );
};

export default LoginView;
