import React from 'react';
import Data from '../../../public/data.json';
import Card from '../Components/Card';
import PropTypes from 'prop-types';




const Hero = () => {
    const balanceDetails = [
        {
            "id" :1,
            "icon" :"fas fas fa-arrow-up",
            "iconColor":"text-green-500",
            "decs" :"Incomes",
            "price":"$ 120"

        },
        {
            "id" :2,
            "icon" :"fas fa-arrow-down",
             "iconColor":"text-red-500",
            "decs" :"Expensive",
            "price":"$-160"

        },
        {
            "id" :3,
            "icon" :"fas fa-arrow-down",
             "iconColor":"text-red-500",
            "decs" :"Taxis",
            "price":"$-220"

        }
    ]
    

    
  return (
           <div className="main flex flex-row gap-8">


            {/* middle section (cards and graphs) */}
                <div className='middle flex flex-col ms-5 w-[800px] border border-2 border-yellow-200'>
   
   {/* cards */}
   <div className="cards flex flex-wrap w-[800px] gap-[35px] ps-5">
        {Data.map((element)=>(
                <div className="w-[15%] " key={element.id}>
                <Card
              

                id={element.id}
                icon={element.icon}
                iconBgColor={element.iconBgColor}
                title={element.title}
                description={element.description}
                price ={element.price}
                /> 
                  </div>
           
           ))}


    </div>
    <div className="graph">
        {/* graph */}
    </div>
    </div>
    <div className="right flex flex-col w-[220px] border border-2 ">
              
              <div className="top bg-orange-400 rounded-lg p-5 text-white">
              <div className="balance">
                  <h3 className='font-bold text-2xl'>$ 44.40</h3>
                  <p>Active balance</p>
              </div>
              <div className="b-details">
                 {balanceDetails.map((el)=>(
               <div className='flex flex-row mt-2 pt-2 items-center ' key={el.id}>
               <div className={`${el.icon} ${el.iconColor} bg-white rounded p-1 text-[10px]`}></div>
                <div className='ps-2'>{el.decs}</div>
                <div className='ml-auto'>{el.price}</div>
                {/* <div>{el.price}</div> */}
               </div>
                 ))}
              </div>

              <button type="button" className=" bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300 rounded px-4 py-2">
Add Vertical Card
</button>
</div>
              
              <div className="bottom">
khalil
              </div>
             
            </div>
           </div>
  )
}

export default Hero
