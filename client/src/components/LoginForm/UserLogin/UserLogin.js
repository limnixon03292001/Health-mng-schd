import React, { useState } from 'react';
import Signin from './Signin';
import loginImg from '../../../assets/imgs/loginImg.jpg';
import Signup from './Signup';

const UserLogin = () => {
  const [isSwitch, setisSwitch] = useState(false);
  return (
    <div>
    {/* Container */}
      <div className=" h-screen ">
        <div className="flex justify-center w-full h-full">
          {/* Row */}
          <div className="w-full h-full flex">
            {/* Col */}
            {/* <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={{backgroundImage: `url(${loginImg}})`}} /> */}
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg overflow-hidden">
              <img src={loginImg} alt="login" className="w-full h-full object-center object-cover" />
            </div>
            {/* Col */}
            <div className="flex items-center justify-center w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <div className="w-full">
                <form className="px-5 mb-4 bg-white rounded">
                  {!isSwitch ? 
                      <Signin setisSwitch={setisSwitch}/>
                    :
                      <Signup setisSwitch={setisSwitch}/>
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin