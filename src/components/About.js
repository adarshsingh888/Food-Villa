import UserClass from "./UserClass";
import { Component } from "react";
import Profile from "./Profile";


class About extends Component{
    constructor(props){
        super (props);
        this.state={
           
        }
        console.log(" Parent Constructer ")
    }
   async componentDidMount(){
        
       
        console.log("Parent CDM")
        
    }
    render(){
        const { userData } = this.state;
        console.log("Parent Render")
        console.log(userData);
        return(
               <div className="container-fluid">
                  <h3>Hello</h3>
                
                  <UserClass data={userData}/>
                  <Profile/>
               </div>
        )
    }
}

/*
 Parent Constructer 
 Parent Render


 First Child Constructer
 First Child Render

 Second Child Constructer
 Second Child Render

 <DOM - Update in Single Batch>

 First Child ComponentDidMount
 Second Child ComponentDidMount

 Parent ComponentDidMount



*/ 


export default About;