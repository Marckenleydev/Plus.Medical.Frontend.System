import { IPatient } from "./IPatient";

export interface IPatientRequest {
    email: string;
    password?:string;
    userType?:string;
}

export interface IRegisterRequest extends IPatientRequest {
    firstName:string;
    lastName:string;
    phone?:string;
    aboutMe?:string;
}


export type EmailAddress = Pick<IPatientRequest, "email">;
export type UpdatePassword =Pick<IPatientRequest, "password"> &{newPassword:string, confirmNewPassword:string};
export type UpdateNewPassword = Pick<IPatient, "userId"> & UpdatePassword;