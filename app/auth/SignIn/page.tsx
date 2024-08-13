'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInSchema, User } from "@/app/zodSchema/Signin";
import { useCookies } from "next-client-cookies";
// Style parts
import {parent,lebelCon, label, input, button, forgot} from './style';


export default function SignIn(){
    const cookies = useCookies();

    const router = useRouter()
    const { handleSubmit, register, formState: { errors, isSubmitting, isDirty, isValid },reset} = useForm<User>({
      resolver: zodResolver(signInSchema),
    });

    async function onSubmit(data:User) {
     
      console.log(data);
      // Replace this with a server action or fetch an API endpoint to authenticate
      const response = await fetch( "https://akil-backend.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());

      if (response.success) {
        console.log(response);
        // localStorage.setItem("access-token",response.data.accessToken);
        cookies.set("access-token", response.data.accessToken);
        router.push("../");
      }else{
        console.log(response);
        alert(response.message);
        reset();
      }
    
    }

  return (
    <div className={parent}>
        <div className='w-[500px] h-[500px] overflow-auto'>
        <h1 className='font-extrabold text-gray-700 font-lato text-center text-4xl p-3' >Welcome, <span className='text-[#201d8b]'>Back</span></h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={lebelCon}>
            <label className={label}>Email </label>
            <input {... register("email",{
              required:true
              }
              )}className={input} placeholder='Enter Email address' type='email'></input>
          </div>
          <div className={lebelCon}>
            <label className={label}>Password</label>
            <input {...register("password",{
              required:true
            }
            )} className={input} placeholder='Enter Password' type='password'></input>
          </div>
          <button className={button}>Log In</button>
        </form>
        <div className={forgot}>
          <p>Don't have an account? <Link href='/auth/SignUp' className='text-[#29268f] pl-2'>Sign Up</Link></p>
        </div>
        </div>
    
    </div>
  )
}
