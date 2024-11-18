import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { isJsonContentType, processError, processResponse } from "../utils/requestutils";
import { Http } from "../assets/enum/http.method";
import { IResponse } from "../models/IResponse";


const baseUrl = "https://plusmedicalbackendsystem-production.up.railway.app/";

export const appointmentAPI = createApi({
  reducerPath: 'appointmentAPI',
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include', isJsonContentType }),
  tagTypes: ['Appointment'],
  endpoints: (builder) => ({
    bookAppointment: builder.mutation<IResponse<void>, {userId:string, localDateTime: string }>({
      query: ({userId, localDateTime}) => ({
        url: `users/patients/appointments?localDateTime=${localDateTime}`,
        method: Http.POST,
        body: { userId },
      }),
      transformResponse: processResponse<void>,
      transformErrorResponse: processError,
    }),
  }),
});


