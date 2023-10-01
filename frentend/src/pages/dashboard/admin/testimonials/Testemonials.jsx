import React from 'react'
import Breadcrumb from '../../../../compenents/Breadcrumb'
import {FaEdit } from 'react-icons/fa';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import photoUser from '../../../../assets/images/user/user-05.png';

function Testemonials() {
  return (
    <>
      <Breadcrumb  pageName='Testemonials' />
    
      <div className="rounded-sm border border-stroke  shadow-default dark:border-strokedark dark:bg-boxdark">
         <div className="py-6 px-4 md:px-6 xl:px-7.5 flex bg-white justify-between items-center">
            <h4 className="text-xl font-semibold text-black dark:text-white">Tous les commentaires</h4>
         </div>

         {/* md:px-6 2xl:px-7.5  py-4.5 px-4  border-stroke  dark:border-strokedark  border-t*/}
         <div className=" grid grid-cols-1 lg:grid-cols-3  py-4  gap-2 lg:gap-4">
            <div className='flex gap-5 flex-col mt-2 bg-white py-4 px-4 justify-center items-center rounded-lg'>
               <div>
                  <img src={photoUser} className='w-[90px] h-[90px] block rounded-full' alt="" />
               </div>
               <div className='flex flex-col items-center'>
                  <h3 className='font-bold text-boxdark text-[18px] lg:text-[20px]'>khalid lafhal</h3>
                  <p className='py-1 max-w-md text-center text-[14px] leading-5'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis accusamus ex repellendus tempore tempora?</p>
                  <div className='flex gap-2 items-center mt-2'>
                     <button className='bg-meta-3 text-white rounded-md px-3 py-2'><FaEdit className=''/> </button>
                     <button className='bg-primary text-white rounded-md px-3 py-1 text-[18px] font-medium'>Publier </button>
                     <button className='bg-meta-1 text-white rounded-md px-3 py-2'> <RiDeleteBin5Fill /> </button>
                  </div>
               </div>
            </div>
            <div className='flex gap-5 flex-col mt-2 bg-white py-4 px-4 justify-center items-center'>
               <div>
                  <img src={photoUser} className='w-[90px] h-[90px] block rounded-full' alt="" />
               </div>
               <div className='flex flex-col items-center'>
                  <h3 className='font-bold text-boxdark text-[18px] lg:text-[20px]'>khalid lafhal</h3>
                  <p className='py-1 max-w-md text-center text-[14px] leading-5'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis accusamus ex repellendus tempore tempora?</p>
                  <div className='flex gap-2 items-center mt-2'>
                     <button className='bg-meta-3 text-white rounded-md px-3 py-2'><FaEdit className=''/> </button>
                     <button className='bg-primary text-white rounded-md px-3 py-1 text-[18px] font-medium'>Publier </button>
                     <button className='bg-meta-1 text-white rounded-md px-3 py-2'> <RiDeleteBin5Fill /> </button>
                  </div>
               </div>
            </div>
         </div>




      </div>
    
    
    </>
  )
}

export default Testemonials