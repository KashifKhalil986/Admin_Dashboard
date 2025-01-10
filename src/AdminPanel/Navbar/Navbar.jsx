import  { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const [LangisOpen, setLangIsOpen] = useState(false);

    const toggleLanguage = () => {
      setLangIsOpen(!LangisOpen);
    };
    return (
        <div className='flex justify-between '>
            <nav className='flex justify-between w-full p-5'>
          
            <div className='logo flex  '>
            <img className='w-[70px] sm:w-[70px] md:w-[80px] lg:w-[80px]' src="../../../public/images/Logo.svg" alt=""  />

        </div>
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

                    <div className="relative inline-block">
                <button
                 className="flex item-center border  bg-[#F0FFF8]  border-gray-300 rounded p-2 py-2"
                    onClick={toggleLanguage}>
                    Languages
                    <i className={`p-1 fas fa-chevron-down text-gray-500 ${LangisOpen ? 'rotate-180' : ''}`}></i>
                </button>
              {LangisOpen && (
                  <ul className='absolute mt-1 w-28 text-center bg-white border border-gray-300 rounded shadow-lg'>
                  <li className="px-4 py-2  hover:bg-gray-100 cursor-pointer">Pakistan</li>
                  <li className="px-4 py-2  hover:bg-gray-100 cursor-pointer">Usa</li>
                  <li className="px-4 py-2  hover:bg-gray-100 cursor-pointer">Spain</li>
              </ul>
              )

              }
                
                </div>     

<div className="relative inline-block">
    
      <button
        id="profile-logout"
        onClick={toggleDropdown}
        className="flex justify-center items-center w-10 h-10 bg-[#F0FFF8] border border-gray-300 rounded-full hover:bg-gray-100"
      >
        <img src="../../../images/justLogo.svg" alt="Logo" className="w-6 h-6 " />
      
      </button>

     
      {isOpen && (
        <ul className="absolute mt-1 ml-[-30px] bg-white border border-gray-300 rounded shadow-lg">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profiles</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
            <i className="fas fa-sign-out-alt "></i>
            Logout
          </li>
        </ul>
      )}
    </div>



      
                
                     

                </div>





            </nav>
        </div>
    )
}

export default Navbar
