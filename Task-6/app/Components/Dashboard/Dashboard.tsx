"use client"
import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Card from '../Card/Card'
import Header from './DashBoardHeader/Header'
import {List} from './styles'
const Dashboard = () => {

  const [jobs, setJobs] = useState([] as any|null);

  useEffect(() => {
    fetch("https://akil-backend.onrender.com/opportunities/search")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then(data => {
        console.log(data.data);
        setJobs(data.data);
      })
      .catch(error => {
        console.error(error);
      });
    }, []);
  
    return (
      <>
      { jobs ?
        (<div>
          <Header length = {jobs.length}/>
          <div className={List}>
            {jobs.filter((job : any) => job.logoUrl !== "").map((job : any) => (
              <Link key = {job.id} href={`./JobPage/${job.id}`} >
                <Card {...job}/>
              </Link>
            ))}
          </div> 
        </div>)
        :(
          <div>
            Loading...
          </div>
        )
      }
      </>
     
    )
  }


export default Dashboard
