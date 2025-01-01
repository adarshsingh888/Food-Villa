import React, { useState } from 'react'
import ItemCard from './ItemCard';

function ResturentCategory({data,showItem,setshowIndex,index}) {
  // const [showItem ,setshowItem]=useState(false);
  
 
   const handleClick=()=>{
      console.log("Clicked") 
      showItem===true ? setshowIndex(null) : setshowIndex(index);
      
     // showItem ? setshowItem(false):setshowItem(true)
   }
   
    const catData=data;
    const itemData=catData?.itemCards;
  return (
    <div className='flex flex-col justify-self-center w-6/12 bg-gray-100' >
         <div className=' px-4 my-2 min-h-10  shadow-lg flex justify-between items-center' onClick={handleClick}>
            <span className='font-bold items-center'>{catData.title}  ({catData.itemCards.length})</span>
           {showItem===false ? (<span><i className="fa-solid fa-circle-chevron-down"></i></span>)  : (<span><i className="fa-solid fa-circle-chevron-up "></i></span>)}
         </div>
         <div>
            {itemData.map((item)=>(
               showItem && <ItemCard data={item?.card?.info} key={item?.card?.info?.id}  />
            ))}
            
         </div>



   </div>
   
  )
}

export default ResturentCategory;