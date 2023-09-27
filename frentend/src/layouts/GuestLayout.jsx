import { Outlet } from "react-router-dom";
import { Footer } from "../compenents/footer/Footer";
import { Header } from "../compenents/header/Header";
import { useEffect, useState } from "react";
import { axiosClient } from "../AxiosClient";
import Loader from "../common/Loader";


export default function GuestLayout() {
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
         {loading ? <Loader/> :
            <>
               <Header  websiteInfo={formData}/>
                  <Outlet/>
               <Footer  websiteInfo={formData}/>
            </>
         
         }
      </>
   )
}