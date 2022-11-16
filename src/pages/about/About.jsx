import React from 'react'
import AboutMain from '../../comps/AboutMain/AboutMain'
import Mission from '../../comps/Mission/Mission'
import './about.scss'
import Cars from '../../comps/Cars/Cars'
import Partners from '../../comps/Partners/Partners'
import Slider from '../../comps/Slider/Slider'
import Form from '../../comps/Form/Form'

function About() {
  return (
    <main className="body">
      <AboutMain />
      <Mission />
      <Cars />
      <Partners />
      <Slider />
      <Form />
    </main>

  )
}

export default About