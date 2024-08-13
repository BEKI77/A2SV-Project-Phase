'use client'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { cardStyle,IconStyle,container1, Header, subHeader,smallIcon, description, labels,leb1,leb2,lebel} from './styles';
import { LuBookmark } from "react-icons/lu";
import { FaBookmark } from "react-icons/fa";
import { VscIssues } from "react-icons/vsc";
import { useCookies } from 'next-client-cookies';
import { useState } from 'react';
function Card(props: any) {
  const cookies = useCookies();
  const [state, setState] = useState(props.isBookmarked);

  // This handles addition of bookmark
  const addBookMark = async (id:number)=>{
    const response = await fetch("https://akil-backend.onrender.com/bookmarks/"+id, {
      method: "POST",
      body:null,
      headers:{
        "Authorization":`Bearer ${cookies.get("access-token")}`
    }
    }).then((response) => (response.json()));
    if(response.success){
      setState(true);
    }
  }

  // This handles deletion of bookmark
  const deleteBookMark = async (id:number)=>{
    const response = await fetch("https://akil-backend.onrender.com/bookmarks/"+id, {
      method: "DELETE",
      body:null,
      headers:{
        "Authorization":`Bearer ${cookies.get("access-token")}`
    }
    }).then((response) => (response.json()));

    if(response.success){
      setState(false);
    }
  }

  useEffect(()=>{
    setState(props.isBookmarked);
  },[])

  return (
    <div className='relative flow-root' >
      {state ? <FaBookmark onClick={()=>deleteBookMark(props.id)} className='size-6 absolute mt-3 right-8' color='blue'/> :<LuBookmark onClick={()=>addBookMark(props.id)} className='size-6 absolute mt-3 right-8' color='gray'/>}
      <Link key = {props.id} href={`./JobPage/${props.id}`} >
      <div className={cardStyle}>
        
        <div className = {IconStyle}>
          <img src={props.logoUrl} className='m-auto '/>
        </div>
        <div className={container1}>
          
          <div className={Header}> 
            <h1>{props.title}</h1>
          </div>
          <div className={subHeader}>
            <span>{props.company}</span>
            <VscIssues className = {smallIcon}/>
            <span className='font-weight-[50]'>{props.location}</span>
          </div>
          
          <div className={description}>
            <p>{props.description}</p>
          </div>
          
          <div className={labels}>
            <div className ={leb1}>
              <label>{props.opType.toUpperCase()}</label>
            </div>
            <h1 className='my-auto text-gray-300 text-3xl'>|</h1>
            <div className={leb2}>
              {props.categories.map((category:String) => (
                <label key={props.categories.indexOf(category)} className={lebel} >{category}</label>
              ))}
            </div>
          
          </div>
        
        </div>
      </div>
    </Link>              
    </div>
  )
}

export default Card
