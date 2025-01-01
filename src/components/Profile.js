import React, { useContext, useEffect } from 'react'
import UserContext from '../utils/UserContext'
function Profile() {
 useEffect(()=>{
    //Api call
   const timer= setInterval(()=>{
        console.log("Profile count")
    },1000)
    return()=>{
       
        console.log("Useeffect return")
        clearInterval(timer)
    }
 },[])
   console.log("Render")

    const {loggedInUser}=useContext(UserContext);
    console.log(loggedInUser);
  return (
    <div>    <div>Profile</div>
    <div>{loggedInUser}</div>
    </div>

  )
}

export default Profile;