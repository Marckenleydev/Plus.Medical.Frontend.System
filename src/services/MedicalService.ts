

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { isJsonContentType, processError } from "../utils/requestutils"

import { Page } from "../assets/model/IPage"
import { Query } from "../assets/model/IDoctor"
import { Http } from "../assets/enum/http.method"
import { IResponse } from "../models/IResponse"
import { MedicalService } from "../assets/model/IMedicalService"

const baseUrl = "https://plusmedicalbackendsystem-production.up.railway.app/api/medicalservices";


export const medicalServiceAPI = createApi({
    reducerPath: 'MedicalServiceAPI',
    baseQuery: fetchBaseQuery({baseUrl, credentials: 'include', isJsonContentType}),
    tagTypes: ['MedicalServices'],
    endpoints: (builder)=>({
        fetchMedicalServices: builder.query<IResponse<Page>, Query>({
            query: (query)=>({
                url: `?page=${query.page}&size=${query.size}`,
                method: Http.GET
            }),
      
            transformErrorResponse: processError,
            providesTags: (result, error)=> ['MedicalServices']
        }),

 

        fetchMedicalService: builder.query<IResponse<MedicalService>, string>({
            query: (doctorId)=>({
                url: `/${doctorId}`,
                method: Http.GET,
             
            }),
            transformErrorResponse: processError,
            providesTags: (result, error)=> ['MedicalServices']
           
        }),

     
    })
    
})