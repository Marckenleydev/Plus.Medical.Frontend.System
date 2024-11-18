import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {  IMessage } from '../assets/model/IMessage.ts'
import { messageAPI } from '../services/ContactService'
import React from 'react'


const messageSchema = z.object({
  email:  z.string().min(1, 'Email required'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(3, 'Message is required'),

})
function Contact() {
  const {register, handleSubmit,reset} = useForm<IMessage>({resolver: zodResolver(messageSchema), mode: "onTouched"});
  const [messageUser, { isSuccess}] = messageAPI.useSendMessageMutation();

  const handleMessage = async (messageRequest: IMessage) =>
    await messageUser(messageRequest);


  React.useEffect(() =>{
    window.scrollTo(0, 0);
    reset()
  } , [isSuccess]);
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
      <h2 className="heading text-center font-[400]">Contact Us</h2>
      <p className="mb-8 lg:mb-12  text-center text_para font-[400]">
        Got a technical issue? Want to send feedback about a beta feature? let us know.
      </p>
      <form onSubmit={handleSubmit(handleMessage)} action="">
        <div>
          <label htmlFor="email" className="form__label">Your Email</label>
          <input required type="email" placeholder="example@gmail.com" id="email" className="form__input mt-1"
            {...register("email")}
          />
        </div>

        <div>
          <label htmlFor="subject" className="form__label">Subject</label>
          <input required type="text" placeholder="Let us know how we can help you" id="subject" className="form__input mt-1"
          {...register("subject")} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="form__label">Your Message</label>
          <textarea required rows={5}  placeholder="Leave a comment..." id="message" className="form__input mt-1"
          {...register("message")}
           />
        </div>
        <button type='submit' className="btn rounded sm:w-fit">Submit</button>
      </form>
      </div>
    </section>
  )
}

export default Contact