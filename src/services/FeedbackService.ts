import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { isJsonContentType, processError, processResponse } from "../utils/requestutils";
import { Http } from "../assets/enum/http.method";
import { IResponse } from "../models/IResponse";
import { FeedbackMessage } from "../assets/model/IFeedback";

const baseUrl = "https://plusmedicalbackendsystem-production.up.railway.app/";

export const feedbackAPI = createApi({
  reducerPath: 'feedbackAPI',
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include', isJsonContentType }),
  tagTypes: ['Feedback'],
  endpoints: (builder) => ({
    sendMessage: builder.mutation<IResponse<FeedbackMessage>, { message: string,doctorId: string  }>({
      query: ({message, doctorId }) => ({
        url: `users/patients/send_feedbacks?doctorId=${doctorId}`,
        method: Http.POST,
        body: { message },
      }),
      transformResponse: processResponse<FeedbackMessage>,
      transformErrorResponse: processError,
    }),
  }),
});


