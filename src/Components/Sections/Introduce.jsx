import React from 'react'
import { SideBarIcons } from '../Data/SideBarIcons'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

function Introduce() {
  return (
    <div>
      
      <div className='flex justify-between'>
        <div className='border border-gray-500 h-[40px] rounded-3xl py-2 px-6 text-white flex space-x-2'>
           <div className='pt-1'>
           <AiOutlineHome /> 
           </div> 
           <div>
           INTRODUCE
           </div>
        </div> 
        <div className='text-white border-gray-500 border rounded-full w-[70px] h-[70px] px-6 py-6'>
           <span> <AiOutlineMenu /></span>
        </div>
    </div>
    <div className='flex justify-between space-x-[440px]'>
    <div>
    <div className='text-white text-[60px] my-6'>
        <h1>Say Hi to <span className='text-[#8be88d]'>Symplice</span>, <br />Senior Software Enginneer</h1>
    </div>
    <div className='text-gray-500'>
        I design and code beautifully simple things and i love what i do. <br /> Just simple like that!
    </div>
    {/* <div className='my-14 ml-auto py-24 px-12 border border-gray-500 w-52 h-52 rounded-full text-white'> 
    
    <span>MY PROJECTS</span>  
    
    </div> */}
      </div>
      <div className='border border-gray-500 px-6 py-6 w-16 rounded-3xl mt-60'>
        <div className='text-white'>
        {
                SideBarIcons.map((item) => {
                    return (
                       <div className='py-1'>{item.sideIcons}</div>
                    )
                })
            }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Introduce