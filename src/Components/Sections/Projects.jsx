import React from 'react'
import { ProjectsData } from '../Data/ProjectsData'
import { AiOutlineProject } from "react-icons/ai";

function Projects() {
  return (
    <div>
        <div className='text-white border my-12 w-[160px] border-gray-600 py-2 px-7 rounded-3xl space-x-2 flex'>
            <div className='pt-1'>
            <AiOutlineProject />
            </div>
            <div>
            PROJECTS
            </div>
        </div>
        <div className='text-white text-[70px]'>Featured <span className='text-[#8be88d]'>Projects</span></div>
        <div className='pt-20 flex flex-wrap justify-between'>
            {
                ProjectsData.map((item, ndex) => {
                    return (
                        <div>
            <div className='bg-[#f7d37d] h-[350px] w-[360px] rounded-3xl px-8 pt-16'>
            <div className='bg-white rounded-3xl h-[200px]'>
            <img src={item.projectImage} alt="" className={`${item.projectImage === '' ? 'hidden' : null} rounded-3xl h-[200px] w-[360px]`} />
            </div>
            <div className='flex space-x-4 my-4'>
            <div className={`bg-white px-6 py-2 rounded-l-full rounded-r-full`}>View</div>
            <div className={`${ item.projectLive === '' ? "hidden" : null} bg-white px-6 py-2 rounded-l-full rounded-r-full`}>Live</div>
            <div className={`${ item.projectGit === '' ? "hidden" : null} bg-white px-6 py-2 rounded-l-full rounded-r-full`}>GitHub</div>
            </div>
            </div>
            <div className='text-white text-center  pt-1 pb-10 text-[18px]'>{item.projectName}</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Projects