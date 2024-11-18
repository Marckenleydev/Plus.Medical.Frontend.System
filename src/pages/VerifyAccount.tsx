import React from "react";
import { Link, useLocation } from "react-router-dom";
import { patientAPI } from "../services/PatientService";
import { IResponse } from "../models/IResponse";


function VerifyAccount() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const key = searchParams.get("key");
  const [
    verifyAccount,
    {
      error: accountError,
      isSuccess: accountSuccess,
    },
  ] = patientAPI.useVerifyAccountMutation();
  React.useEffect(() => {
    if (key && location.pathname.includes("/verify/account")) {
      verifyAccount(key);
    }
  }, []);

  if (!key) {
    return (
    <div className="flex flex-col items-center">
    <div className="flex flex-col w-full gap-2">
      <section className="h-[100vh] ">
        <div className="flex justify-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-28">
          <div className="w-[50%] rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <div className="h-[30px] mb-1 text-center  rounded py-5 bg-red-100 flex items-center justify-center">
            <p className="text-sm text-red-500   text-center">
              Invalid link. Please check link and try again
            </p>
          </div>

          <div className="flex justify-between text-sm mt-4 font-medium text-gray-500 dark:text-gray-300">
            <Link to={"/login"}>
              <span className=" dark:text-blue-700 w-full flex  gap-2 items-center justify-center  px-5 py-2 text-sm font-medium text-white">
                Go to login
              </span>
            </Link>

            <Link to={"/resetpassword"}>
              <span className=" hover:underline dark:text-blue-700 w-full flex  gap-2 items-center justify-center  px-5 py-3 text-sm font-medium text-white">
                Forgot password
              </span>
            </Link>
          </div>
          </div>
        </div>
      </section>
    </div>
  </div>
    );
  }

  if (key && !accountSuccess) {
    return (
      <div className="flex flex-col items-center">
      <div className="flex flex-col w-full gap-2">
        <section className="h-[100vh] ">
          <div className="flex justify-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-28">
            <div className="w-[50%] rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <div className="">
            {accountError && (
              <div>
                <span className="border border-red-100 mt-4 rounded bg-red-100  w-full flex  gap-2 items-center justify-center  px-5 py-2 text-sm font-medium  text-red-500">
                  {"data" in accountError
                    ? (accountError.data as IResponse<void>).message
                    : "An error occurred"}
                </span>

                <div className="flex mt-8 justify-between text-sm  font-medium text-gray-500 dark:text-gray-300">
                  <Link to={"/login"}>
                    <span className=" dark:text-blue-700 w-full flex  gap-2 items-center justify-center  px-5 py-2 text-sm font-medium text-white">
                      Go to login
                    </span>
                  </Link>

                  <Link to={"/resetpassword"}>
                    <span className=" hover:underline dark:text-blue-700 w-full flex  gap-2 items-center justify-center  px-5 py-2 text-sm font-medium text-white">
                      Forgot password
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="  ">
            {!accountError && (
              <>
                <span className="border rounded bg-blue-100 dark:text-blue-700 w-full flex  gap-2 items-center justify-center  px-5 py-3 text-sm font-medium text-white">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 animate-spin text-blue-500 fill-white"
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
                  Pleaser wait. Verifying...
                </span>
                <span></span>
              </>
            )}
          </div>
          </div>
        </div>
      </section>
    </div>
  </div>
    );
  }

  if (accountSuccess && location.pathname.includes("/verify/account")) {
    return (
      <div className="flex flex-col items-center">
      <div className="flex flex-col w-full gap-2">
        <section className="h-[100vh] ">
          <div className="flex justify-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-28">
            <div className="w-[50%] rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <div className="h-[30px]  text-center  rounded py-5 bg-green-100 flex items-center justify-center">
            <p className="text-sm text-green-500   text-center">
              Account verify. you can log in now.
            </p>
          </div>

          <div className="flex justify-between text-sm mt-4 font-medium text-gray-500 dark:text-gray-300">
            <Link to={"/login"}>
              <span className="  dark:text-blue-700 w-full flex  gap-2 items-center justify-center  px-5 py-2 text-sm font-medium text-white">
                Go to login
              </span>
            </Link>

            <Link to={"/resetpassword"}>
              <span className=" hover:underline dark:text-blue-700 w-full flex  gap-2 items-center justify-center  px-5 py-2 text-sm font-medium ">
                Forgot password
              </span>
            </Link>
          </div>
          </div>
        </div>
      </section>
    </div>
  </div>
    );
  }
}

export default VerifyAccount;
