import React from 'react'
import Certificates from './Sections/Certificates'

function Resume() {
  return (
    <div>
        <div className='mt-20 text-white border w-32 py-2 px-7 rounded-3xl'>RESUME</div>
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
            <div>
            <div className='mt-[-11px] text-[#8be88d]'>2021 - Present</div>
            <div className='text-white text-[35px] mt-5'>Software Engineer</div>
            <div className='flex justify-between'>
            <div className='text-gray-400'>Techaffinity</div>
            <div className='text-gray-400'>Remote</div>
            </div>
            <div className='text-gray-400 text-[13px] pt-2'>PHP(CodeIgniter, Laravel, and wordpress) | Git | GitHub | Flutter | Sql Server | JQuery | ReactJs | MySql | HTML5 | CSS | Tailwind css</div>
            </div>
            <div>
            <div className='mt-[54px] text-gray-400'>2019 - 2021</div>
            <div className='text-white text-[35px] mt-5'>Software Developer</div>
            <div className='flex justify-between'>
            <div className='text-gray-400'>ITEME SDA</div>
            <div className='text-gray-400'>Kigali, Rwanda</div>
            </div>
            <div className='text-gray-400 text-[13px] pt-2'>Java | PHP(CodeIgniter, Laravel) | MySql | Postgres | HTML5 | CSS | Tailwind css</div>
            </div>
            <div>
            <div className='mt-[54px] text-gray-400'>02/2018 - 08/2018</div>
            <div className='text-white text-[35px] mt-5'>Software Developer Intern</div>
            <div className='flex justify-between'>
            <div className='text-gray-400'>LYV Ltd</div>
            <div className='text-gray-400'>Kigali, Rwanda</div>
            </div>
            <div className='text-gray-400 text-[13px] pt-2'>PHP | GIT | GITHUB | JIRA | MySql | HTML5 | CSS | Tailwind css</div>
            </div>
            <div>
            <div className='mt-[54px] text-gray-400'>03/2017 - 11/2021</div>
            <div className='text-white text-[35px] mt-5'>Bachelor's degree in Information Technology</div>
            <div className='flex justify-between'>
            <div className='text-gray-400'>Adventist University of Central Africa (AUCA)</div>
            <div className='text-gray-400'>Kigali, Rwanda</div>
            </div>
            </div>
            <div>
            <div className='mt-[54px] text-gray-400'>2012 - 2015</div>
            <div className='text-white text-[35px] mt-5'>A - Level</div>
            <div className='flex justify-between'>
            <div className='text-gray-400'>Saint Phillip Technical Secondary School</div>
            <div className='text-gray-400'>Kigali, Rwanda</div>
            </div>
            </div>
            </div>
        </div>
        <Certificates />
    </div>
  )
}

export default Resume