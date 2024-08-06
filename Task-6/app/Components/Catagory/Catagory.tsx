import React from 'react';
import {CatStyle,con1 ,lebel } from './style';
const Catagory = (props:any) => {
  return (
    <main className={CatStyle}>
        <h1 className='font-extrabold text-4xl' >Catagories</h1>
        <div className={con1}>
              {props.about.categories.map((category:String) => (
                <label key={props.about.categories.indexOf(category)} className={lebel} >{category}</label>
              ))}
            </div>
    </main>
     

  )
};
export default Catagory
