import React from 'react'
import { SkillsData } from '../Data/SkillsData'

function Skills() {
  return (
    <div>
        <div className='text-white border my-12 w-[100px] border-gray-600 py-2 px-7 rounded-3xl'>Skills</div>
      <div className='flex justify-between flex-wrap'>
      {
        SkillsData.map((item, index) => {
            return (
                    <div className='grid grid-col'>
                    <div className={`${item.skillsPercentage >= '90' ? "border-[#8be88d]" : "border-gray-400"} border w-[160px] px-10 py-6 rounded-t-full rounded-b-full`}>
                    <div className=' text-white text-[73px]'>{item.skillsLogo}</div>
                    <div className=' text-[#8be88d] text-[43px]'>{item.skillsPercentage}&#37;</div>
                    </div>
                    <div className='text-white text-center pt-2 pb-7'>{item.skillsName}</div>
                </div>
            )
        })
       }
      </div>
    </div>
  )
}

export default Skills