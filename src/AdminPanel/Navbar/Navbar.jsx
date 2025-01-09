import React from 'react';
import pak from '../../../public/flag/Pakistan.png';
import usa from '../../../public/flag/usa.webp';
import spain from '../../../public/flag/spain.png';

const Navbar = () => {
    return (
        <div className='flex justify-between ms-5'>
            <nav className='flex justify-between  p-5 '>
                <div className="relative ">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-3 py-2 rounded-md w-[700px]  bg-[#F0FFF8] border border-gray-300 focus:outline-none focus:ring focus:ring-[#219b53] "
                    />
                    <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                        <i className="fas fa-search text-gray-400"></i>

                    </div>

                </div>

                <div className="flex mx-5 space-x-4">
                    <button className=" bg-[#F0FFF8] w-[30px] rounded border border-gray-300 ">
                        <i className="fas fa-moon text-xl"></i>


                    </button>

                    <button className=" bg-[#F0FFF8] w-[30px] rounded border border-gray-300 ">
                        <i className="fas fa-bell text-xl"></i>


                    </button>

                    <label htmlFor="language-select" className="sr-only">Select Language</label>
                    <div className="inline-flex items-center bg-[#F0FFF8] border border-gray-300 rounded px-4 py-2  hover:bg-gray-100">
                        <select
                            id="language-select"
                            className="appearance-none  bg-transparent border-none outline-none cursor-pointer"
                        >
                            <option value="pakistan" selected>

                                Pakistan
                            </option>
                            <option value="usa">
                                USA
                            </option>
                            <option value="spain">
                                Spanish
                            </option>
                        </select>
                        <i className="fas fa-chevron-down ml-2"></i>
                    </div>


{/* 
                    <button className="flex justify-center items-center border border-gray-300 space-x-2 px-4 py-2 bg-[#F0FFF8] rounded">
                        <i className="fas fa-sign-out-alt px-2"></i>
                        LogOut
                    </button> */}
                <label htmlFor="profile-logout" className='sr-only'>
                
                <img src="../../../public/images/Logo.svg" alt="" />
                </label>
                   <div className='inline-flex items-center bg-[#F0FFF8] border border-gray-300 rounded px-4 py-2  hover:bg-gray-100'>
                   <select id="selection" className="appearance-none  bg-transparent border-none outline-none cursor-pointer">
                       <option value="profile">
                        Profile
                       </option>
                       <option value="logout">
                       <i className="fas fa-sign-out-alt px-2"></i>
                        Logout

                       </option>

                    </select>
                   </div>
             
                
                     

                </div>





            </nav>
        </div>
    )
}

export default Navbar
