import Card from "./Card.js";
import { useEffect, useState } from "react";
import Simmer from "./Simmer.js";
import SimmerBody from "./SimmerBody.js"
import { Link } from "react-router-dom";
import { res_URl } from "../utils/constant.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { PromotedCard } from "./Card.js";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const Body = () => {

  const [cardData, setCardData] = useState([]); // Initialize state with an empty array
  const [filteredData, setFilteredData] = useState([]); // Separate state for filtered data
  const [search,setSearch]=useState("");
 
  const {loggedInUser,setuserName}=useContext(UserContext);

  //fetching data form swiggy
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(res_URl  );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
    //  console.log(json)
      const cards = json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants || [];
      setCardData(cards);
      setFilteredData(cards);
    //  console.log(cards)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 
  const onlineStatus=useOnlineStatus();
  if(onlineStatus === false){
    return (<h2> Your internet is offline .Please check your internet conection</h2>);
  }
  // filtering data on the avgRating >4.5
  const filterTopRated = () => {
    const topRated = cardData.filter(
      (list) => list?.info?.avgRating > 4.5
    );
   // console.log(topRated)
    setFilteredData(topRated);
    
  };
    
  if (cardData.length === 0) {
    return <SimmerBody/>;
  }
// console.log(cardData[0].data)

  //Searching the resturant through keyword
  const clickSearch=()=>{
    const filter=cardData.filter((list)=>list?.info?.name?.toLowerCase().includes(search.toLowerCase()))
    setFilteredData(filter)
    
  }
  const PromotedLabel=PromotedCard(Card);
  
  return (
    <div>
      
      <div className="flex  p-4 ">
      <div className="  flex pr-5 search " role="search">
      <input
        className=" h-10 p-4 mx-4 border  border-solid border-black rounded-md"
      
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
      />
      <button className=" h-10 px-5  bg-green-100 rounded-md" type="submit" onClick={clickSearch}>
        Search
      </button>
      </div>
        <button className=" h-10 bg-orange-300 px-4 rounded-md" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
        <div>
          <input className="h-10 p-4 mx-4 border  border-solid border-black rounded-md"
      
          value={loggedInUser}
          onChange={(e)=> setuserName(e.target.value)}
          
          >
          </input>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredData.filter((list)=>{
          return list.info !==undefined;
        }).map((item, index) => (
           <Link className='' to={'/resturent/'+item.info.id} state={item.info.id} key={index}> 
           {item.info.type==='F' ? (<Card key={index} resData={item}  />):(<PromotedLabel resData={item}/>)} 
           </Link>
         
        ))}
      </div>
    </div>
  );
};

export default Body;
