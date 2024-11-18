export interface IDoctor {
    id: number;
    name: string;
    specialty: string;
    avgRating: number;
    totalRating: number;
    photo: string;  // Update the type based on your actual photo type, e.g., `string` or `StaticImageData`
    totalPatients: number;
    hospital: string;
  }

  export type Doctor ={doctor: IDoctor};