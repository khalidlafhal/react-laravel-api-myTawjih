

import {Link} from 'react-router-dom';

export default function Breadcrumb({pageName,action}) {

   return (
      <div className='mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
         <h2 className='font-semibold dark:text-white text-title-md2 text-black'>
            {pageName}
         </h2>

         <nav>
            <ol className='flex  items-center gap-2'>
               <li className=''>
                  <Link to='/admin/dashboard'>
                     Dashboard
                  /</Link> 
               </li>
               <li className='text-primary'>
                  {pageName}
               </li>
               {
                  action && (<li>/ {action}</li>)
               }
            </ol>
         </nav>
      </div>
   )
}