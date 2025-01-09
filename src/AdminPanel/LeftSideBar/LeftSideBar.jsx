import React from 'react'

const LeftSideBar = () => {
  return (
    <div className='flex flex-col  h-screen bg-[#F0FFF8]  md:w-[25%] lg:w-[20%] border border-gray-300 '>
        <div className='logo flex ms-5 mt-5  '>
            <img className='w-[70px] sm:w-[70px] md:w-[80px] lg:w-[80px]' src="../../../public/images/Logo.svg" alt=""  />

        </div>

        <div className='middle  ms-5 mt-5 '>
        <div className='menu flex flex-col '>
            <h2 className='text-xl '>Menu</h2>
                <ul className=''>
                    <li className='py-1'>Dashboard</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Sales</li>
                </ul>
            </div>
            <div className='menu flex flex-col '>
            <h2 className='text-xl mt-5'>Management</h2>
                <ul className=''>
                    <li className='py-1'>Products</li>
                    <li className='py-1'>Costomer</li>
                    <li className='py-1'>Warehouse</li>
                    <li className='py-1'>Reports</li>
                </ul>
            </div>

            <div className='menu flex flex-col '>
            <h2 className='text-xl mt-5'>Notifaction</h2>
                <ul className=''>
                    <li className='py-1'>Transaction</li>
                    <li className='py-1'>Message</li>
                    
                </ul>
            </div>
            

        </div>
        <div className='below space-x-2 flex items-center  justify-center p-2 ms-5 mt-10 bg-[#219b53] w-[180px] sm:w-[180px] md:w-[180px] lg:w-[190px]  whitespace-nowrap rounded'>
            <div className='image h-[30px] w-[30px] '>
                <img className='rounded-full object-cover h-full w-full' src="../../../public/images/kashif_pic.jpg" alt="" />
            </div>
            <div className='name '>
                <h3 className='font-bold'>Kashif khalil</h3>
                <p className='text-sm text-gray-800'>Software Engineer</p>
            </div>
            <div className="drop-down">
    <i className="fas fa-chevron-down text-black"></i>
  </div>

        </div>
      
    </div>
  )
}

export default LeftSideBar
