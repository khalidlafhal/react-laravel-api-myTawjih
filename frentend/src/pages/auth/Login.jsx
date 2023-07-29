
import imgHero from '../../assets/images/hero.jpg'

export default function Login() {

   const styleSection = {
      backgroundImage: `url(${imgHero})`,
      width:"100%",
      backgroundSize:'cover',
      backgroundPosition:"center",
      boxSize:'border-box'
   }

   return (
      <section className="h-[70vh] flex items-center" style={styleSection}>
         <div className='max-w-screen-xl px-3 mx-auto py-4 w-full'>
            <div className=''>
               <div className='bg-white rounded-[18px] px-10 py-9'>
                  <h2 className='text-center  font-bold text-2xl  leading-10'>سجل الدخول</h2>

                  <div className='grid lg:grid-cols-2 gap-5 lg:gap-8 mt-5'>
                     <input type="email" className='py-3 px-2 text-[16px] rounded outline-none bg-[#f0f8ff]  text-right '  placeholder='البريد الاكتروني' value=""/>
                     <input type="password" className='py-3 px-2 text-[16px] rounded outline-none bg-[#f0f8ff]  text-right ' placeholder='كلمة المرور' value=""/>
                  </div>

                  <div className='mt-6 mb-3 text-center'>
                        <button className='bg-[#44525d] text-white font-bold text-[16px]  lg:text-[16px] w-[50%] py-[8px]   lg:py-[10px] ease-linear duration-300
                        rounded-full
                        hover:bg-[#5bc1ac]'>
                           تسجيل الدخول
                        </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}