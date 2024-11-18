export interface IPatient {
    id: string
    userId: string
    referenceId:string
    patientId:string
    firstName: string
    lastName: string
    email: string
    phone: string
    lastLogin: string
    createdAt: string
    updatedAt: string
    role: string
    authorities: string
    createdBy: number
    updatedBy: number
    accountNonExpired: boolean
    accountNonLocked: boolean
    credentialsNonExpired: boolean
    enabled: boolean
  }

  export type Role = {role: string};
  export type Patient ={patient: IPatient};
  export type Patients = {patients: IPatient[]};