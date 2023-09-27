// import {routes} from './routes/router.jsx';
import Loader from './common/Loader/index';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import { useEffect, useState , Suspense, lazy } from 'react';

import DefaultLayoutHome from './layouts/DefaultLayoutHome';
import GuestLayout from './layouts/GuestLayout';
import DefaultLayoutDashboardAdmin from './layouts/DefaultLayoutDashboardAdmin';
import ParametrageSiteWeb from './pages/dashboard/ParametrageSiteWeb';


const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/auth/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));
const HomeAdmin = lazy(() => import('./pages/dashboard/admin/Home'));
const ListUser = lazy( () => import('./pages/dashboard/admin/users/index'));
const AddUser = lazy( () => import('./pages/dashboard/admin/users/AddUser'));
const EditUser = lazy( () => import('./pages/dashboard/admin/users/EditUser'));
const Profile = lazy( () => import('./pages/dashboard/admin/users/Profile'))
const routesAdmin = [
  {
     path:'/admin/dashboard',
     element:<Suspense fallback={<Loader/>}><HomeAdmin/></Suspense>
  },{
   path:'/admin/users',
   element:<Suspense fallback={<Loader/>}><ListUser/></Suspense>
  },{
   path:'/admin/users/add-user',
   element:<Suspense fallback={<Loader/>}><AddUser/></Suspense>
  }
  ,{
   path:'/admin/users/:id',
   element:<Suspense fallback={<Loader/>}><EditUser/></Suspense>
  },{
   path:'/admin/parametrage-siteweb',
   element:<Suspense fallback={<Loader/>} ><ParametrageSiteWeb /> </Suspense>
  },{
   path:'/admin/profile',
   element:<Suspense  fallback={<Loader />} > <Profile /></Suspense>
  }
]


const  routes = createBrowserRouter([
  {
     path:'/',
     element:<DefaultLayoutHome/>,
     children:[
        {
           path:'/',
           element:<Suspense fallback={<Loader/>}><Home/></Suspense>
           
        }
     ]
  },{
     path:'/',
     element:<GuestLayout />,
     children:[{
        path:'/login',
        element:<Suspense fallback={<Loader/>}><Login /></Suspense>
     }
  ]
  }
  
  ,{
     path:'/',
     element:<DefaultLayoutDashboardAdmin/>,
     children:routesAdmin
  }
  
  
  ,{
     path:'*',
     element:<Suspense fallback={<Loader/>}><NotFound/></Suspense>

  }
])
export default function  App(){
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     setTimeout(() => setLoading(false), 1000);
   }, []);

   return (
      loading ? 
    <Loader />
   : 
   <RouterProvider router={routes}></RouterProvider>
  
   )
}