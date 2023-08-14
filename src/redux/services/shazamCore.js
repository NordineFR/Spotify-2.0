import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
  

export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam.p.rapidapi.com',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','620089e2d5mshe04a1be2fed7031p128975jsn2c384a7b8125');
            return headers;
        },
    }),
    endpoints : (builder)=>({
        getTopCharts : builder.query({query:() => '/charts/track'}),
        getSongDetails:builder.query({query:(songid)=>`/songs/get-details?key=${songid}`}),
        getSongRelated:builder.query({query:(songid)=>`/songs/list-recommendations?key=${songid}`}),
        getArtistDetails:builder.query({query:(artistId)=>`/artists/get-details?id=${artistId}`}),
        getArtistTopSongs:builder.query({query:(artistId)=>`/artists/get-top-songs?id=${artistId}`}),
        getChartList:builder.query({query:()=>'/charts/list'}),
        getSongsByCountry:builder.query({query:(listid)=>`/charts/track?listId=${listid}`}),
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
}= shazamCoreApi;