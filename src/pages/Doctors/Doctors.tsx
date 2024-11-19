import Testimonial from "../../components/Testimonial"
// import { doctors } from "../../assets/data/doctors"
import DoctorCard from "./DoctorCard"
import { Query } from "../../assets/model/IDoctor";
import { doctorAPI } from "../../services/DoctorService";
import React from "react";
import Loader from "../../components/Loader";


function Doctors() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [query, setQuery] = React.useState<Query>({ page: 0, size: 4, name: '' });
  const { data: doctorData,  isSuccess, isLoading } = doctorAPI.useFetchDoctorsQuery(query);

  // const goToPage = (direction: string) => {
  //   if (direction === 'back') {
  //     setQuery((prev) => ({ ...prev, page: prev.page - 1 }));
  //   } else {
  //     setQuery((prev) => ({ ...prev, page: prev.page + 1 }));
  //   }
  // };
  console.log(doctorData?.data?.doctors.content)
  const doctors =doctorData?.data?.doctors.content

  // const totalPages = documentData?.data?.documents?.page?.totalPages || 0;
  return (
    <>
    <section className="bg-[#fff9ea] h-[33vh]">
    <div className="container  text-center">
      <h2 className="heading  font-[400]">Find a Doctor</h2>
      <div className="max-w-[570px] mt-[20px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-center">
        <input
        onChange={(event) => setQuery((prev) => ({ ...prev, page: 0, name: event.target.value }))}
         type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" />
        <button className="btn mt-0 rounded-[0px] rounded-r-md">Search</button>
      </div>
    </div>
    </section>
    <section>
    {isLoading && (<Loader/>)}

      <div className="container">
      {isSuccess &&(
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
         {doctors?.map((doctor)=>(
             <DoctorCard key={doctor.id} doctor={doctor} />
         ))}
     </div>
      )}
     
      </div>
    </section>
    <section>
            <div className="container">
          <div className="xl:w-[470px mx-auto]">
            <h2 className="heading text-center font-[400]">What our patient say</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our System offers unmatched, expert health care.
            </p>
          </div>
          <Testimonial/>
        </div>
                    </section>
    </>
  )
}

export default Doctors