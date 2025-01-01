import { useParams } from "react-router-dom";
import Simmer from "./Simmer";
import useResturent from "../utils/useResturent";
import { CDN_URL } from "../utils/constant.js";
import ResturentCategory from "./ResturentCategory.js";
import {useState} from 'react';


const Resturent = () => {
  const [showIndex ,setshowIndex]=useState(null);
  const url=useParams();
  const { id: resId } = useParams(); // Destructure 'id' from params
  const resData = useResturent(resId);

  if (!resData) {
    return <Simmer />;
  }

  
  // Safely access data with optional chaining
  const cardData = resData[2]?.card?.card?.info || {};
  const item = resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const TopPicks = item[1]?.card?.card?.carousel || [];
  const recommended = item[2]?.card?.card?.itemCards || [];
  console.log(item)
  const ItemCategory=item.filter((list)=>{
   return( list?.card?.card["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  })
  console.log(ItemCategory)

  return (
    <div className="">
      <div className="text-center">
        <div className="p-4 mx-20  bg-blue-50 ">
          <h5 className="font-bold my-2 text-3xl">{cardData.name || "Restaurant Name"}</h5>
          <p className="card-text">{cardData.areaName || "Area Name"}</p>
          <p className="card-text">{cardData.locality || "Locality"}</p>
          <p className="card-text">{cardData.city || "City"}</p>
          <p className="card-text">
            Cost for two: {cardData.costForTwo || "N/A"}
          </p>
          <p className="card-text">
            {cardData.cuisines?.join(" ,") || "No cuisines available"}
          </p>
        </div>
        <div className="m-4">
          {ItemCategory.map((item,index)=>{
             return ( 
             <ResturentCategory
              key={index}
               data={item.card.card} 
               showItem={index===showIndex ? true :false}
               setshowIndex={(index)=> setshowIndex(index)}
               index={index}
              />)
          })}
        </div>
      </div>
    </div>
  );
};

export default Resturent;
