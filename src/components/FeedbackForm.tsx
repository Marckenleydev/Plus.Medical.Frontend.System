import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IFeedback } from "../assets/model/IFeedback";
import { feedbackAPI } from "../services/FeedbackService";
import React from "react";
import { patientAPI } from "../services/PatientService";
import { toastError } from "../services/ToastService";

const feedbackSchema = z.object({
  message: z.string().min(3, 'Message is required'),
});

const FeedbackForm = ({ doctorData }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const { doctorId } = doctorData?.data?.doctor ?? {};

  console.log(doctorId);
  const { data: user, error, isLoading, refetch } = patientAPI.useFetchPatientQuery();
  const { register, handleSubmit, reset } = useForm<IFeedback>({ resolver: zodResolver(feedbackSchema), mode: "onTouched" });
  const [sendMessage, { isSuccess }] = feedbackAPI.useSendMessageMutation();

  const handleFeedback = async (messageRequest: IFeedback) => {
    if (!user?.data.patient) {
      toastError("Please login");
      return;
    }
    await sendMessage({ ...messageRequest, doctorId });
  };
  React.useEffect(() => reset(), [isSuccess]);

  // const [reviewText, setReviewText] = useState('');

  return (
    <form onSubmit={handleSubmit(handleFeedback)} action="">
      <div>
        {/* <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          How would you rate overall experience?
        </h3> */}
        {/* <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`${index <= ((rating && hover) || hover)
                  ? "text-yellowColor"
                  : "text-gray-400"} bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
                onClick={() => setRating(index)}
              ><span>{<AiFillStar />}</span></button>
            );
          })}
        </div> */}
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-t0">
          Share your feedback or your suggestions
        </h3>
        <textarea required
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          rows={5}
          placeholder="Write your message"
          {...register("message")}
        />
      </div>

      <button type="submit" className="btn">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
