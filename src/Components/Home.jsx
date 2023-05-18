import React from 'react'
import Introduce from './Sections/Introduce'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Languages from './Sections/Languages'

function Home() {
  return (
    <div>
      <div><Introduce /></div>
      <div> <Skills /> </div>
      <div><Projects /></div>
      <div><Languages /></div>
    </div>
    
  )
}

export default Home