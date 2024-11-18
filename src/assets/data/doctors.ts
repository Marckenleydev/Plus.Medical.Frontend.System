import { IDoctor } from "../../models/IDoctor";
import doctorImg01 from "../images/doctor-img01.png";
import doctorImg02 from "../images/doctor-img02.png";
import doctorImg03 from "../images/doctor-img03.png";
export const doctors: IDoctor[] = [
    {
      id: 1,
      name: "Dr. Alfaz Ahmed",
      specialty: "Surgeon",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg01,
      totalPatients: 1500,
      hospital: "Mount Adora Hospital, Sylhet.",
    },
    {
      id: 2,
      name: "Dr. Saleh Mahmud",
      specialty: "Neurologist",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg02,
      totalPatients: 1500,
      hospital: "Mount Adora Hospital, Sylhet.",
    },
    {
      id: 3,
      name: "Dr. Farid Uddin",
      specialty: "Dermatologist",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg03,
      totalPatients: 1500,
      hospital: "Mount Adora Hospital, Sylhet."
    }
  ];