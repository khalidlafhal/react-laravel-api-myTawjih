

import React from 'react'
import Breadcrumb from '../../../compenents/Breadcrumb';
import { IoMdAddCircle } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';

function Regions() {
  return (
    <>
      <Breadcrumb pageName="Régions" />

      <div className='flex justify-center '>
        <p>Le nombre total de Régions : <strong className='text-meta-4'>12</strong></p>
      </div>

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
         <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
            <h4 className="text-xl font-semibold text-black dark:text-white">Tous les Régions</h4>
            <button className='text-white bg-meta-3 px-5 py-2  lg:px-6 lg:py-3 rounded-md flex items-center gap-1 '>
                <IoMdAddCircle className='w-5 h-5 lg:w-6 lg:h-6'/> <span>Ajouter un nouveau Régions</span>   
            </button>
         </div>

         <div className="grid grid-cols-3 border-t justify-between w-full  border-stroke py-4.5 px-4 dark:border-strokedark  md:px-6 2xl:px-7.5">
            <div className="flex items-cente">
               <p className="font-medium">ID</p>
            </div>
            <div className="items-center sm:flex justify-center">
               <p className="font-medium">Région</p>
            </div>
            <div className="flex items-center justify-end">
               <p className="font-medium">Action</p>
            </div>
         </div>

         <div  className="grid grid-cols-4 md:grid-cols-3 border-t border-stroke py-4.5 px-4 dark:border-strokedark  md:px-6 2xl:px-7.5">
            <div className="">
                <p className="text-sm text-black dark:text-white">1</p>
            </div>
            <div className="col-span-2 md:col-span-1  flex lg:justify-center">
                <p className="text-sm text-black  dark:text-white">Tanger-Tétouan-Al Hoceïma</p>
            </div>
            <div className="flex justify-end items-center gap-1 lg:gap-3">
                <button className='bg-meta-3 text-white rounded-md px-2 text-[14px] lg:px-3 py-2 lg:py-2'><FaEdit className=''/> </button>
                <button className='bg-meta-7 text-white rounded-md px-2 text-[14px] lg:px-3 py-2 lg:py-2'> <RiDeleteBin5Fill /> </button>
            </div>
        </div>
         <div  className="grid grid-cols-4 md:grid-cols-3 border-t border-stroke py-4.5 px-4 dark:border-strokedark  md:px-6 2xl:px-7.5">
            <div className="">
                <p className="text-sm text-black dark:text-white">2</p>
            </div>
            <div className="col-span-2 md:col-span-1  flex lg:justify-center">
                <p className="text-sm text-black  dark:text-white">Fès-Meknès</p>
            </div>
            <div className="flex justify-end items-center gap-1 lg:gap-3">
                <button className='bg-meta-3 text-white rounded-md px-2 text-[14px] lg:px-3 py-2 lg:py-2'><FaEdit className=''/> </button>
                <button className='bg-meta-7 text-white rounded-md px-2 text-[14px] lg:px-3 py-2 lg:py-2'> <RiDeleteBin5Fill /> </button>
            </div>
        </div>

      </div>

    </>
  )
}

export default Regions;