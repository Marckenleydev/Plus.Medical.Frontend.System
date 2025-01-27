import { Link, Navigate, useLocation } from "react-router-dom"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Key } from "../assets/enum/cache.key";
import { IPatientRequest } from "../assets/model/ICredentials";
import { patientAPI } from "../services/PatientService";
import React from "react";


const loginSchema = z.object({
  email: z
    .string()
    .min(2, "Email is required")
    .email("Please enter a valid email"),
  password: z
    .string()
    .min(5, "Password length should not be less than 5 characters"),
    userType:  z
    .string()
    
});

function Login() {
  const location = useLocation();
  const isLoggedIn: boolean = (JSON.parse(localStorage.getItem(Key.LOGGEDIN)!) as boolean) || false;
  const [loginUser, {data, isLoading, isSuccess }] = patientAPI.useLoginPatientMutation();
  const { register, handleSubmit, reset, formState: form,  } = useForm<IPatientRequest>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: { userType: "PATIENT" }, // Set default value here
  });

  const handleLogin = (credentials: IPatientRequest) =>{
    loginUser(credentials);

    reset();
  } 

  React.useEffect(() => {
    window.scrollTo(0, 0);
 
  },);

    if (isLoggedIn) { return location?.state?.from?.pathname ? ( <Navigate to={location?.state?.from?.pathname} replace />) : (  <Navigate to={"/"} replace />);}
    if (isSuccess && data.status=="OK" ) {
      localStorage.setItem(Key.LOGGEDIN, "true");
       window.location.reload();
      return location?.state?.from?.pathname ?
       (  <Navigate to={location?.state?.from?.pathname} replace />) : (  <Navigate to={"/"} replace />);
      }
  
  return (
    <section>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor ">welcome</span> Back
        </h3>
        <form  onSubmit={handleSubmit(handleLogin)} action="" className="py-4 md:px-0">
          <div className="mb-5">
            <input type="email" placeholder="Enter Your Email"
            className="w-full px-1 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
             focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor 
              cursor-pointer " {...register("email")}/>
          </div>
          
       
               
                <span className="text-red-600">
                  {form.errors.email?.message}
                </span>

          <div className="mb-5">
            <input type="password" placeholder="Enter Your Password"
            className="w-full px-1 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
             focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer "   {...register("password")}/>
          </div>

          <input type="hidden" {...register("userType")} value="PATIENT" />

          

          <span className="text-red-600">
                  {form.errors.password?.message}
                </span>
          <div className="mt-7">
            <button type="submit" disabled={form.isSubmitting || isLoading}className="w-full flex gap-2 items-center justify-center bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">    
                      {(form.isSubmitting || isLoading) && (
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
                )}Login</button>
          </div>
          <div className="flex justify-between mt-5">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label className="ms-2 text-sm  text-textColor ">
                    Remember me
                  </label>
                </div>
                <Link
                  to={"/resetpassword"}
                  className="text-sm font-semibold text-primaryColor  hover:underline dark:text-primaryColor "
                >
                  Lost Password?
                </Link>
              </div>
          <p className="mt-5 text-textColor text-center">
            Don't have any account ? <Link to="/register" className="text-primaryColor font-medium mt-1">register</Link>
          </p>
          
        </form>
      </div>
    </section>
  )
}

export default Login