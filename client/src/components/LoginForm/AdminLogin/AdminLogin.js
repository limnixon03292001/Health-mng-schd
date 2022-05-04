import React from 'react';
import loginImg from '../../../assets/imgs/loginImg.jpg';

const AdminLogin = () => {
  return (
    <>
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
              <div className="w-full sm:w-3/4">
                <form className="px-5 mb-4 bg-white rounded">
                  <div className="lg:px-8">
                    <h3 className="mb-6 text-2xl text-center">
                      Administrator.
                    </h3>
                    <div className="relative z-0 w-full mb-6 group">
                      <input type="text" naeme="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="mb-6 text-left">
                      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center rounded-full">Login</button>
                    </div>
                    <hr className="mb-6 border-t" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLogin