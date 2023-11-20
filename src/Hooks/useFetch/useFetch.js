import React, { useState } from "react";
import axios from "axios";

const useFetch=(url)=>{
const [Data,setData]=useState([]);
const [loading,setloading]=useState(false);
const [error,seterror]=useState(null);

    async function  getData(){

try {
    const {data}=await axios.get(url);
 
setData(data);
setloading(true);
} catch (err) {
setloading(true);
    seterror(err);
}



    }

useState(()=>{
    getData();
},[])

return {Data,loading,error}

}

export default useFetch;