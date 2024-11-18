import { useState } from "react"
import starIcon from "../../assets/images/Star.png"
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "../../components/SidePanel";
import { useParams } from 'react-router-dom'
import { doctorAPI } from "../../services/DoctorService";
import React from "react";

function DoctorDetails() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [tab,setTab] = useState('about');
  const { doctorId} = useParams();

  const { data: doctorData, error, isSuccess, isLoading, refetch } = doctorAPI.useFetchDoctorQuery(doctorId || '');
  const truncateText = (text:string, maxLength:number) => {
    
    if (text?.length > maxLength ) {
      return `${text.substring(0, maxLength)}`;
    }
    return text;
  };
  const {
    firstName,
    lastName,
    totalRating,
    rating=0,
    imageUrl,
    aboutMe,
    education,
    specialisation,
    totalPatients,
    hospital
  } = doctorData?.data?.doctor ?? {};
  
  
  return (
    <section >
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            {isLoading ?    <div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-300">
    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-300">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
    {/* <div className="flex items-center mt-4">
       <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
        </div>
    </div> */}
    <span className="sr-only">Loading...</span>
</div>:<div className="flex items-center gap-5">
            <figure className="max-w-[200px] max-h-[200px]">
              <img src={imageUrl} alt="" className="w-full" />
            </figure>

            <div>
              <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">{doctorData?.data?.doctor.specialisation.name}</span>
              <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-semibold">{firstName} {lastName}</h3>
              <div className="flex items-center gap-[6px]">
                <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                  <img src={starIcon} alt=""/> {rating?.toFixed(1)}
                </span>
                <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">({totalRating})</span>
              </div>
              <p className="text_para text-[14px] leading-5 md:text-[15px]  lg:max-[390px]"> {truncateText(aboutMe, 140)}. </p>
            </div>
            </div>}
            

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button 
              onClick={()=>setTab('about')}
              className={`${tab === "about" && "border-b border-solid border-primaryColor"} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                About
              </button>

              <button
                onClick={()=>setTab('feedback')}
               className={`${tab === "feedback" && "border-b border-solid border-primaryColor"} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {
                tab === "about" && <DoctorAbout doctorData={doctorData}/>
              }
              {
                tab === "feedback" && <Feedback doctorData={doctorData}/>
              }
            </div>



          </div>
          <div>
        <SidePanel doctorData={doctorData}/>
      </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails