import React from 'react'
import Introduce from './Sections/Introduce'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Languages from './Sections/Languages'
import Contact from './Sections/Contact'
import WorkedPojects from './Sections/WorkedPojects'
import About from './About'
import Resume from './Resume'
import Certificates from './Sections/Certificates'

function Home() {
  return (
    <div>
      <div><Introduce /></div>
      <div><WorkedPojects /></div>
      <div><About /></div>
      <div><Resume /></div>
      <div><Certificates /></div>
      <div><Skills /> </div>
      <div><Projects /></div>
      <div><Languages /></div>
      <div><Contact /></div>
    </div>
    
  )
}

export default Home