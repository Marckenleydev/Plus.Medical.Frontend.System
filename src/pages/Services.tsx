import ServiceCard from "../components/ServiceCard"
import { medicalServiceAPI } from "../services/MedicalService";
import React from "react";
import { Query } from "../assets/model/IDoctor";
import Loader from "../components/Loader";


function Services() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [query, setQuery] = React.useState<Query>({ page: 0, size: 6 });
  const { data,  isSuccess, isLoading } = medicalServiceAPI.useFetchMedicalServicesQuery(query);

  // const goToPage = (direction: string) => {
  //   if (direction === 'back') {
  //     setQuery((prev) => ({ ...prev, page: prev.page - 1 }));
  //   } else {
  //     setQuery((prev) => ({ ...prev, page: prev.page + 1 }));
  //   }
  // };


  console.log(data?.data?.medicalServices.content)
   const servicesdata=data?.data?.medicalServices.content
  return (
    <section>
      <div className="container">
      {isLoading &&(<Loader/>)}
      {isSuccess &&(
      <div className="grid grid-cols-1 md:grid-cols-2 lg;grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        {servicesdata?.map((item,index)=>( <ServiceCard item={item} index={index} key={index} />))}
    </div>)}
      </div>
    </section>
  )
}

export default Services