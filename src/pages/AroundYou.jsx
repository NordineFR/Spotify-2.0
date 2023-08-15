import { useState,useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useGetSongsByCountryQuery,useGetChartListQuery } from "../redux/services/shazamCore";

import { Error,Loader,SongCard } from "../components";
const AroundYou = () =>{
    const [listId, setListId] = useState({});
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const {activeSong,isPlaying} = useSelector((state)=>state.player);
    const {data:ListData,isFetching:isFetchingListData,errorlist} = useGetChartListQuery();
    const {data,isFetching,error} = useGetSongsByCountryQuery(listId.listid);
    const apiKeyMap = import.meta.env.VITE_GEO_API_KEY;


    useEffect(() => {
        if (ListData && ListData.countries) {
          ListData.countries.forEach((countrydata) => {
            if (countrydata.id === country) {
                setListId(countrydata);
            }
          });
        }
      }, [ListData, country]);
    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${apiKeyMap}`)
        .then((res)=>setCountry(res?.data?.location?.country))
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))
    }, [country]);
    
    if(isFetching && loading){
        return <Loader title="Loading songs around you" />;
    }
    if(error && country) return <Error />;


    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around You <span className="font-black">{country}</span></h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {(data?.tracks)?.map((song,i)=>(
                    <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong}
                    i={i} data={data}/>
                ))}
            </div>
        </div>
    )
}

export default AroundYou;
