

import React from 'react'
import Breadcrumb from '../../../compenents/Breadcrumb'
import imgArticle  from '../../../assets/images/hero.jpg';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin5Fill } from 'react-icons/ri';

function Articles() {
  return (
    <>
      <Breadcrumb pageName="Articles" />

      <div className="rounded-sm border border-stroke  shadow-default dark:border-strokedark dark:bg-boxdark">
         <div className="py-6 px-4 md:px-6 xl:px-7.5 flex bg-white justify-between items-center">
            <h4 className="text-xl font-semibold text-black dark:text-white">Tous les Articles</h4>
         </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 mt-4 lg:mt-5  justify-center'>
         <div className='p-4 rounded-lg bg-white '>
            <div className='h-[200px]'>
               <img src={imgArticle} className='block w-full h-full rounded-lg' alt="" />
            </div>
            <div className='py-3 text-center'>
               <Link className='text-center divide-meta-6  font-bold text-[18px] leading-6 '>Inscription Formation Professionnel OFPPT ITA / ISTA</Link>
            </div>
            <div className='my-2 flex items-center justify-center gap-3 lg:gap-4'>
                  <button className='bg-meta-3 text-white rounded-md py-2 px-5 lg:py-2 lg:px-6 text-[18px] lg:text-[20px]'><FaEdit/></button>
                  <button className='bg-meta-1 text-white rounded-md py-2 px-5 lg:py-2 lg:px-6 text-[18px] lg:text-[20px]'><RiDeleteBin5Fill/></button>
            </div>
         </div>
         <div className='p-4 rounded-lg bg-white '>
            <div className='h-[200px]'>
               <img src={imgArticle} className='block w-full h-full rounded-lg' alt="" />
            </div>
            <div className='py-3 text-center'>
               <Link className='text-center divide-meta-6  font-bold text-[18px] leading-6 '>Inscription Formation Professionnel OFPPT ITA / ISTA</Link>
            </div>
            <div className='my-2 flex items-center justify-center gap-3 lg:gap-4'>
                  <button className='bg-meta-3 text-white rounded-md py-2 px-5 lg:py-2 lg:px-6 text-[18px] lg:text-[20px]'><FaEdit/></button>
                  <button className='bg-meta-1 text-white rounded-md py-2 px-5 lg:py-2 lg:px-6 text-[18px] lg:text-[20px]'><RiDeleteBin5Fill/></button>
            </div>
         </div>
         <div className='p-4 rounded-lg bg-white '>
            <div className='h-[200px]'>
               <img src={imgArticle} className='block w-full h-full rounded-lg' alt="" />
            </div>
            <div className='py-3 text-center'>
               <Link className='text-center divide-meta-6  font-bold text-[18px] leading-6 '>Inscription Formation Professionnel OFPPT ITA / ISTA</Link>
            </div>
            <div className='my-2 flex items-center justify-center gap-3 lg:gap-4'>
                  <button className='bg-meta-3 text-white rounded-md py-2 px-5 lg:py-2 lg:px-6 text-[18px] lg:text-[20px]'><FaEdit/></button>
                  <button className='bg-meta-1 text-white rounded-md py-2 px-5 lg:py-2 lg:px-6 text-[18px] lg:text-[20px]'><RiDeleteBin5Fill/></button>
            </div>
         </div>
         <div className='p-4 rounded-lg bg-white '>
            <div className='h-[200px]'>
               <img src={imgArticle} className='block w-full h-full rounded-lg' alt="" />
            </div>
            <div className='py-3 text-center'>
               <Link className='text-center divide-meta-6  font-bold text-[18px] leading-6 '>Inscription Formation Professionnel OFPPT ITA / ISTA</Link>
            </div>
            <div className='my-2 flex items-center justify-center gap-3 lg:gap-4'>
                  <button className='bg-meta-3 text-white rounded-md py-2 px-5 lg:py-2 lg:px-6 text-[18px] lg:text-[20px]'><FaEdit/></button>
                  <button className='bg-meta-1 text-white rounded-md py-2 px-5 lg:py-2 lg:px-6 text-[18px] lg:text-[20px]'><RiDeleteBin5Fill/></button>
            </div>
         </div>
      </div>
    </>
  )
}

export default Articles