
import React from 'react'
import { LanguagesData } from '../Data/LanguagesData'

function Languages() {
  return (
    <div>
        <div className='text-white border my-8 w-[150px] border-gray-600 py-2 px-7 rounded-3xl'>LANGUAGES</div>
        <div className='space-y-8'>
            {
                LanguagesData.map((item,index) => {
                    return (
                        <div>
                            <div className='text-white text-[25px] mt-2'>{item.languageName}</div>
                            <div className='flex justify-between'>
                            <div className='text-gray-400'>{item.languageLevel}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Languages