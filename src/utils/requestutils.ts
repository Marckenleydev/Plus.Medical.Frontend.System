
import { IResponse } from '../models/IResponse';
import { Key } from '../assets/enum/cache.key';
import { toastError, toastSuccess } from '../services/ToastService';
import Cookies from 'js-cookie';
export const baseUrl="https://plusmedicalbackendsystem-production.up.railway.app/"

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
       toastSuccess(response.message)
    }
   //  console.log({response})
    return response;

 }


 export const processError = (error: {status:number; data:IResponse<void>}, meta: unknown, arg:unknown):{status:number; data:IResponse<void>}=>{

    if(error.data.code === 401 && error.data.status ==="UNAUTHORIZED" && error.data.message === "You are not logged in"){
        localStorage.setItem(Key.LOGGEDIN,"false");
    }
   //  console.log(error.data.message)
 toastError(error.data.message)
    
    return error;
 }

 // utils/token.ts
// utils/token.ts


// utils/token.ts

export const isTokenExpired = (): boolean => {
  const token = Cookies.get('access-token');
  if (!token) return true;

  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.exp * 1000 < Date.now();
};

export const removeToken = () => {
  Cookies.remove('access-token');
};


 