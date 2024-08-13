'use client'
import Dashboard from './Components/Dashboard/Dashboard';
import { useCookies } from "next-client-cookies";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default async function Home() {
  const cookies = useCookies();
  const router = useRouter();
  // const { status } = useSession();
  if(cookies.get("access-token") == undefined ){
    router.push("/auth/SignIn");
  }

  return (
    <>
        <Dashboard />
    </>
  )
}
