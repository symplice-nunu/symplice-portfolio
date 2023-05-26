import React from 'react'
import img from "../assets/DSC_0116.jpg"
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
function SideBar() {
  return (
    <div className='px-10'>
        <div className='flex justify-between'>
            <span className='font-bold text-3xl'>Symplice</span>
            <span className='font-bold'>Senior Software<br /> Engineer</span>
        </div>
        <div className='my-12'>
            <img src={img} alt="" className='rounded-3xl' />
        </div>
        <div className='text-center text-2xl'>
            <p>intwarisymplice@gmail.com</p>
            <p className=''>Kigali, Rwanda</p>
        </div>
        <div className='text-center my-8 text-gray-500'>
            <span>&copy; 2022 Symplice All Rights Reserved</span>
        </div>
       <div className='flex flex-col space-y-32'>
       <div className='text-center justify-center flex space-x-2'>
                                    <span>
                                    <BsLinkedin />
                                    
                                    </span>
                                    <span>
                                        <AiFillGithub />
                                    </span>
        </div>
        <div> 
            <button className='bg-[#8eeb8d] text-black w-full h-[50px] rounded-3xl'>
               
                    HIRE ME!
            </button>
        </div>
       </div>
    </div>
  )
}

export default SideBar