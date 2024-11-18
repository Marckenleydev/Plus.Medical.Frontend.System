
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { isJsonContentType, processError, processResponse } from "../utils/requestutils"
import { Http } from "../assets/enum/http.method"
import { IResponse } from "../models/IResponse"
import { IMessage, Message } from "../assets/model/IMessage";


const baseUrl = "https://plusmedicalbackendsystem-production.up.railway.app/api/";


export const messageAPI = createApi({
    reducerPath: 'messageAPI',
    baseQuery: fetchBaseQuery({baseUrl, credentials: 'include', isJsonContentType}),
    tagTypes: ['Message'],
    endpoints: (builder)=>({
        sendMessage: builder.mutation<IResponse<Message>, IMessage>({
            query: (registerRequest)=>({
                url: 'messages',
                method: Http.POST,
                body: registerRequest
            }),
            transformResponse: processResponse<Message>,
            transformErrorResponse: processError,
           
        }),


 

   
    })
})