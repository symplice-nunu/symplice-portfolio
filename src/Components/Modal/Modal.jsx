import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Modal = ({ data, closeModal, isOpen }) => {
  console.log(data, 'DATADATA')
  return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white bg-opacity-20" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-auto  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className='flex justify-between'>
                        <div>{data?.projectName}</div>
                        <div className=''><AiOutlineCloseCircle className='text-red-500 text-[30px] cursor-pointer' onClick={closeModal} /></div>
                    </div>
                  </Dialog.Title>
                  <div className='py-2'>
                    <hr />
                  </div>
                  <div className="my-3 flex flex-row gap-3 flex-wrap">
                    {
                        data?.otherImages.map((item, key) => <img src={item} key={key} alt="" className='w-[140px] h-[140px] rounded-xl' />)
                    }
                  </div>
                  <div className='py-4'>
                    <hr />
                  </div>

                  <div className="">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-300 px-4 py-2 text-sm font-medium text-green-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}

export default Modal;
