

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { isJsonContentType, processError } from "../utils/requestutils"

import { Page } from "../assets/model/IPage"
import { Doctor, Query } from "../assets/model/IDoctor"
import { Http } from "../assets/enum/http.method"
import { IResponse } from "../models/IResponse"

const baseUrl = "https://plusmedicalbackendsystem-production.up.railway.app/users/doctors";


export const doctorAPI = createApi({
    reducerPath: 'DoctorAPI',
    baseQuery: fetchBaseQuery({baseUrl, credentials: 'include', isJsonContentType}),
    tagTypes: ['Doctors'],
    endpoints: (builder)=>({
        fetchDoctors: builder.query<IResponse<Page>, Query>({
            query: (query)=>({
                url: `/search?page=${query.page}&size=${query.size}&name=${query.name}`,
                method: Http.GET
            }),
      
            transformErrorResponse: processError,
            providesTags: (result, error)=> ['Doctors']
        }),

 

        fetchDoctor: builder.query<IResponse<Doctor>, string>({
            query: (doctorId)=>({
                url: `/${doctorId}`,
                method: Http.GET,
             
            }),
            transformErrorResponse: processError,
            providesTags: (result, error)=> ['Doctors']
           
        }),

     
    })
    
})