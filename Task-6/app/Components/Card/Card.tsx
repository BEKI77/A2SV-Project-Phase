import React from 'react'
import { cardStyle,IconStyle,container1, Header, subHeader,smallIcon, description, labels,leb1,leb2,lebel} from './styles'
import { CiAirportSign1 } from "react-icons/ci"
import {VscIssues } from "react-icons/vsc";
function Card(props: any) {
  return (
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
            <span>{props.location}</span>
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
  )
}

export default Card
