import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader,Error,Loader,RelatedSongs } from "../components";

import {useGetArtistDetailsQuery,useGetArtistTopSongsQuery} from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const {id:artistId} = useParams();
  const {activeSong,isPlaying} = useSelector((state)=>state.player)
    const {data:artistData,isFetching:isFetchingArtistDetails,error} = useGetArtistDetailsQuery(artistId);
    const {data:artistSongs,isFetching:isFetchingArtistTopSongs,errortop} = useGetArtistTopSongsQuery(artistId);
    
    if(isFetchingArtistDetails || isFetchingArtistTopSongs) return <Loader title="Searching artists details" />;

    if(error || errortop) return <Error />
  
    return (
    <div className="flex flex-col">
        <DetailsHeader artistId={artistId} artistData={artistData.data[0]} />

        <RelatedSongs data={artistSongs?.data}
        artistId={artistId} isPlaying={isPlaying} activeSong={activeSong} />
    </div>
  )  
};

export default ArtistDetails;
