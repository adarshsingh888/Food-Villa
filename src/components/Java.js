import { useEffect,useState } from "react";

const Java=()=>{
    const [jsonData,setjsonData]=useState({});
    // useEffect(()=>{
    //     fetchData();
    // },[])
    // const fetchData= async()=>{
    //     const response= await fetch("http://localhost:8080/json-data");
    //     const json= await response.json();
    //     setjsonData(json)
    //     console.log(jsonData);

    // }

    return (
        <div>
            This is data of Java Backend;
            <p>{jsonData.message}</p>
            <p>{jsonData.status}</p>

        </div>
    )
}
export default Java;