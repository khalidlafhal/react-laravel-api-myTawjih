import imgHero from '../assets/images/hero.jpg'
import imgAboutItem from '../assets/images/about.jpg';
import {SiVerizon} from 'react-icons/si';
import Backs from '../compenents/backs/Backs';
export default function Home()  {

   return (
      <>
         <div className="h-[70vh] w-full box-border">
            <img src={imgHero} alt="" className='bg-no-repeat bg-center bg-cover h-[70vh] w-full' />
         </div>
         {/*  */}
         <section className='px-3 py-12 lg:py-16 bg-[#f0f8ff]'>
            <div className='max-w-screen-xl mx-auto p-4'>
                  <div className='grid lg:grid-cols-2 gap-y-12 lg:gap-4'>
                     <div className='bg-red-400 h-[490px]  rounded-[20px]'>
                        <img src={imgAboutItem}  alt="" className='w-full h-full rounded-[20px]' />
                     </div>
                     <div className='flex flex-col gap-8'>
                        <div className='bg-white rounded-[20px] py-10 px-8'>
                           <h2 className='text-right text-[#44525d] font-[800] text-3xl lg:text-5xl leading-7'>من نحن</h2>
                           <p className='text-right mt-3 text-gray-500 leading-7'>الجسر توجيه هي مؤسسة متخصصة في مجال الإعلام و التوجيه المدرسي لفائدة تلاميد السنة الثانية بكالوريا لولوج المدارس و المعاهد الوطنية العليا </p>
                        </div>

                        <div className='bg-white rounded-[20px] py-10 px-8'>
                           <h2 className='text-right text-[#44525d] font-[800] text-3xl lg:text-5xl leading-7'>هدفنا</h2>
                           <p className='text-right mt-3 text-gray-500 leading-7'> هدفنا تسهيل خدمة البحث عن المدرسة الذي تريدها</p>
                           <ul className='flex flex-col mt-3  gap-y-2'>
                              <li className='flex gap-x-3 items-center text-right justify-end '>
                                 <span className='block p-2  mt-2 text-[12px] rounded-full bg-[#f0f8ff]'><SiVerizon  /></span>
                                 <p className='text-right  text-gray-500 leading-7'> بسهولة</p>
                              </li>
                              <li className='flex gap-x-3 items-center text-right justify-end'>
                                 <span className='block p-2  mt-2 text-[12px] rounded-full bg-[#f0f8ff]'><SiVerizon  /></span>
                                 <p className='text-right  text-gray-500 leading-7'> بسرعة</p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
            </div>
         </section>

         {/*start section backs  */}
         <Backs />
         {/*end section backs  */}

      </>
   )
}