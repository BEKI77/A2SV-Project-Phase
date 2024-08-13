"use client"
import { useState, useEffect } from 'react';
import JobSite from '../../Job/Components/JobDescription/JobSite'
import Loading from '@/app/components/Loading/Loading';
import Nav from '@/app/Job/Components/NavBar/Nav';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
export default function Page({params:{id}}:{params:{id:number}}) {
  const [job, setJob] = useState<{}>();
  const cookies = useCookies();
  const router = useRouter();

  if(cookies.get("access-token") == undefined){
    router.push("/auth/SignIn",);
  }
  
  useEffect(() => {
    fetch("https://akil-backend.onrender.com/opportunities/"+id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then(data => {
        console.log("here");
        console.log(data.data);
        setJob(data.data);
      })
      .catch(error => {
        console.error(error);
      });
    }, []);


    return (
        job && cookies.get('access-token')? ( <>
                  <Nav/>
                  <div className='mt-10'>
                    <JobSite {...job} />

                  </div>
                </>
        ):<Loading/>     
    )
}