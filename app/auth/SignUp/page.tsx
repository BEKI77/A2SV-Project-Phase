"use client";
import React from 'react';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import FormOne from '../../auth/SignUp/FormOne/FormOne';
import { signIn } from "next-auth/react";
// Style part
import {MainCon, lineDown, lineUp} from '../../auth/SignUp/style';
const signInWithGoogle = async () => {
  await signIn("google", {
    redirect: false,
    callbackUrl: "/Job",
  });
};

export default function page (){
  return (
 
    <div className='h-[100%] mt-20'>
      <div className={MainCon}>
        <h1 className='font-extrabold text-gray-700 font-lato text-center text-4xl p-3 '>Sign Up Today !</h1>
        <button onClick={signInWithGoogle} className='w-full only-hover:hover:bg-[#b6b4e928]'>
        <div className='flex flex-between mx-auto border border-1 border-gray-300 p-5 rounded-md w-full justify-center hover:bg-[#b6b4e928]'>
          <FcGoogle className='size-6 mr-4'/>
          <h1 className='text-[#2b279b] font-bold'>Sign Up with Google</h1>
        </div>
        </button>
        <div className='flex justify-center'>
          <div className='w-2/6'>
            <div className={lineDown}></div>
            <div className={lineUp}></div>
          </div>
          <div className='w-1/2'>
            <h1 className='text-center font-light text-lg font-lato py-3 my-auto mx-0 px-0'>Or Sign Up with Email</h1>
          </div>
          <div className='w-2/6'>
            <div className={lineDown}></div>
            <div className={lineUp}></div>
          </div>
        </div>
       

        <FormOne />
        <div className='mt-6'>
            <p className='text-gray-500 text-sm font-weight-[300] pb-4'>Already have an account? <Link href='/auth/SignIn' className='text-[#29268f] pl-2'>Login</Link></p>
            <p className='text-gray-500 text-sm font-weight-[300]'>By clicking 'Continue', you acknowledge that you have read and accepted our Terms of Service and Privacy Policy.</p>
        </div>
        <div className=''>
  
        </div>
      </div>
    </div>
  )
}

