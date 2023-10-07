
import React from 'react'
import Breadcrumb from '../../../compenents/Breadcrumb'

function AjouterArticle() {
  return (
    <>
      <Breadcrumb pageName="Article" />

      <div className="flex flex-col gap-9 mb-5">
         <div className="rounded-md border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b  border-stroke py-4 px-6.5 dark:border-strokedark">
               <h3 className="font-medium text-black dark:text-white">Basic information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6.5">
                <div>
                      <label htmlFor="" className="mb-3 text-black block dark:text-white">Titre :</label>
                      <input
                      type="text"
                      placeholder="Titre de article"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                      disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>  
                <div>
                      <label htmlFor="" className="mb-3 text-black block dark:text-white">Titre De Concours :</label>
                      <input
                      type="text"
                      placeholder="Titre De Concours"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                      disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>  
                <div>
                      <label htmlFor="" className="mb-3 text-black block dark:text-white">Lien de l'ècole :</label>
                      <input
                      type="text"
                      placeholder="Lien de l'ècole"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                      disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>  
                <div>
                      <label htmlFor="" className="mb-3 text-black block dark:text-white">Lien De Vidèo :</label>
                      <input
                      type="text"
                      placeholder="Lien De Vidèo"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                      disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>  
                <div>
                      <label htmlFor="" className="mb-3 text-black block dark:text-white">Date De Concours :</label>
                      <input
                      type="date"
                      placeholder="PrénDate De Concours"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                      disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>  
            </div>
          </div>

            {/* Liens d'artlcle  */}
            <div className="rounded-md border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b  border-stroke py-4 px-6.5 dark:border-strokedark">
               <h3 className="font-medium text-black dark:text-white">liens d'article</h3>
            </div>
            <div className="grid grid-cols-1  gap-5 p-6.5">
                <div>
                      <label htmlFor="" className="mb-3 text-black block dark:text-white">Image : :</label>
                      <input
                      type="file"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                      disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                <div>
                      <label htmlFor="" className="mb-3 text-black block dark:text-white"> Pdf:</label>
                      <input
                      type="file"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                      disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                <div>
                      <label htmlFor="" className="mb-3 text-black block dark:text-white"> Audio :</label>
                      <input
                      type="file"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                      disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                <div>
                      <label htmlFor="" className="mb-3 text-black block dark:text-white"> Video:</label>
                      <input
                      type="file"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                      disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
            </div>
            </div>
            {/* Liens d'artlcle */}
            {/* types de bacs */}
            <div className="rounded-md border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b  border-stroke py-4 px-6.5 dark:border-strokedark">
               <h3 className="font-medium text-black dark:text-white">liens d'article</h3>
            </div>
            <div className="grid grid-cols-1   gap-3 p-6.5">
                <div className='flex items-center gap-3 lg:gap-5'>
                      <input
                      type="checkbox"
                      className='bock h-4 w-4'
                    />    
                    <label htmlFor="" className="text-black block  dark:text-white font-semibold lg:text-[18px]">علوم رياضية أ</label>
                  </div>
                <div className='flex items-center gap-3 lg:gap-5'>
                      <input
                      type="checkbox"
                      className='bock h-4 w-4'
                    />    
                    <label htmlFor="" className="text-black block  dark:text-white font-semibold lg:text-[18px]">علوم رياضية أ</label>
                  </div>
                <div className='flex items-center gap-3 lg:gap-5'>
                      <input
                      type="checkbox"
                      className='bock h-4 w-4'
                    />    
                    <label htmlFor="" className="text-black block  dark:text-white font-semibold lg:text-[18px]">علوم رياضية أ</label>
                  </div>
                <div className='flex items-center gap-3 lg:gap-5'>
                      <input
                      type="checkbox"
                      className='bock h-4 w-4'
                    />    
                    <label htmlFor="" className="text-black block  dark:text-white font-semibold lg:text-[18px]">علوم رياضية أ</label>
                  </div>
                <div className='flex items-center gap-3 lg:gap-5'>
                      <input
                      type="checkbox"
                      className='bock h-4 w-4'
                    />    
                    <label htmlFor="" className="text-black block  dark:text-white font-semibold lg:text-[18px]">علوم رياضية أ</label>
                  </div>
                <div className='flex items-center gap-3 lg:gap-5'>
                      <input
                      type="checkbox"
                      className='bock h-4 w-4'
                    />    
                    <label htmlFor="" className="text-black block  dark:text-white font-semibold lg:text-[18px]">علوم رياضية أ</label>
                  </div>
                <div className='flex items-center gap-3 lg:gap-5'>
                      <input
                      type="checkbox"
                      className='bock h-4 w-4'
                    />    
                    <label htmlFor="" className="text-black block  dark:text-white font-semibold lg:text-[18px]">علوم رياضية أ</label>
                  </div>
                <div className='flex items-center gap-3 lg:gap-5'>
                      <input
                      type="checkbox"
                      className='bock h-4 w-4'
                    />    
                    <label htmlFor="" className="text-black block  dark:text-white font-semibold lg:text-[18px]">علوم رياضية أ</label>
                  </div>
            </div>
            </div>
            {/* types de bacs */}
            <div className="flex justify-end ">
               <button className="bg-meta-3 text-white font-semibold py-2 rounded-md px-[50px]"
               >
                  Save
               </button>
         </div>
      </div>
    
    </>
  )
}

export default AjouterArticle