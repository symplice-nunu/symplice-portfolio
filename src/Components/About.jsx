import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";

function About() {
  return (
    <div>
    <div className='mt-60 px-10 py-2 border border-gray-600 rounded-3xl w-36 text-white flex space-x-2'>
      <div className='pt-1'>
      <BsFillPersonFill />
      </div>
      <div>ABOUT</div>
      </div>
    <div className='text-white text-[60px] my-10'>
        Every great design begin with <br /> an even <span className='text-[#8be88d]'> better story</span>
    </div>
    <div className='text-gray-400'>
        Since beginning my journey as a freelance designer nearly 5 years ago, <br /> I've done remote work for agencies, consulted for startups, and collaborated with <br />
        talented people to create digital products for both business and consumer use. <br />
        I'm quietly confident, naturally curious, and perpetually working on improving my <br /> chopsonendesign problem at a time.
    </div>
    </div>
  )
}

export default About