

import {  messageAPI } from '../services/ContactService';

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger"
import { patientAPI } from "../services/PatientService";
import { doctorAPI } from "../services/DoctorService";
import { medicalServiceAPI } from "../services/MedicalService";
import { feedbackAPI } from '../services/FeedbackService';
import { appointmentAPI } from '../services/Appointment';


const rootReducer = combineReducers({
    [patientAPI.reducerPath]: patientAPI.reducer,
    [doctorAPI.reducerPath]: doctorAPI.reducer,
    [medicalServiceAPI.reducerPath]: medicalServiceAPI.reducer,
    [messageAPI.reducerPath]: messageAPI.reducer,
    [feedbackAPI .reducerPath]: feedbackAPI .reducer,
    [appointmentAPI .reducerPath]: appointmentAPI .reducer,
});

export const setupStore = ()=>{
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware)=>
            getDefaultMiddleware({serializableCheck: false})
        .concat(patientAPI.middleware)
        .concat(doctorAPI.middleware)
        .concat(medicalServiceAPI.middleware)
        .concat(messageAPI.middleware)
        .concat(feedbackAPI.middleware)
        .concat(appointmentAPI.middleware)
        .concat(logger)

    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];