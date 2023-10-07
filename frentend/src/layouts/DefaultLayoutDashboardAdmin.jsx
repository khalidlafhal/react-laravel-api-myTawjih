import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SidebarAdmin from "../compenents/SidebarAdmin";
import HeaderAdmin from "../compenents/HeaderAdmin";
import { useStateContext } from "../contexts/ContextProvider";
import Swal from "sweetalert2";
import { axiosClient } from "../AxiosClient";

export default function DefaultLayoutDashboardAdmin() {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const {token,user} = useStateContext();

  //  const [infoWebs]
  const {notification,setWebsiteInfo,websiteInfo} = useStateContext();

  const getInfo = () => {
  // setLoading(true)
  axiosClient.get('/website')
       .then(({data}) => {
        setWebsiteInfo(data)
      //  setLoading(false)
       // console.log(formData)
       })
}

    useEffect(()=>{
      getInfo()
    },[websiteInfo])

  useEffect(()=>{
      if (notification) {
        if (notification.type === 'success')
          Swal.fire(
            'Good job!',
            notification.message,
            'success'
          ) 
      }
  },[notification])

   if (!token) {
      if (user.type !== 'admin') 
          return <Navigate to='/login'/>
   }

   
 


   
   return (
     <div className="dark:bg-boxdark-2 dark:text-bodydark">
       {/* <!-- ===== Page Wrapper Start ===== --> */}
       <div className="flex h-screen overflow-hidden">
         {/* <!-- ===== Sidebar Start ===== --> */}
         <SidebarAdmin sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
         {/* <!-- ===== Sidebar End ===== --> */}
 
         {/* <!-- ===== Content Area Start ===== --> */}
         <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
           {/* <!-- ===== Header Start ===== --> */}
           <HeaderAdmin sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
           {/* <!-- ===== Header End ===== --> */}
 
           {/* <!-- ===== Main Content Start ===== --> */}
           <main>
             <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">

              {/* {localStorage.getItem('ACCESS_TOKEN')} */}

               <Outlet />


             </div>
           </main>
           {/* <!-- ===== Main Content End ===== --> */}
         </div>
         {/* <!-- ===== Content Area End ===== --> */}
       </div>
       {/* <!-- ===== Page Wrapper End ===== --> */}
     </div>
   );

   
}