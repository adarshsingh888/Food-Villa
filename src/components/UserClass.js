import { Component } from "react";
import Simmer from "./Simmer";
class UserClass extends Component{
    
    constructor(props){
      super(props);
      console.log( 'Child Constructer',this.props.data)
      this.state={
        userData:undefined
      }

    }
    async componentDidMount(){
      console.log("Child CDM")
        const response=await fetch("https://api.github.com/users/adarshsingh888");
        const userData= await response.json();
        this.setState({userData:userData});
        

    }
     
    componentDidUpdate(prevProps,prevState){
      if(this.state.count != prevState.count){
        
      }
      console.log("ComponentDidUpdate")
    }
    componentWillUnmount(){
      console.log("componentWillUnmount")
    }
    
    render(){
        
       
       
        if(this.state.userData===undefined){
            console.log("Child Simmer Render")
          return <Simmer/>
        }
        const {name,avatar_url,bio,html_url,location}=this?.state?.userData;
        return(
            <div className="card" style={{ width: '18rem' }}>
             <img src={avatar_url} className="card-img"></img>
             <h5 className="card-title">{name}</h5>
             <p className="card-text">{bio}</p>  
             <p className="card-text"><a href={html_url}>Git Hub Profile Link</a></p>  
             <p className="card-text">{location}</p>  
              
            </div>
        )
    }

}
export default UserClass;


/**
 * Constructer (Dummy )
 * Render(Dummy)
 *    <HTML Dummy >
 * 
 * ComponentDidMount   
 *       <API Call >
 *       <this.setState>
 *  
 *  -----Update
 *       render(API date)
 *       <HTML (new API data)>
 *       componentDid Update
 */