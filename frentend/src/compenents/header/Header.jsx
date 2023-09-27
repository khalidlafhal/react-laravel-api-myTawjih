
import {useState} from 'react';
import { FaFacebook ,FaWhatsapp , FaYoutube} from 'react-icons/fa';
import {ImLocation} from 'react-icons/im';
import { AiOutlineMail , AiOutlineMenuFold ,AiOutlineClose} from 'react-icons/ai';
import {BsInstagram}  from 'react-icons/bs';
import { Link, NavLink} from 'react-router-dom'; 
import logoItem from '../../assets/images/logo-site.png';
import config from '../../config';

const navLinksList = [
   {
      path:'#',
      display:'اتصل بنا '
   },
   {
      path:'#',
      display:'الدزاسة بالخارج'
   },
   {
      path:'#',
      display:'من نحن '
   },
   {
      path:'#',
      display:'الاشتراك طريقة'
   },
   {
      path:'#',
      display:'الرئيسة'
   },

]
export const Header = ({websiteInfo}) => {

   const [clickMenu, setClickMenu] = useState(false)
   const toggleMenu = () => setClickMenu(!clickMenu)

   const {nomSite,email,tele,addresse,twitter,facebook,youtube,instagramme,logo,approposDuSite} = websiteInfo;

   return (
      <>
      
      <div className="bg-[#5bc1ac] px-3">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
               <ul className="text-white text-[18px] flex flex-col lg:gap-5 gap-1  lg:flex-row">
                  <li className='flex items-center gap-x-2'>
                     <span><ImLocation className='w-5 h-5'/></span>
                     {/* <span>Boulevard de Mohammedia. QI Azli 40150 Marrakech Morocco</span> */}
                     <span>{addresse}</span>
                  </li>
                  <li className='flex gap-x-2 items-center'>
                     <span className='w-[18px] h-[18px]'>
                        <AiOutlineMail className='w-5 h-5'/>
                        </span>
                     {/* <span>mohamedouahki22@gmail.com</span>  */}
                     <span>{email}</span> 
                     </li>
               </ul>

               <ul className="text-white  gap-5 text-[20px] items-center hidden lg:flex">
                  <li>
                    <Link to={facebook} className='cursor-pointer'>
                     <FaWhatsapp   className='w-5 h-5'/>
                    </Link> 
                  </li>
                  <li>
                     <Link to={facebook}><FaFacebook  className='w-5 h-5'/></Link>
                     
                  </li>
                  <li>
                     <Link to={instagramme}> <BsInstagram  className='w-5 h-5' /></Link>
                     
                  </li>
                  <li>
                     <Link to={youtube}> <FaYoutube  className='w-5 h-5' /> </Link>
                  </li>
               </ul>
         </div>
      </div>

      <div className='bg-white shadow-md px-3'>
         <div className='max-w-screen-xl mx-auto flex justify-between items-center p-4'>
               
               <div className='flex items-center gap-3'>
                  <div className='h-[40px] w-[40px]'>
                     <img className='w-full' src={config.urlPackend+'/uploads/logos/'+logo} alt="" />
                  </div>
                  <h3 className='font-bold text-[#5bc1ac] text-xl '>{nomSite}</h3>
               </div>  

               <div className='navigation hidden lg:block'>
                  <ul className='flex items-center gap-6'> 
                     {navLinksList.map( (link, index ) => 
                        <li className='cursor-pointer' key={index}>
                                 <NavLink  to={link.path} className={ navClasse => navClasse.isActive ? 'font-[600] text-[18px]  text-gray-400 hover:text-[#5bc1ac]':'font-[600] text-[18px] text-[#5bc1ac] hover:text-[#5bc1ac]'}>
                                       {link.display}
                                 </NavLink>
                        </li>
                        )}

                     <li>
                     <NavLink to='/login' className='w-full'>
                           <button className='bg-[#5bc1ac] text-white font-semibold text-[16px]
                           rounded-full px-4 py-2 pb-3 flex items-center justify-between'>
                           تسجبل الدخول 
                           </button>
                        </NavLink>
                     </li>
                  </ul>
               </div> 

               {/* menu Icon */}
               <div className='lg:hidden' onClick={toggleMenu}>
                     {clickMenu ? <AiOutlineClose  className='w-[24px] h-[24px] cursor-pointer'/>
                     : <AiOutlineMenuFold  className='w-[24px] h-[24px] cursor-pointer'/>
                     }
               </div>

               {/* menu  reponsive */}
               <div className={clickMenu ? 'navigation block lg:hidden absolute bg-white  w-full left-0  top-[150px] pl-10 pt-3' : 'hidden' }>
                  <ul className='flex flex-col gap-y-5'> 
                     {navLinksList.map( (link, index ) => 
                        <li className='cursor-pointer' key={index}>
                                 <NavLink  to={link.path} className={ navClasse => navClasse.isActive ? 'font-[600] text-[18px]  text-gray-400 hover:text-[#5bc1ac]':'font-[600] text-[18px] text-[#5bc1ac] hover:text-[#5bc1ac]'}>
                                       {link.display}
                                 </NavLink>
                        </li>
                        )}

                     <li>
                        <NavLink to='/login' className='w-full'>
                           <button className='bg-[#5bc1ac] text-white font-semibold text-[16px]
                           rounded-full px-4 py-2 pb-3 flex items-center justify-between'>
                              تسجبل الدخول 
                           </button>
                        </NavLink>
                 
                     </li>
                  </ul>
               </div> 

         </div>
      </div>

      </>
   )
}