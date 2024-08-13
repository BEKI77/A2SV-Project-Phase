"use client"
import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Card from '../Card/Card'
import Header from './DashBoardHeader/Header'
import Loading from '@/app/components/Loading/Loading';
import Nav from '../NavBar/Nav';
import {List} from './styles'
import { useCookies } from 'next-client-cookies';
export default function Dashboard(){
  const cookies = useCookies();
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([] as any);

  useEffect(() => {
    fetch("https://akil-backend.onrender.com/opportunities/search",{
      method: "GET",
      headers:{
        "Authorization":`Bearer ${cookies.get("access-token")}`
      }
    }).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then(data => {
        setJobs(data.data);
        setLoading(false)
      })
      .catch(error => {
        console.error(error);
      });
    });
  
    return (
      <>
        <Nav/>
        {loading!=true?
        ( <>
            <div className='mt-20'>  
              <Header length = {jobs.length}/>
              <div className={List}>
                {jobs.filter((job : any) => job.logoUrl !== "").map((job : any) => (   
                    <Card {...job} key={job.id}/>
                ))}
              </div> 
            </div>
          </>
        )
        : (<><Loading/></>)
      }
      </>
      
     
    )
  }

