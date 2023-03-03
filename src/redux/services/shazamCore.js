import {
  createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c43952dd71msh91a9f650693175dp10eb9djsne0915588c1f6',
        'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'c43952dd71msh91a9f650693175dp10eb9djsne0915588c1f6')
            return headers;
        }
    }),
    endpoints:(builder)=>(
        {getTopCharts: builder.query({query:() => '/charts/world'})}
  ),
})

export const {useGetTopChartsQuery } = shazamCoreApi;