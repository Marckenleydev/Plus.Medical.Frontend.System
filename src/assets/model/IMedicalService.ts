export interface IMedicalService {
    id: number
    referenceId: string
    createdBy: number
    updatedBy: number
    createdAt: string
    updatedAt: string
    serviceId: string
    title: string
    description: string
  }

  export type MedicalService ={medicalService: IMedicalService};
  export type MedicalServices = {medicalServices: IMedicalService[]};