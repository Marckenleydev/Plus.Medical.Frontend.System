import { Feedback } from "./IFeedback"
import { Specialisation } from "./ISpecialisation"

export interface IDoctor {
    id: number
    userId: string
    doctorId: string
    referenceId:string
    firstName: string
    lastName: string
    aboutMe: string
    email: string
    phone: string
    education:string
    specialisation: Specialisation
    feedbacks: Feedback[]
    image_Url: string
    imageUrl:string
    lastLogin: string
    createdAt: string
    updatedAt: string
    role: string
    authorities: string
    rating:number
    totalPatients: number
    totalRating: number
    createdBy: number
    updatedBy: number
    accountNonExpired: boolean
    accountNonLocked: boolean
    credentialsNonExpired: boolean
    enabled: boolean
  }

  export type Query = {name?: string, page: number, size: number}
  export type Role = {role: string};
export type Doctor ={doctor: IDoctor};
export type Doctors = {doctors: IDoctor[]};