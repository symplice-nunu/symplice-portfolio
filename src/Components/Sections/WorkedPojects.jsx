import React from 'react'
import About from '../About'

function WorkedPojects() {
  return (
    <div>
       <div className='flex space-x-20'>
       <div>
        <div className='text-[#8be88d] text-[70px]'>
            4+
        </div>
        <div className='text-gray-500'>
            YEARS OF <br /> EXPERIENCE
        </div>
        </div>
        <div>
        <div className='text-[#8be88d] text-[70px]'>
            15+
        </div>
        <div className='text-gray-500'>
            PROJECTS COMPLETED ON <br /> 4 COUNTRIES
        </div>
        </div>
       </div>
       <About />
    </div>
  )
}

export default WorkedPojects