
import {Suspense, lazy} from 'react';
import {createBrowserRouter}  from 'react-router-dom';
import DefaultLayoutHome from '../layouts/DefaultLayoutHome';
// import Home from '../pages/Home';
import GuestLayout from '../layouts/GuestLayout';
import Login from '../pages/auth/Login';
import NotFound from '../pages/NotFound';
import DefaultLayoutDashboardAdmin from '../layouts/DefaultLayoutDashboardAdmin';
import HomeAdmin from '../pages/dashboard/admin/Home';

const Home = lazy(() => import('../pages/Home'));
const ListUser = lazy( () => import('../pages/dashboard/admin/users'));
const EditUser = lazy( () => import('../pages/dashboard/admin/users/EditUser') )

const routesAdmin = [
   {
      path:'/admin/dashboard',
      element:<HomeAdmin/>
   },{
      path:'/admin/users',
      element:<Suspense fallback={<Loader/>}><ListUser/></Suspense>
   },{
      path:'/admin/users/edit',
      element:<Suspense fallback={<Loader/>}><EditUser /></Suspense>
   }
]


export const routes = createBrowserRouter([
   {
      path:'/',
      element:<DefaultLayoutHome/>,
      children:[
         {
            path:'/',
            element:
               <Suspense fallback={<Loader/>}>
                  <Home/>
              </Suspense>
            
         }
      ]
   },{
      path:'/',
      element:<GuestLayout />,
      children:[{
         path:'/login',
         element:<Login />
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
      element:<NotFound/>

   }
])