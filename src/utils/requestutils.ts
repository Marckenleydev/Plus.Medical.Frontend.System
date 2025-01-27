
import { IResponse } from '../models/IResponse';
import { Key } from '../assets/enum/cache.key';
import { toastError, toastSuccess } from '../services/ToastService';
import Cookies from 'js-cookie';
export const baseUrl="https://plus-medical-backend-springboot.onrender.com/"

export const isJsonContentType = (headers: Headers)=>
   [
      'application/vnd.api+json',
       'application/json',
        'application/vnd.hal+json',
         'application/pdf',
          'application/form-data'].includes(headers.get('content-type')?.trimEnd() || '');


export const processResponse = <T>(response: IResponse<T>, meta:unknown, arg: unknown): IResponse<T> =>{
  const {request} = meta;
  if(request.url.includes('logout')){localStorage.removeItem(Key.LOGGEDIN);}

  if(!request.url.includes('profile')){
      // show toast notification
  }
  console.log({response})
  return response;

}


export const processError = (error: {status:number; data:IResponse<void>}, meta: unknown, arg:unknown):{status:number; data:IResponse<void>}=>{

 // if(error.data.code === 401 && error.data.status ==="UNAUTHORIZED" && error.data.message === "You are not logged in"){
 //     localStorage.setItem(Key.LOGGEDIN,"false");
 // }

  console.log({error});
  return error;
}
 // utils/token.ts
// utils/token.ts


// utils/token.ts

export const isTokenExpired = (): boolean => {
   const token = Cookies.get('access-token');
   console.log('Token retrieved:', token); // Debug log
 
   if (!token) return true; // No token found, considered expired
 
   try {
     const payload = JSON.parse(atob(token.split('.')[1]));
     console.log('Decoded payload:', payload); // Debug log
     return payload.exp * 1000 < Date.now();
   } catch (error) {
     console.error('Error decoding token:', error); // Catch decoding issues
     return true;
   }
 };
 

export const removeToken = () => {
   localStorage.setItem(Key.LOGGEDIN, "false");
  Cookies.remove('access-token');
  
};


 