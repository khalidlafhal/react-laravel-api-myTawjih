
import {Header} from '../compenents/header/Header';
import {Footer} from '../compenents/footer/Footer';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosClient } from '../AxiosClient';
import Loader from '../common/Loader/index';

export default function DefaultLayoutHome() {
   const [formData, setFormData] = useState({});
   const [loading,setLoading]  = useState(true)
   // GET INTO WEBSITE
   const getInfo = () => {
   setLoading(true)
   axiosClient.get('/website')
      .then(({data}) => {
      // console.log(data)
      setFormData(data)
      setLoading(false)
      // console.log(formData)
      })
   }

   useEffect(()=>{
      getInfo()
   },[])

   return (

            <>
            {
               loading ? <Loader /> : <> 
                  <Header  websiteInfo={formData}/>
                     <Outlet />
                  <Footer websiteInfo={formData} />
               </>
            }

            </>
      

   )
}