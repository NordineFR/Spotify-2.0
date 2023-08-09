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
    })
});

export const {
    useGetTopChartsQuery,
}= shazamCoreApi;