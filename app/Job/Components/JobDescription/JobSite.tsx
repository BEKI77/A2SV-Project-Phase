import React from 'react'
import {container, container1, container2, ConCan, ConDes, ConRes, ConWhere, ResDiv} from './style'
import { BiCheckCircle } from "react-icons/bi";
import About from "../About/About";
import Catagory from "../Catagory/Catagory";
import RequiredSkill from '../RequiredSkill/RequiredSkill';
const JobSite = (props:any) => {
  return (
    <main className='px-[50px] py-[50px]'>
      <div className={container}>
      <div className={container1}>
        <div className={ConDes}>
          <h1 className='font-extrabold text-3xl my-3'>Description</h1>
          <p>{props.description}</p>
        </div>

        {/* Responsibilities container */}
        <div className={ConRes}>
          <h1 className='font-extrabold text-3xl my-3'>Responsibility</h1>
          {props.responsibilities.split('\n').filter((value:string) => value!=="").map((responsibility:String) => (
              <div key={props.responsibilities.split('\n').indexOf(responsibility)} className={ResDiv}>
                <BiCheckCircle className='text-emerald-600 mt-2 ml-1 w-1/12' />
                <p className='mt-1 w-11/12'>{responsibility}</p>
              </div>
            
          ))}
        </div>

        {/* ideal_candidate container */}

        <div className={ConCan}>
          <h1 className='font-extrabold text-3xl my-3'>Ideal Candidate we want</h1>
          { props.idealCandidate.split('\n').filter((value:string) => value!=="").map((value:string,ind:number)=>(
              <div key = {ind} className='flex flex-start mx-2 my-auto p-1'>
                <BiCheckCircle className='text-emerald-600 mt-2 ml-1 w-1/12' />
                <p>{value}</p>
              </div>
          ))}
        </div>

        {/* When and where container */}
        <div className={ConWhere}>
          <h1 className='font-extrabold text-3xl my-3'>When & Where</h1>
          <p>{props.whenAndWhere}</p>
        </div>
      </div>

      {/* right container */}
      <div className={container2}>
        <About {...props}/>
        <Catagory {...props}/>
        <RequiredSkill {...props}/>
      </div>
     

      </div>

    </main>
    
  )
}

export default JobSite
