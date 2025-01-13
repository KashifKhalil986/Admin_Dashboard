
import { useState } from 'react';


const LeftSideBar = () => {
    
    const [isOpen ,setisOpen]=useState(false);

   const sideBartoggle =()=>{
        setisOpen(!isOpen)
    }
    
    
    
    return (
<>

    <button 
    className="lg:hidden p-2 absolute top-2 left-2 z-50 bg-[#219b53] text-white rounded"
    onClick={sideBartoggle}
    >
    <i className="fas fa-bars"></i>
    </button>


      <div  className={`${isOpen ? 'w-full sm:w-full' :'hidden'} relative lg:block lg:w-[20%] flex flex-col bg-[#F0FFF8] w-full sm:w-full md:w-[25%]  border border-gray-300   z-40`}>
        <div className='middle ms-5 mt-5'>
          
          {/* Menu Section */}
          <div className='menu flex flex-col'>
            <h2 className='text-xl'>Menu</h2>
            <ul>
              <li className='py-1'>Dashboard</li>
              <li className='py-1'>Analytics</li>
              <li className='py-1'>Sales</li>
            </ul>
          </div>
  
          {/* Management Section */}
          <div className='menu flex flex-col mt-5'>
            <h2 className='text-xl'>Management</h2>
            <ul>
              <li className='py-1'>Products</li>
              <li className='py-1'>Customer</li>
              <li className='py-1'>Warehouse</li>
              <li className='py-1'>Reports</li>
            </ul>
          </div>
  
          {/* Notification Section */}
          <div className='menu flex flex-col mt-5'>
            <h2 className='text-xl'>Notification</h2>
            <ul>
              <li className='py-1'>Transaction</li>
              <li className='py-1'>Message</li>
            </ul>
          </div>
        </div>
  
        {/* User Profile Section */}
        <div className='below flex items-center justify-start p-2 mt-10 bg-[#219b53] w-full sm:w-full md:w-[180px] lg:w-[190px] rounded'>
          <div className='image h-[30px] w-[30px]'>
            <img className='rounded-full object-cover h-full w-full' src="/images/kashif_pic.jpg" alt="Profile" />
          </div>
          <div className='name ml-3'>
            <h3 className='font-bold text-white'>Kashif Khalil</h3>
            <p className='text-sm text-gray-200'>Software Engineer</p>
          </div>
          <div className="drop-down ml-auto">
            <i className="fas fa-chevron-down text-black"></i>
          </div>
        </div>
        
      </div>
      </>
    );
  };
  
  export default LeftSideBar;