import {Suspense, lazy } from 'react';
import Loader from '../common/Loader/index';
import ParametrageSiteWeb from '../pages/dashboard/ParametrageSiteWeb';





const ListUser = lazy( () => import('../pages/dashboard/admin/users/index'));
const AddUser = lazy( () => import('../pages/dashboard/admin/users/AddUser'));
const EditUser = lazy( () => import('../pages/dashboard/admin/users/EditUser'));
const Profile = lazy( () => import('../pages/dashboard/admin/users/Profile'))
const StudentsAdmin = lazy( () => import('../pages/dashboard/admin/student/Index'));
const TestemonialAdmin = lazy( () => import('../pages/dashboard/admin/testimonials/Testemonials'));
const RegionAdmin = lazy( () => import('../pages/dashboard/region/Regions'));
const Villes = lazy( () => import('../pages/dashboard/ville/Villes'));
const HomeAdmin = lazy(() => import('../pages/dashboard/admin/Home'));


 export const routesAdmin = [
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
   }
 ]
 