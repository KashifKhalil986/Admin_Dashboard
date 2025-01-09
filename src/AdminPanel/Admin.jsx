import React from 'react'
import LeftSideBar from './LeftSideBar/LeftSideBar'
import Navbar from './Navbar/Navbar'
import Hero from './HeroSection/Hero'


const Admin = () => {
  return (
    <div className='flex '>
      <LeftSideBar/>
      <div>
        <div className='nav '>
            <Navbar/>
        </div>
        <div>
            <div className='main'>
              <Hero/>
               
            </div>
            <div className='right'>
               
            </div>
        </div>
   
      </div>
    </div>
  )
}

export default Admin
