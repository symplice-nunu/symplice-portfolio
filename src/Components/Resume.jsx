import React from 'react'
import { MdCastForEducation } from "react-icons/md";
import { EducationData } from './Data/EducationData';

function Resume() {
  return (
    <div>
        <div className='mt-20 text-white border border-gray-600 w-36 py-2 px-7 rounded-3xl flex space-x-2'>
          <div className='pt-1'>
            <MdCastForEducation />
          </div>
          <div>RESUME</div>
          </div>
        <div className='text-[70px] text-white my-14'>
            Education & <span className='text-[#8be88d]'>Experience</span>
        </div>
        <div className='flex space-x-20 '>
            <div className='border-[1px] border-gray-500 mb-10 w-0 h-[903px]'>
                <div className='border ml-[-8px] mt-[-10px] border-[#8be88d] w-[17px] h-[17px] bg-[#8be88d] rounded-full'></div>
                <div className='border ml-[-8px] mt-[189px] border-[#636363] w-[17px] h-[17px] bg-[#636363] rounded-full'></div>
                <div className='border ml-[-8px] mt-[185px] border-[#636363] w-[17px] h-[17px] bg-[#636363] rounded-full'></div>
                <div className='border ml-[-8px] mt-[185px] border-[#636363] w-[17px] h-[17px] bg-[#636363] rounded-full'></div>
                <div className='border ml-[-8px] mt-[155px] border-[#636363] w-[17px] h-[17px] bg-[#636363] rounded-full'></div>
            </div>
            <div>
            {
                EducationData.map((item) => {
                  return (
                    
            <div>
            <div className={`${ item.year === '2021 - Present' ? 'text-[#8be88d] mt-[-7px]' : 'text-gray-400' } mt-[54px]`}>{ item.year }</div>
            <div className='text-white text-[35px] mt-5'>{ item.title }</div>
            <div className='flex justify-between'>
            <div className='text-gray-400'>{ item.company }</div>
            <div className='text-gray-400'>{item.location}</div>
          
            </div>
            <div className='text-gray-400 text-[13px] pt-2'>{ item.tools }</div>
            </div>
                  )
                })
            }
            
            </div>
        
        </div>
    </div>
  )
}

export default Resume