import {CDN_URL} from "../utils/constant.js";
  const Card = ({ resData }) => {
    
    const {cuisines=[],
      avgRating,
      areaName,
      costForTwo,
      locality,
      cloudinaryImageId,
      name}=resData?.info || {};

      console.log(CDN_URL+cloudinaryImageId)
    return (  
    <div className="m-5 p-4  bg-yellow-100 hover:bg-yellow-200  rounded-md w-[250px]" >
        <div className=" rounded-md">
            <img 
              src={CDN_URL+cloudinaryImageId}          
              className=" rounded-md" 
              alt="..." 
            />
        </div>
        <div className="  pt-2">
          <h5 className="font-bold pb-2 text-lg">{name}</h5>
          <p className="">Rating:{avgRating}</p>
          <p className="">{cuisines.join(", ")}</p>
          <p className="">{locality},{areaName}</p>
          <p className="">{costForTwo}</p>
          
        </div>
      </div>
    )};
    export const PromotedCard = (Card) => {
      return (props) => {
        return (
          <div>
            <label className="absolute bg-black text-white px-2 py-1 rounded-md">Promoted</label>
            <Card {...props} />
          </div>
        );
      };
    };
    
    export default Card;