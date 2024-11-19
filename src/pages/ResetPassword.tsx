
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { z } from 'zod';
import { EmailAddress } from '../model/ICredentials';
import { zodResolver } from '@hookform/resolvers/zod';
import { Key } from '../assets/enum/cache.key';
import { patientAPI } from '../services/PatientService';
import { IResponse } from '../models/IResponse';


const ResetPassword = () => {
    const location = useLocation();
    const isLoggedIn: boolean = (JSON.parse(localStorage.getItem(Key.LOGGEDIN)!) as boolean) || false;
    const ResetPasswordSchema = z.object({email: z.string().min(2, "Email is required").email("Please enter a valid email") });
    const { register, handleSubmit,reset, formState} = useForm<EmailAddress>({resolver: zodResolver(ResetPasswordSchema), mode: "onTouched"});
    const [resetPassword,{data, error,isLoading, isSuccess}] = patientAPI.useResetPasswordMutation();
    
    const handleResetPassword = async(email: EmailAddress) =>{
        await resetPassword(email);
        reset();
    } 


      if (isLoggedIn) {
         return location?.state?.from?.pathname ? ( <Navigate to={location?.state?.from?.pathname} replace />) : (  <Navigate to={"/"} replace />);
        }

        return (
   
            <div className="flex flex-col items-center">
            <div className="flex flex-col w-full gap-2">
              <section className="h-[70vh] ">
                <div className="flex justify-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
                  <div className="w-[50%] rounded-lg bg-white p-8 shadow-md border border-blue-200 lg:col-span-3 lg:p-12">
                    {/* <div className="col-span-6">
                <h1 className="text-2xl ml-8">Login</h1>
              </div> */}
                    <div className=" ">
                      {error && (
                        <div className="flex  justify-center items-center text-red-500 text-sm text-center ">
                          {'data' in error
                            ? (error.data as IResponse<void>).message
                            : 'An error occurred'}
                        </div>
                      )}
                    </div>
                    <div className="h-[30px] ">
                      {isSuccess && (
                        <span className="flex justify-center items-center text-green-500 text-sm text-center ">{data?.message}</span>
                      )}
                    </div>
        
                    <form
                      onSubmit={handleSubmit(handleResetPassword)}
                      action="#"
                      className="mx-auto mb-0  max-w-md space-y-4"
                    >
                      <div
                      
                        // className={`relative w-full rounded-lg border-[1px] ${
                        //   formState.errors.email ? 'border-red-500' : ''
                        // } ${isFieldValid('email') ? 'border-green-500' : ''} border-gray-200  text-sm`}
                      >
                        <input
                        required
                          type="email"
                          className="w-full px-1 py-3 border-b border-solid border-[#0066ff9d] focus:outline-none
             focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer "
                          placeholder=" Email"
                          {...register('email')}
                        />

                      </div>
                      {/* <span className="text-sm text-red-600">
                        {formState.errors.email?.message}
                      </span> */}
        
                    
        
                      <button
                        disabled={formState.isSubmitting || isLoading}
                        type="submit"
                        className="w-full flex rounded-md gap-2 items-center justify-center bg-primaryColor px-5 py-3 text-sm font-medium text-white"
                      >
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
                        {formState.isSubmitting || isLoading ? 'Loading...' : 'Reset password'}
                      </button>

                      <div className='flex items-center justify-between'>

                      <div className="px-4 py-2 rounded-lg text-sm font-medium ">
         
            <Link
              to={"/register"}
              className="text-blue-600  dark:text-blue-600"
            >
              Create account
            </Link>
          </div>
          <div className="text-sm font-medium text-gray-500 ">
                        Already a user?{' '}
                        <Link
                          to="/login"
                          className="text-blue-700 hover:underline dark:text-blue-600"
                        >
                          Go to login
                        </Link>
                      </div>
                      </div>
                     
                    </form>
                 
                    </div>
        </div>
      </section>
    </div>
  </div>
    
          );
}

export default ResetPassword