export interface IFeedback {
    id: number
    referenceId: string
    doctorId: string
    message: string
    patientName: string
    patientEmail: string
    patientPhone: string
    patient_ImageUrl: string
    doctorName: string
    doctorEmail: string
    doctorPhone: string
    doctor_ImageUrl: string
    createdAt: string
    updatedAt: string
  }
  export type FeedbackMessage = Pick<IFeedback, "message">;
  export type Feedback ={feedback: IFeedback};
export type Feedbacks = {feedbacks: IFeedback[]};