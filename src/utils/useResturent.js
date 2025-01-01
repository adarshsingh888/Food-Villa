import { useEffect, useState } from "react";
import { resInfo_URL } from "./constant";
const useResturent=(id)=>{
    const [resData,setresData]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const response=await fetch(resInfo_URL+id);
        const json =await response.json();
        setresData(json.data.cards);
    }
    return resData;


}
export default useResturent;