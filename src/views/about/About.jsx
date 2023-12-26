import React from 'react'
import PageSlider from '../../components/PageSlider'
import image from '/7517.jpg'
import AboutUnit from './AboutUnit'

export default function About() {
  const text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia expedita magnam quam. Commodi adipisci aliquid, reprehenderit voluptate enim et autem!" 
  return (
    <div className=''>
      <PageSlider img={image} title={text} />
      <AboutUnit />
    </div>

  )
}
