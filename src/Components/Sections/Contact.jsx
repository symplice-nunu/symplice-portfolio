import React from 'react'

function Contact() {
  return (
   <div>
     <div className='text-white border my-8 w-[130px] border-gray-600 py-2 px-7 rounded-3xl'>CONTACT</div>
     <div className='text-[70px] text-white my-10'>
            Contact <span className='text-[#8be88d]'>Us</span>
    </div>
    <div className='flex gap-x-10 text-white'>
    <div className='flex flex-col'>
        <label className='mb-3' htmlFor="">FIRST NAME <span className='text-red-500'>*</span> </label>
        <input className='w-96 h-12 bg-transparent border-gray-600 border-b' type="text" placeholder='Your First Name' name="firstname" id="" />
    </div>
    <div className='flex flex-col mb-14'>
        <label className='mb-3' htmlFor="">LAST NAME <span className='text-red-500'>*</span> </label>
        <input className='w-96 h-12 bg-transparent border-gray-600 border-b' type="text" placeholder='Your Last Name' name="lastname" id="" />
    </div>
    </div>
    <div className='flex gap-x-10 text-white'>
    <div className='flex flex-col'>
        <label className='mb-3' htmlFor="">EMAIL <span className='text-red-500'>*</span> </label>
        <input className='w-96 h-12 bg-transparent border-gray-600 border-b' type="text" placeholder='Your Email Address' name="email" id="" />
    </div>
    <div className='flex flex-col mb-14'>
        <label className='mb-3' htmlFor="">SUBJECT <span className='text-red-500'>*</span> </label>
        <input className='w-96 h-12 bg-transparent border-gray-600 border-b' type="text" placeholder='Your Subject' name="subject" id="" />
    </div>
    </div>
    <div className='flex gap-x-10 text-white'>
    <div className='flex flex-col mb-14'>
        <label className='mb-3' htmlFor="">MESSAGE <span className='text-red-500'>*</span> </label>
        <textarea className='bg-transparent border-gray-600 border-b' placeholder='Write your message here...' name="message" id="" cols="79" rows="7"></textarea>
    </div>
    </div>
    <div>
        <input className='bg-[#8be88d] px-14 mb-10 py-4 rounded-l-full rounded-r-full ' type="button" value="SEND MESSAGE" />
    </div>
   </div>
  )
}

export default Contact