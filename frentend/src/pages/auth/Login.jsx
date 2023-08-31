
import { useEffect, useRef,  useState} from 'react'
import imgHero from '../../assets/images/hero.jpg'
import  { axiosClient }  from '../../AxiosClient';
import { useStateContext } from '../../contexts/ContextProvider';
import {useNavigate} from 'react-router-dom';

export default function Login() {
   const navigate = useNavigate();
   const emailRef = useRef();
   const passwordRef = useRef();
   const [errors,setErrors] = useState(null);
   const {token,user,setToken,setUser} = useStateContext();

   useEffect(()=> {
      handleToken()
   },[token])

   const handleToken = () => {
      if (token) {
         // const type = user.type;
         // if (type === 'admin') {
            return navigate('/admin/dashboard');
         // }
   
         // if (type === 'responsable') {
         //    return navigate('student');
         // }
   
         // if (type === 'student') {
         //    return navigate('');
         // }
      // }
         }
   }

   
   const handleLogin = () => {
      setErrors(null)
      const payLoad = {
         email:emailRef.current.value,
         password:passwordRef.current.value
      }
      const  {email,password} = payLoad;
      if (email === '' || password === '') {
         alert('tous les champs sont obligatoire')
      } else {
         axiosClient.post('/login',payLoad)
         .then(({data}) => {

            if (data.token) {
               setToken(data.token);
               setUser(data.user);
               console.log(user);
               console.log(token)
            }

            // console.log(data)
         })
         .catch( err => {
            const resp = err.response;
            if (resp.status === 422) {
               setErrors(resp.data.errors);
               setTimeout(()=>{
                  setErrors(null)
               },5000)
            }
            // console.log(err)
         })
      }
   }
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
                  {
                     errors && (
                        <div className='bg-meta-7 py-2 text-white rounded-lg flex flex-col justify-center items-center'>
                           {Object.keys(errors).map(key => <p className='m-0 pl-3' key={key}>{errors[key]}</p>  )}
                        </div>
                     )
                  }

                  <div className='grid lg:grid-cols-2 gap-5 lg:gap-8 mt-5 lg:order-2'>
                     <input type="password" className='py-3  px-2 text-[16px] rounded outline-none bg-[#f0f8ff]  text-right ' placeholder='كلمة المرور'
                     ref={passwordRef}
                     />
                     <input type="email" className='py-3 px-2 text-[16px] rounded outline-none bg-[#f0f8ff]  text-right ' 
                      placeholder='البريد الاكتروني' 
                      ref={emailRef}
                      />
                  </div>

                  <div className='mt-6 mb-3 text-center'>
                        <button className='bg-[#44525d] text-white font-bold text-[16px]  lg:text-[16px] w-[50%] py-[8px]   lg:py-[10px] ease-linear duration-300
                        rounded-full
                        hover:bg-[#5bc1ac]'
                        onClick={handleLogin}
                        >
                           تسجيل الدخول
                        </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}