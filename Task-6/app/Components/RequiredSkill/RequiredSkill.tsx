import React from 'react'
import { RequiredSkillStyle,con1 ,lebel } from './style'
const RequiredSkill = (props:any) => {
  return (
    <main className={RequiredSkillStyle}>
        <h1 className='font-extrabold text-4xl' >Required Skill</h1>
        <div className={con1}>
          {props.about.required_skills.map((skill:String) => (
            <label key={props.about.required_skills.indexOf(skill)} className={lebel}> {skill}</label>
          ))}
        </div>
    </main>
  )
}

export default RequiredSkill
