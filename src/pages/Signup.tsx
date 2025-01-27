import { Link } from "react-router-dom";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import signUpImg from "../assets/images/signup.gif"
import {  IRegisterRequest } from "../assets/model/ICredentials";
import { patientAPI } from "../services/PatientService";
import React from "react";


const registerSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z
    .string()
    .min(3, "Email is required")
    .email("Please enter a valid email"),
  password: z
    .string()
    .min(5, "Password length should not be less than 5 characters"),
});





function Signup() {

  const { register, handleSubmit, reset, formState } =
  useForm<IRegisterRequest>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [registerUser, { data, error, isLoading, isSuccess }] =
patientAPI.useRegisterPatientMutation();

const handleRegister = async (registerRequest: IRegisterRequest) => {
  await registerUser(registerRequest);
  console.log(registerRequest)
  reset(); 
};

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ======= Image box ======== */}

          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img className="w-full rounded-l-lg" src={signUpImg} alt=""/>
            </figure>
          </div>

             {/* ======= Sign Up form ======== */}

             <div className="rounded-l-lg lg:pl-16 py-10">
              <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
                Create an <span className="text-primaryColor">account</span>
              </h3>
              <form onSubmit={handleSubmit(handleRegister)} action="">
              <div className="mb-5">
            <input required  type="text" placeholder=" FirstName"  {...register("firstName")}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
             focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer " />
          </div>
     

          <div className="mb-5">
          <input required type="text" placeholder=" LastName"  {...register("lastName")}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
             focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer " />
          </div>
     


          <div className="mb-5">
            <input required type="email" placeholder=" Email"   {...register("email")}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
             focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer " />
          </div>
     

          <div className="mb-5">
            <input required type="password" placeholder=" Password" {...register("password")}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
             focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer " />
          </div>
      
     

          <div className="mb-5 flex items-center justify-between">
            <label>Gender:
            <select className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            </label>
          </div>

          <div className="mt-7">
            <button     disabled={formState.isSubmitting || isLoading} type="submit" className="w-full flex gap-2 items-center justify-center bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
            {(formState.isSubmitting || isLoading) && (
                  <span>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </span>
                )}
                {formState.isSubmitting || isLoading
                  ? "Loading..."
                  : "Sign Up"}
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
           Already have an account ? <Link to="/login" className="text-primaryColor font-medium mt-1">login</Link>
          </p>
              </form>
             </div>
        </div>
      </div>
    </section>
  )
}

export default Signup