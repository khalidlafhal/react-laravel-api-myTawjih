
import {BsFillTelephoneFill} from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import logoItem from '../../assets/images/logo.png';
import { FaFacebook ,FaWhatsapp , FaYoutube} from 'react-icons/fa';
import {BsInstagram}  from 'react-icons/bs';

export const Footer = ({websiteInfo}) => {

   const {nomSite,email,tele,addresse,twitter,facebook,youtube,instagramme,logo,approposDuSite} = websiteInfo;

   return (
      <>
         <section className="px-3 py-12 lg:py-16  bg-[#44525d]">
            <div className="max-w-screen-xl mx-auto p-4">
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-0'>
                     <div className=''>
                           <div className='w-[90px] h-[90px]'>
                              <img src={logoItem} className='w-full h-full' alt="" />
                           </div>
                     </div>

                     <div className="lg:col-span-2 w-full ">
                        <h3 className='font-[800] text-[#5bc1ac] leading-6 text-2xl'>معلومات الاتصال</h3>
                        <ul className="flex flex-col gap-y-2 text-white mt-5">
                           <li className='flex items-center gap-x-2'>
                              <span><BsFillTelephoneFill className='w-4 h-4'/></span>
                              <span className='text-[18px]'>{tele}</span>
                           </li>
                           <li className='flex items-center gap-x-2'>
                              <span><AiOutlineMail className='w-4 h-4'/></span>
                              <span className='text-[18px]'>{email}</span>
                           </li>
                           <li className='flex items-center gap-x-2'>
                              <span><ImLocation className='w-4 h-4'/></span>
                              <span className='text-[18px]'>{addresse}</span>
                           </li>
                        </ul>
                     </div>
                  </div>
            </div>
         </section>
         <section className="px-3 py-6 lg:py-6  bg-[#5a6f80]">
               <div className='max-w-screen-xl mx-auto'>
                  <div className="flex flex-col lg:justify-between lg:flex-row items-center">
                        <div className='flex items-center gap-3'>
                           <p className='text-white'>Copyright © 2023 Design: </p>
                           <a href="#" className='text-white hover:text-[#5bc1ac]'>AKOM TEAM</a>
                        </div>

                        <ul className='flex items-center gap-4'> 
                           <li className='bg-[#44525d] text-[18px] p-2 rounded-full hover:bg-[#5bc1ac]'>
                              <a href={facebook} className='text-white'><FaFacebook/></a>
                           </li>
                           <li className='bg-[#44525d] text-[18px] p-2 rounded-full hover:bg-[#5bc1ac]'>
                              <a href={tele} className='text-white'><FaWhatsapp/></a>
                           </li>
                           <li className='bg-[#44525d] text-[18px] p-2 rounded-full hover:bg-[#5bc1ac]'>
                              <a href={instagramme} className='text-white'><BsInstagram/></a>
                           </li>
                           <li className='bg-[#44525d] text-[18px] p-2 rounded-full hover:bg-[#5bc1ac]'>
                              <a href={youtube} className='text-white'><FaYoutube/></a>
                           </li>
                        </ul>
                  </div>
               </div>
         </section>
      </>

   )
}