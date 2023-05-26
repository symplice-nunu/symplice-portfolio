import React from 'react'
import { TbCertificate } from "react-icons/tb";
import { CertificatesData } from '../Data/CertificatesData'

const Certificates = () => {
  return (
    <div>
        <div className='text-white border my-12 w-[180px] border-gray-600 py-2 px-7 rounded-3xl flex space-x-2'>
          <div className='pt-1'>
            <TbCertificate />
          </div>
          <div>CERTIFICATES</div>
        </div>

<div className='flex space-x-20 '>
            <div>
           
           {
                CertificatesData.map((item) => {
                  return (
                    <div>
                    <div className='mt-[-11px] text-gray-400'>{ item.year }</div>
                    <div className='text-white text-[35px] mt-2'>{ item.title }</div>
                    <div className='flex justify-between'>
                    <div className='text-gray-400'>{ item.company }</div>
                    <div className='text-gray-400'>{ item.location }</div>
                    </div>
                    <div className='text-white border my-4 w-[210px] py-2 px-7 rounded-3xl hover:bg-[#8be88d] flex space-x-2 mb-14 hover:text-black hover:border-[#8be88d]'>
                      <div className='pt-1'>
                        { item.viewEvent }
                      </div>
                      <div>
                      View Certificate
                      </div>
                      </div>
                    </div>
                  ) 
                })
           }
           
           
            </div>
        
        </div>

    </div>
  )
}

export default Certificates