
import React from 'react'
import { LanguagesData } from '../Data/LanguagesData'
import { MdLanguage } from "react-icons/md";

function Languages() {
  return (
    <div>
        <div className='text-white border my-8 w-[180px] border-gray-600 py-2 px-7 rounded-3xl space-x-2 flex'>
            <div className='pt-1'>
                <MdLanguage />
            </div>
            <div>
            LANGUAGES
            </div>
        </div>
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