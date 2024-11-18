export interface IResponse<T>{
    documents: any;
    title:string;
    code:number;
    path:string;
    status:string;
    message:string;
    data:T;

 

}