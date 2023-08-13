import { useState,useEffect } from "react";
import { Axios } from "axios";
import { useSelector } from "react-redux";


import { Error,Loader,Songcard } from "../components";
const AroundYou = () =>{
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const {activeSong,isPlaying} = useSelector((state)=>state.player);

    useEffect(() => {
      
    }, [country]);
    
    return (
        <div ></div>
    )
}

export default AroundYou;
