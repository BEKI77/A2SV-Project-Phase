import React from 'react'
import {container, container1, container2, ConCan, ConDes, ConRes, ConWhere, ResDiv} from './style'
import { BiCheckCircle } from "react-icons/bi";
import About from "../About/About";
import Catagory from "../Catagory/Catagory";
import RequiredSkill from '../RequiredSkill/RequiredSkill';
const JobSite = (props:any) => {
  return (
    <main>
      <div className={container}>
    
      <div className={container1}>
        <div className={ConDes}>
          <h1 className='font-extrabold text-3xl my-3'>Description</h1>
          <p>{props.description}</p>
        </div>
        {/* Responsibilities container */}
        <div className={ConRes}>
          <h1 className='font-extrabold text-3xl my-3'>Responsibility</h1>
          {props.responsibilities.map((responsibility:String) => (
              <div key={props.responsibilities.indexOf(responsibility)} className={ResDiv}>
                <BiCheckCircle className='text-emerald-600 mt-2 ml-1 mr-2 w-1/12' />
                <p className='mt-1 mx-2 w-11/12'>{responsibility}</p>
              </div>
            
          ))}
        </div>

        {/* ideal_candidate container */}

        <div className={ConCan}>
          <h1 className='font-extrabold text-3xl my-3'>Ideal Candidate we want</h1>
          { Object.keys(props.ideal_candidate).map((key:string)=>(
            (String(key)!=="traits") ? (
              <div key = {key} className='flex flex-start mx-2 my-auto p-1'>
                <h3 className='font-semibold font-sans' >{key.toUpperCase()} : </h3>
                <p>{props.ideal_candidate[key]}</p>
              </div>

            ):(
              <div key={key} className='flex flex-row justify-start'>
                <div className='ml-2 p-1  w-[80px]'>
                  <h3 className='font-semibold font-sans'>{key.toUpperCase()} :</h3>
                </div>
                <div className='mt-1  w-5/6'>
                  {props.ideal_candidate[key].map((trait:String) => (
                    <div className='flex flex-row' key={props.ideal_candidate[key].indexOf(trait)}>
                      <p className='mx-1 w-11/12' >- {trait}</p>
                    </div>
                  ))}
                </div>
              </div>
              ) 
          ))}
        </div>

        {/* When and where container */}
        <div className={ConWhere}>
          <h1 className='font-extrabold text-3xl my-3'>When & Where</h1>
          <p>{props.when_where}</p>
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
