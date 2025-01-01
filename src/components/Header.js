import { LOGO_URL } from "../utils/constant";
import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/appStore";

const Header = () => {
  let [login,setlogin]=useState("Login");
  let [buttonclass,setbuttonclass]=useState(" px-5 ");
  const {loggedInUser}=useContext(UserContext);
  const onlineStatus=useOnlineStatus();

  // Subscribing to store use selector
  const cartItems=useSelector((store)=> store.cart.items )
  console.log(cartItems)
  const reverse=()=>{
      if(login==="Login"){
        setlogin("Logout")
        setbuttonclass(" px-5");
      }
      else{
        setlogin("Login")
        setbuttonclass("")
      }
  }
  return(
    
    <div className="flex justify-between bg-pink-50 shadow-lg mb-4">
      <div className="w-24" id="logo">
        <a href="/">
        <img
          src={LOGO_URL}
          alt="Logo"
        />
        </a>
      </div>
      <div className=" flex p-4 m-4 items-center ">
        <ul className="flex">
          <li className="px-4">Online Status : {onlineStatus ?  '🟢' :' 🔴'  }</li>
          <li className="px-4"><Link to='/'>Home</Link></li>
          <li className="px-4"><Link to='/about'>About</Link></li>
          <li className="px-4">  <Link to="/contact"> Contect</Link></li> 
          <li className="px-4 font-bold"><Link to='/cart'>Cart ({cartItems.length})</Link> </li>
          <li className="px-4"> <button type="button" className= {buttonclass }  onClick={reverse}>{login}</button></li>
          <li className="px-4">  <button className="">Sign Up</button></li>
          <li className="px-4"><Link to=''>{loggedInUser}</Link> </li>

        </ul>
        
      
     
       
      </div>
    </div>
  )};
  
  export default Header;
  