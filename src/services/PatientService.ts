import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { Patient } from "../assets/model/IPatient";
import { IResponse } from "../models/IResponse";
import { Http } from "../assets/enum/http.method";
import {   isJsonContentType, processError, processResponse } from "../utils/requestutils";
import { EmailAddress, IPatientRequest, IRegisterRequest, UpdateNewPassword, UpdatePassword } from "../assets/model/ICredentials";

const baseUrl = "https://plusmedicalbackendsystem-production.up.railway.app/";

export const patientAPI = createApi({
    reducerPath: 'patientAPI',
    baseQuery: fetchBaseQuery({baseUrl, credentials: 'include', isJsonContentType}),
    tagTypes: ['Patient'],
    endpoints: (builder)=>({
        fetchPatient: builder.query<IResponse<Patient>, void>({
            query: ()=>({
                url: 'users/patients/profile',
                method: Http.GET
            }),
            keepUnusedDataFor:120,
            transformResponse: processResponse<Patient>,
            // transformErrorResponse: processError,
            providesTags: (result, error)=> ['Patient']
        }),

        registerPatient: builder.mutation<IResponse<void>, IRegisterRequest>({
            query: (registerRequest)=>({
                url: 'users/patients/register',
                method: Http.POST,
                body: registerRequest
            }),
            transformResponse:processResponse<void>,
            transformErrorResponse: processError,
           
        }),



        verifyAccount: builder.mutation<IResponse<void>, string>({
            query: (key)=>({
                url: `users/patients/verify/account?key=${key}`,
                method: Http.GET,
             
            }),
            transformResponse: processResponse<void>,
            transformErrorResponse: processError,
           
        }),

        verifyPassword: builder.mutation<IResponse<Patient>, string>({
            query: (key)=>({
                url: `users/patients/verify/password?key=${key}`,
                method: Http.GET,
             
            }),
            transformResponse: processResponse<Patient>,
            transformErrorResponse: processError,
           
        }),

        loginPatient: builder.mutation<IResponse<Patient>, IPatientRequest>({
            query: (credentials)=>({
                url: '/user/login',
                method: Http.POST,
                body: credentials
            }),
            transformResponse: processResponse<Patient>,
            transformErrorResponse: processError,
           
        }),
        logoutPatient: builder.mutation<IResponse<void>, void>({
            query: (credentials)=>({
                url: '/users/patients/logout',
                method: Http.POST,
                body: credentials
            }),

        }),
        resetPassword: builder.mutation<IResponse<void>, EmailAddress>({
            query: (email)=>({
                url: `users/patients/resetpassword`,
                method: Http.POST,
                body: email
             
            }),
            transformResponse:processResponse<void>,
            transformErrorResponse: processError,
            invalidatesTags: (result, error) => error ? [] : ['Patient'] 
           
        }),

        doResetPassword: builder.mutation<IResponse<void>, UpdateNewPassword>({
            query: (passwordRequest)=>({
                url: `users/patients/resetpassword/reset`,
                method: Http.POST,
                body: passwordRequest
             
            }),
            transformResponse: processResponse<void>,
            transformErrorResponse: processError,
            invalidatesTags: (result, error) => error ? [] : ['Patient']
           
        }),
        updatePhoto: builder.mutation<IResponse<string>, FormData>({
            query: (form)=>({
                url: `users/patients/photo`,
                method: Http.PATCH,
                body: form
             
            }),
            transformResponse: processResponse<string>,
            transformErrorResponse: processError,
            invalidatesTags: (result, error) => error ? [] : ['Patient']
           
        }),
        
        updatePassword: builder.mutation<IResponse<void>, UpdatePassword>({
            query: (request)=>({
                url: `users/patients/update_password`,
                method: Http.PATCH,
                body: request
             
            }),
            transformResponse: processResponse<void>,
            transformErrorResponse: processError,
            invalidatesTags: (result, error) => error ? [] : ['Patient']
           
        }),


        

    

     
    })
    
})

