import React from "react";
// import { services } from "../assets/data/service"
import { Query } from "../assets/model/IDoctor";
import ServiceCard from "./ServiceCard"
import { medicalServiceAPI } from "../services/MedicalService";
import Loader from "./Loader";


const ServiceList = () => {
  const [query, setQuery] = React.useState<Query>({ page: 0, size: 6 });
  const { data, error, isSuccess, isLoading, refetch } = medicalServiceAPI.useFetchMedicalServicesQuery(query);

  // const goToPage = (direction: string) => {
  //   if (direction === 'back') {
  //     setQuery((prev) => ({ ...prev, page: prev.page - 1 }));
  //   } else {
  //     setQuery((prev) => ({ ...prev, page: prev.page + 1 }));
  //   }
  // };
  console.log(data)
  // const doctors =doctorData?.data?.doctors.content

  console.log(data?.data?.medicalServices.content)
   const services=data?.data?.medicalServices.content
  
  return (
    <div>
      {isLoading &&(<Loader/>)}
        {isSuccess &&(
           <div className="grid grid-cols-1 md:grid-cols-2 lg;grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
           {services?.map((item,index)=>( <ServiceCard item={item} index={index} key={index} />))}
       </div>
        )}
    </div>
   
  )
}

export default ServiceList