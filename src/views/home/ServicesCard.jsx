import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ServicesCard({title,link,text,image}) {
  return (
    <div className=' w-64 text-white bg-primary p-0 rounded-md group'>
        <div className=' overflow-hidden'>
            <img className=' group-hover:scale-[1.1] duration-300 rounded-t' src={image} alt="" />
        </div>
        <div className='p-6'>
            <h1 className='text-xl font-bold pb-2'>{title}</h1>
            <p className='text-sm text-gray-50/80 pb-5'>{text}</p>
            <NavLink className={'group-hover:pl-2 duration-300'} to={`/${link}`}>See more...</NavLink>
        </div>
    </div>
  )
}
