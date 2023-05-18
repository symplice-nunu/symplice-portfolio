import React from 'react'

function Projects() {
  return (
    <div>
        <div className='text-white border my-12 w-[130px] border-gray-600 py-2 px-7 rounded-3xl'>PROJECTS</div>
        <div className='text-white text-[70px]'>Featured <span className='text-[#8be88d]'>Projects</span></div>
        <div className='pt-20'>
            <div className='bg-[#f7d37d] h-[350px] w-[360px] rounded-3xl px-8 pt-16'>
            <div className='bg-white rounded-3xl h-[200px]'></div>
            <div className='flex space-x-4 my-4'>
            <div className='bg-white px-6 py-2 rounded-l-full rounded-r-full'>View</div>
            <div className='bg-white px-6 py-2 rounded-l-full rounded-r-full'>Live</div>
            <div className='bg-white px-6 py-2 rounded-l-full rounded-r-full'>GitHub</div>
            </div>
            </div>
            <div className='text-white text-center py-6 text-[40px]'>aad</div>
        </div>
    </div>
  )
}

export default Projects