
import { AiFillStar } from "react-icons/ai"

import { formateDate } from "../../utils/formateDate"
import { useState } from "react"
import FeedbackForm from "../../components/FeedbackForm";
const Feedback = ({ doctorData }) => {
    const [showfeedbackForm, setShowfeedbackForm] = useState(false);
    console.log(doctorData?.data?.doctor.feedbacks)
   const  feedbackspatient = doctorData?.data?.doctor.feedbacks
  return (
    <div>
        <div className="mb-[50px]">
            <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
                All reviews (277)
            </h4>

            <div className="flex flex-col justify-between gap-10 mb-[30px]">
            {feedbackspatient.map((feedback, index)=>(
                <div className="flex gap-3">
                    <figure className="w-10 h-10 rounded-full">
                        <img className="w-full" src={feedback.patient_ImageUrl} alt="" />
                    </figure>
                     
                  
                          <div key={index}>
                          <h5 className="text-[16px] leading-6 text-primaryColor font-bold">{feedback.patientName}</h5>
                          <p className="text-[14px] leading-6 text-textColor">
                              {formateDate("02-14-2023")}
                          </p>
                          <p className="text_para mt-3 font-medium text-[15px]">{feedback.message}</p>
                      </div>

                      <div className="flex gap-1 ">
                    {[...Array(5).keys()].map((_,index)=>(
                        <AiFillStar key={index} color="#ffd32c" />
                    ))}
                </div>

                
                     
                </div>
                     ))}
                
                
              
            </div>
        </div>

        {!showfeedbackForm && <div className="text-center">
            <button onClick={()=>setShowfeedbackForm(true)} className="btn">Give Feedback</button>
        </div> }
        {showfeedbackForm && <FeedbackForm doctorData ={doctorData }/> }
    </div>
  )
}

export default Feedback