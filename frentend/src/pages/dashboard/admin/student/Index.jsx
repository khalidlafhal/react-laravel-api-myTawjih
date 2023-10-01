
import React from 'react'
import Breadcrumb from '../../../../compenents/Breadcrumb'
import {IoMdAddCircle} from 'react-icons/io';

function Students() {
  return (
    <>
      <Breadcrumb pageName="Étudiants" />

      <div className='flex justify-end md:mb-5 mb-3'>
            <div className='flex items-center lg:gap-5 gap-3'>
               <p className=''>Exporter to Excel</p>
               <button className='text-white bg-meta-8 px-5 py-2  lg:px-6 lg:py-3 rounded-md '>Exporter Tous les Étudiants</button>
            </div>
      </div>
      
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
         <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
            <h4 className="text-xl font-semibold text-black dark:text-white">Tous les Étudiants</h4>
            <button className='text-white bg-success px-5 py-2  lg:px-6 lg:py-3 rounded-md flex items-center gap-1 '>
                <IoMdAddCircle className='w-5 h-5 lg:w-6 lg:h-6'/> <span>Ajouter un nouveau Étudiants</span>   
            </button>
         </div>

         <div className="grid grid-cols-6 border-t overflow-x-auto   border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-6 md:px-6 2xl:px-7.5">
            <div className="flex items-center">
               <p className="font-medium">Photo</p>
            </div>
            <div className="items-center sm:flex">
               <p className="font-medium">Code Massar</p>
            </div>
            <div className="flex items-center">
               <p className="font-medium">CIN</p>
            </div>
            <div className="flex items-center">
               <p className="font-medium">Nom Complete</p>
            </div>
            <div className="flex items-center">
               <p className="font-medium">Statut</p>
            </div>
            <div className="flex items-center justify-end">
               <p className="font-medium">Action</p>
            </div>
         </div>

      </div>
    
    </>
  )
}

export default Students