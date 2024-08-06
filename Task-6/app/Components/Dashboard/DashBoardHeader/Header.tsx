import React from 'react'
import {DashboardHeader, left, title, subtitle, right} from './styles'
const Header = (props: any) => {
  return (
    <div className={DashboardHeader}>
    <div className={left}>
      <h1 className={title}>Opportunities</h1>
      <h1 className={subtitle}>Showing {props.length} results</h1>
    </div>
    <div className={right}>

      <label className='m-1 p-1'>Sort By:</label>
      <select className='bg-transparent border-2 border-white border-r-gray-400 pr-2'>
        <option value="Most Relevant">Most Relevant</option>
        <option value="Oldest">Oldest</option>
      </select>
    </div>
  </div>
  )
}

export default Header
