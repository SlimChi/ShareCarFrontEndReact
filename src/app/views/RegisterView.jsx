import React from "react";


import Register from './../components/account/Register';

function RegisterView() {



    return (
      <div className="flex items-center ml-[15%]">
          <div className="flex w-full  ">
            <Register/>
          </div>

          <div className="flex  w-full items-center ">
              <img src='../../../../src/Images/Logo_ShareCar.png ' className="opacity-30 w-[40rem]" />
          </div>

      </div>

    );
}


export default RegisterView;
