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
//==== theses pages for admin
const ListUser = lazy( () => import('./pages/dashboard/admin/users/index'));
const AddUser = lazy( () => import('./pages/dashboard/admin/users/AddUser'));
const EditUser = lazy( () => import('./pages/dashboard/admin/users/EditUser'));
const Profile = lazy( () => import('./pages/dashboard/admin/users/Profile'))
const StudentsAdmin = lazy( () => import('./pages/dashboard/admin/student/Index'));
const TestemonialAdmin = lazy( () => import('./pages/dashboard/admin/testimonials/Testemonials'));
const RegionAdmin = lazy( () => import('./pages/dashboard/region/Regions'));

const Villes = lazy( () => import('./pages/dashboard/ville/Villes'));
const Bacs = lazy( () => import('./pages/dashboard/bac/Bacs'));
const Packs = lazy( () => import('./pages/dashboard/pack/Packs'));
const AjouterArticle = lazy(()=> import('./pages/dashboard/article/AjouterArticle'))
const Articles = lazy(()=> import('./pages/dashboard/article/Articles'))

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
  },{
   path:'/admin/students',
   element:<Suspense  fallback={<Loader/>}><StudentsAdmin /></Suspense>
  },{
   path:'/admin/testemonial',
   element:<Suspense fallback={<Loader/>}> <TestemonialAdmin/> </Suspense>
  },{
   path:'/admin/regions',
   element:<Suspense fallback={<Loader/>}> <RegionAdmin/></Suspense>
  },{
   path:'/admin/villes',
   element:<Suspense fallback={<Loader/>}><Villes/></Suspense>
  },{
   path:'/admin/bacs',
   element:<Suspense fallback={<Loader/>}><Bacs/></Suspense>
  },{
   path:'/admin/packs',
   element:<Suspense fallback={<Loader/>}><Packs /> </Suspense>
  },{
   path:'/admin/articles',
   element:<Suspense fallback={<Loader/>}><Articles/> </Suspense>
  },{
   path:'/admin/ajouter-article',
   element:<Suspense fallback={<Loader/>}><AjouterArticle/></Suspense>
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