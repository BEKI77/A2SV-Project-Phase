import React from 'react'
import Link from 'next/link';
import jobs from '../../../public/jobs.json'
import Card from '../Card/Card'
import Header from './DashBoardHeader/Header'
import {List} from './styles'
const Dashboard = () => {
  return (
    <>
    <Header length = {jobs.job_postings.length}/>
    <div className={List}>
      {jobs.job_postings.map((job) => (
        <Link key = {job.id} href={`./JobPage/${job.id}`} >
          <Card {...job}/>
        </Link>
      ))}
    </div> 
    </>
  )
}

export default Dashboard
