import jobs from '../../../public/jobs.json'
import JobSite from '@/app/Components/JobDescription/JobSite'
export default function Page({params:{id}}:{params:{id:number}}) {
    const job = jobs.job_postings.filter((job)=>(Number(job.id)===Number(id)))[0]
    return (
        job ? <JobSite {...job} />:<div>Not Found</div>     
    )
}