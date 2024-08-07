"useclinient"
import React from 'react';
import { useState, useEffect } from 'react';
import {CatStyle,con1 ,lebel } from './style';
const Catagory = (props:any) => {
  const [prop, setJobs] = useState({} as any);

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
    <main className={CatStyle}>
        <h1 className='font-extrabold text-4xl' >Catagories</h1>
        <div className={con1}>
              {props.categories.map((category:String) => (
                <label key={props.categories.indexOf(category)} className={lebel} >{category}</label>
              ))}
            </div>
    </main>
     

  )
};
export default Catagory
