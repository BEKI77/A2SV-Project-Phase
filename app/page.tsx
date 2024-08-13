'use client';
import { useCookies } from "next-client-cookies";
import Dashboard from "./Job/Components/Dashboard/Dashboard";
import { useRouter } from "next/navigation";

export default function(){
  const cookies = useCookies();
  const router = useRouter();

  if(cookies.get("access-token") == undefined){
    router.push("/auth/SignIn",);
  }
  return (
    <>
        <Dashboard />
    </>
  )
} 

