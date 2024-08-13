'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import Card from '../Job/Components/Card/Card';
import Nav from '../Job/Components/NavBar/Nav';
import Loading from '../components/Loading/Loading';
export default function(){
    const router = useRouter();
    const cookies = useCookies();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    if(cookies.get("access-token") == undefined){
        router.push("/auth/SignIn");
    }
    useEffect(() => {
        const fetachSession = async ()=>{
            const response = await fetch("https://akil-backend.onrender.com/opportunities/search",{
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${cookies.get("access-token")}`
                }
                });
                const res = await response.json();
                if(res.success == false){
                    router.push("/auth/SignIn");

                }else{
                    setData(res.data.filter((job:any) => job.isBookmarked));
                    setLoading(false);
                }

            }
            fetachSession();
    })
    
  return (
      <>
      <Nav />
        {loading!=true ? (
                <div className='relative'>
                    <div className='absolute h-full pl-[25rem] pr-[25em] mt-20'>
                        <h1 className='text-[3rem] font-[600] text-gray-800'>Bookmarks</h1>
                        {data? (data.map((job:any) => (<Card {...job} key={job.id}/>))):<>No Bookmarks</> }
                    </div>
                </div> 
            ):(<Loading/>)}
    </>
  )
}

