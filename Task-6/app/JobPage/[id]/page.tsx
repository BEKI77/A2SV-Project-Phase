"use client"
import { useState, useEffect } from 'react';
import JobSite from '@/app/Components/JobDescription/JobSite'

export default function Page({params:{id}}:{params:{id:number}}) {

  const [job, setJob] = useState<{}>();
  console.log(id);
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
        job ? <JobSite {...job} />:<div>Not Found</div>     
    )
}