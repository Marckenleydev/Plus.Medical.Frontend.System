// import { doctors } from "../../assets/data/doctors"
import React from "react";
import { Query } from "../../assets/model/IDoctor";
import { doctorAPI } from "../../services/DoctorService";
import DoctorCard from "./DoctorCard"


const DoctorList = () => {
  const [query, setQuery] = React.useState<Query>({ page: 0, size: 4, name: '' });
  const { data: doctorData, error, isSuccess, isLoading, refetch } = doctorAPI.useFetchDoctorsQuery(query);
  const doctors =doctorData?.data?.doctors.content
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        {doctors?.map((doctor)=>(
            <DoctorCard key={doctor.doctorId} doctor={doctor} />
        ))}
    </div>
  )
}

export default DoctorList