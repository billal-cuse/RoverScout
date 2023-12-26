import React from 'react'

export default function ImageCard({image, className}) {
  return (
    <div className='w-full p-5 bg-primary'>
        <img className='' src={image} alt="" />
    </div>
  )
}
