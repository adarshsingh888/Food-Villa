import React from 'react';
import UserContext from '../utils/UserContext';

class ProfileClass extends React.Component{

   constructor(props){
    super(props)
    this.state={
        count:0
    }

   }
   componentDidMount(){
    console.log("Profile CDM");
     this.setState({count:3});
    this.timer=setInterval(()=>{
        console.log("Profile Interval Count");
     },1000)
    
   }

   componentDidUpdate(){
    console.log(" Profile CDU");
   }

   componentWillUnmount(){
    clearInterval(this.timer)
    console.log("Profile CWU");
   }


    render(){
        console.log("Profile Render")
        return (
            <div>
                This is Profile class.

                <div>

                   <UserContext.Consumer>
                     {({loggedInUser})=> <h3 className='font-bold text-5xl'>{loggedInUser}</h3>}
                   </UserContext.Consumer>
                </div>
            </div>
        )
    }
}

export default ProfileClass