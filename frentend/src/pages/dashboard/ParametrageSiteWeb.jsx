

import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../compenents/Breadcrumb'
import { axiosClient } from '../../AxiosClient';
import config from '../../config';
import Swal from 'sweetalert2';
import { useStateContext } from '../../contexts/ContextProvider';

function ParametrageSiteWeb() {
   const [infoExist, setInfoExist]   = useState(null);

  const {websiteInfo,setWebsiteInfo} = useStateContext();
   

   const [selectLogo,setSelectLogo] = useState(null);
   const [oldLogo,setOldLogo] = useState('');
   const [formData, setFormData] = useState({
      nomSite:'',
      email:'',
      tele:'',
      addresse:'',
      twitter:'',
      facebook:'',
      youtube:'',
      instagramme:'',
      logo:'',
      approposDuSite:'',
      smtp_password:''
   })

   const handleInputChange = (e) => {
      setFormData({
         ...formData,[e.target.name] : e.target.value
      })
   }

   // handle Upload photo
   const handleLogoChange = (e) => {
      const  selectFile = e.target.files[0];

      if (selectFile) {
         setFormData({...formData,logo:selectFile})
         
         const reader = new FileReader();
         reader.onload = e => {
            setSelectLogo(e.target.result)
         }
         reader.readAsDataURL(selectFile)

      } else {
         setSelectLogo(null)
         setFormData({...formData,logo:''})
      }

   }

   const annuleUpload = () => {
      setSelectLogo(null)
      setFormData({...formData,logo:null})
      
   }

   // GET INTO WEBSITE
   const getInfo = () => {
      axiosClient.get('/admin/website')
      .then(({data}) => {
         // console.log(data)
            setFormData(data)
            setOldLogo(data.logo)
            setInfoExist(formData)
            console.log(infoExist)
      })
   }
   useEffect(()=>{
      getInfo()
   },[])
   // add info website
   const handleAddInfoWebsite = ()=> {
      // console.log(formData)
      axiosClient.post('/admin/website',formData,
         { headers:{
               'Content-Type':'multipart/form-data'
            }
         }
      ).then(({data}) => {
         Swal.fire(
            'Good job!',
            'les information de site web a ete modifie',
            'success'
          ) 
          setOldLogo(data.info.logo)
         // console.log(data)
      })
         .catch(err => {
            console.log(err)
         })
   }
   //update info website
   const handleUpdateInfo = ()=>{
      axiosClient.post('/admin/website/update',formData,
      { headers:{
            'Content-Type':'multipart/form-data'
         }
      }
      ).then(({data}) => {
         Swal.fire(
            'Good job!',
            'les information de site web a ete modifie',
            'success'
         ) 
         setWebsiteInfo(data)
         // console.log(data)
      })
      .catch(err => {
         console.log(err)
      })
   }

  return (
    <>
      <Breadcrumb pageName="Site Web" />
    
      <div className='flex flex-col gap-9 mb-5'>
         <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

               <div className="bg-[#f0efef] border-b  border-stroke py-4 px-6.5 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">Aperçu</h3>
               </div>

               <div className="grid grid-cols-1  md:grid-cols-2 gap-5 p-6.5">
                  
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 w-full col-span-2'>
                     <div>
                        <label htmlFor="" className="mb-3 text-black block dark:text-white">Nom de Site web</label>
                        <input
                        type="text"
                        placeholder="Nom de Site web"
                        value={formData.nomSite}
                        onChange={handleInputChange}
                        name='nomSite'
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                        disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                     </div>
                     <div>
                        <label htmlFor="" className="mb-3 text-black block dark:text-white">Téléphone</label>
                        <input
                        type="text"
                        placeholder="Téléphone"
                        value={formData.tele}
                        name='tele'
                        onChange={handleInputChange}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                        disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                     </div>  
                  </div>
 
                  <div className='col-span-2'>
                        <label htmlFor="" className="mb-3 text-black block dark:text-white">Email</label>
                        <input
                        type="text"
                        placeholder="Email"
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                        disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                  </div>   
   
                  <div className="col-span-2">
                        <label htmlFor="" className="mb-3 text-black block dark:text-white">SMTP PASSWORD de cet Email</label>
                        <input
                        type="text"
                        placeholder="SMTP"
                        name='smtp_password'
                        value={formData.smtp_password}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                        disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                     />
                  </div>   


               </div>
               
         </div>

         {/* =========== START ADRESSE  ========== */}
         <div className='bg-white rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='bg-[#f0efef] border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
                  <h3 className='font-medium text-black dark:text-white lg:text-[18px] '>Adress</h3>
            </div>

            <div className='p-6.5'>
               <div>
                  <label htmlFor="" className="mb-3 text-black block dark:text-white">Adress</label>
                        <input
                        type="text"
                        placeholder="Adresse"
                        value={formData.addresse}
                        name='addresse'
                        onChange={handleInputChange}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                        disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                     />
               </div>
            </div>
         </div>
         {/* ===========END  ADRESSE  ========== */}
         {/* ============= Start content the Page Home  ============  */}
         <div className='bg-white rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className=' bg-[#f0efef] border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
                  <h3 className='font-medium text-black dark:text-white lg:text-[18px] '>Contenu de la page d'accueil</h3>
            </div>

            <div className='grid lg:grid-cols-2 gap-5  p-6.5'>
               <div >
                  <label htmlFor="" className="mb-3 text-black block text-right lg:text-[18px] dark:text-white">من نحن</label>
                        <textarea
                        type="text"
                        placeholder="من نحن"
                        className="w-full text-right placeholder:text-right placeholder:text-[18px] rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                        disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                     >
                     </textarea>
               </div>
               <div >
                  <label htmlFor="" className="mb-3 text-black block text-right lg:text-[18px] dark:text-white">نبذة عن الموقع</label>
                        <textarea
                        type="text" 
                        placeholder="نبذة عن الموقع"
                        value={formData.approposDuSite}
                        name='approposDuSite'
                        onChange={handleInputChange}
                        className="w-full placeholder:text-[18px] text-right placeholder:text-right rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                        disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                     >
                     </textarea>
               </div>
            </div>
         </div>
         {/* ============= End content the Page Home  ============  */}
         {/* =========== START  Réseaux Sociaux */}
         <div className='bg-white rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='bg-[#f0efef] border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
                  <h3 className='font-medium text-black dark:text-white lg:text-[18px] '>Réseaux Sociaux</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5  p-6.5'>
               <div>
                  <label htmlFor="" className="mb-2 text-black block dark:text-white">Twitter</label>
                     <input
                     type="text"
                     placeholder="Twitter"
                     value={formData.twitter}
                     name='twitter'
                     onChange={handleInputChange}
                     className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                     disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
               </div>
               <div>
                  <label htmlFor="" className="mb-2 text-black block dark:text-white">Facebook</label>
                     <input
                     type="text"
                     placeholder="Facebook"
                     value={formData.facebook}
                     name='facebook'
                     onChange={handleInputChange}
                     className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                     disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
               </div>
               <div>
                  <label htmlFor="" className="mb-2 text-black block dark:text-white">Youtube</label>
                     <input
                     type="text"
                     placeholder="Youtube"
                     value={formData.youtube}
                     name='youtube'
                     onChange={handleInputChange}
                     className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                     disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
               </div>
               <div className='lg:col-span-3'>
                  <label htmlFor="" className="mb-2 text-black block dark:text-white">Instagram</label>
                     <input
                     type="Instagram"
                     placeholder="Instagram"
                     value={formData.instagramme}
                     name='instagramme'
                     onChange={handleInputChange}
                     className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                     disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
               </div>
            </div>
         </div>
         {/* =========== END  Réseaux Sociaux ================*/}
         {/* ===========  start  Logo ==============*/}
         <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="bg-[#f0efef] flex justify-between items-center border-b  border-stroke py-4 px-6.5 dark:border-strokedark">
               <h3 className="font-medium text-black dark:text-white">Logo de siteweb</h3>
               {
                  selectLogo && (
                     <button
                     onClick={annuleUpload}
                   className="bg-meta-7 rounded-md px-6 text-white py-1">Annuler Upload</button>
                  )
               }

            </div>

            <div
                    id="FileUpload"
                    className="relative block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                      onChange={handleLogoChange}
                    />


                    {
                     selectLogo || oldLogo ?
                     <div className="flex justify-center">
                        <div className="h-[150px] w-[250px] rounded-[20px] overflow-hidden">
                           <img  src={selectLogo ? selectLogo : config.urlPackend+'/uploads/logos/'+oldLogo} alt="" className="w-full  h-full block"  />
                        </div>
                     </div>
                     : 
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                            fill="#3C50E0"
                          />
                        </svg>
                      </span>
                      <p>
                        <span className="text-primary">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                      <p>(max, 800 X 800px)</p>
                    </div> 
                    }
            </div>

         </div>
         {/* ===========  end  Logo ==============*/}

         <div className="flex justify-end ">

              {/* {infoExist ? 
                  <button className="bg-meta-3 text-white font-semibold py-2 rounded-md px-[50px]"
                  onClick={()=> handleUpdateInfo()}> Update </button>
                  :
                  <button className="bg-meta-3 text-white font-semibold py-2 rounded-md px-[50px]"
                  onClick={()=> handleAddInfoWebsite()}> Save </button>
            } */}
              {oldLogo ? 
                  <button className="bg-meta-3 text-white font-semibold py-2 rounded-md px-[50px]"
                  onClick={()=> handleUpdateInfo()}> Update </button>
                  :
                  <button className="bg-meta-3 text-white font-semibold py-2 rounded-md px-[50px]"
                  onClick={()=> handleAddInfoWebsite()}> Save </button>
            }
         </div>

      </div>


    
    
    </>
  )
}

export default ParametrageSiteWeb