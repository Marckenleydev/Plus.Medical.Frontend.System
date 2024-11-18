export interface IMessage{
    email:string;
    subject:string;
    message:string;
}


export type Message ={message: IMessage};
export type Messages = {messages: IMessage[]};