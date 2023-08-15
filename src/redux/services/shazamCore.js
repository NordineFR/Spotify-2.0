import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
  
// Get the API key from the environment variable
const apiKey = import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY;

export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam.p.rapidapi.com',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key',apiKey);
            return headers;
        },
    }),
    endpoints : (builder)=>({
        getTopCharts : builder.query({query:() => '/charts/track'}),
        getSongsByGenre : builder.query({query:(listid) => `/charts/track?listId=${listid}`}),
        getSongDetails:builder.query({query:(songid)=>`/songs/get-details?key=${songid}`}),
        getSongRelated:builder.query({query:(songid)=>`/songs/list-recommendations?key=${songid}`}),
        getArtistDetails:builder.query({query:(artistId)=>`/artists/get-details?id=${artistId}`}),
        getArtistTopSongs:builder.query({query:(artistId)=>`/artists/get-top-songs?id=${artistId}`}),
        getChartList:builder.query({query:()=>'/charts/list'}),
        getSongsByCountry:builder.query({query:(listid)=>`/charts/track?listId=${listid}`}),
        getSongsBySearch:builder.query({query:(searchTerm)=>`/search?term=${searchTerm}`}),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetArtistTopSongsQuery,
    useGetChartListQuery,
    useGetSongsByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery,
}= shazamCoreApi;