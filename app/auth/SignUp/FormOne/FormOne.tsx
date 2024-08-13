"use client";
import {useRouter} from 'next/navigation';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema, User } from "@/app/zodSchema/Signup";
import { lebelCon, label, input,button } from './style'
import { useCookies } from "next-client-cookies";

export default function FormOne(){
    const cookies = useCookies();
    const router = useRouter();
    const { handleSubmit, register, formState: { errors, isSubmitting, isDirty, isValid },reset} = useForm<User>({
    resolver: zodResolver(signUpSchema),
    });
    
    async function onSubmit(data:User){
        console.log(isSubmitting);
        console.log(data);

        // Replace this with a server action or fetch an API endpoint to authenticate
        const response = await fetch( "https://akil-backend.onrender.com/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => res.json());

        if (response.success) {
            console.log(response);
            cookies.set("userEmail", data.email);
            router.push("/auth/verify-email");
          }else{
            console.log(response);
            alert(response.message);
            reset();
          }
    }

    return (

      <form className='flex flex-col justify-evenly' onSubmit={handleSubmit(onSubmit)}>
        
        <div className={lebelCon}>
            <label className={label} >Full Name</label>
            <input {...register("name",{
                required:true
                })} 
                id="name" className={input} placeholder='Enter your full Name'></input>
        </div>
        
        <div className={lebelCon}>
            <label className={label}>Email Address</label>
            <input {... register("email",{
                required: true,
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                },
                })} 
          className={input} placeholder='Enter your email' type='email' />
          {errors.email && <p className="text-red-500 font-weight-[200] pt-[5px]">Email is required</p>}
        </div>
        
        <div className={lebelCon}>
            <label className={label}>Password</label>
            <input {... register("password", {
                required:true,
            })}className={input} placeholder='Enter a new password' type='password'></input>
        </div>

        <div className={lebelCon}>
            <label className={label}>Confirm Password</label>
            <input {...register("confirmPassword", { 
                required: true 
            })} 
            className={input} placeholder='Confirm password' type='password'></input>
        </div>
        <button className={button} type="submit">Continue</button>
      
      </form>
  )
}
