import React from 'react'
import PageSlider from '../../components/PageSlider'
import image from '/7517.jpg'
import AboutUnit from './AboutUnit'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function About() {
  const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia expedita magnam quam. Commodi adipisci aliquid, reprehenderit voluptate enim et autem!"
  return (
    <div className=''>
      <Header />
      <PageSlider img={image} title={text} />
      <AboutUnit />
      <Footer />
    </div>

  )
}
