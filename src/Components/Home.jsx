import React from 'react'
import Introduce from './Sections/Introduce'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'

function Home() {
  return (
    <div>
      <div><Introduce /></div>
      <div> <Skills /> </div>
      <div><Projects /></div>
    </div>
    
  )
}

export default Home