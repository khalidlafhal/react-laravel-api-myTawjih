import Breadcrumb from "../../../../compenents/Breadcrumb";
import UserOne from '../../../../assets/images/user/user-01.png';
import { Link } from "react-router-dom";
import {AiOutlineEdit, AiTwotoneDelete} from 'react-icons/ai';

export default function ListUser() {

   return (
      <>
         <Breadcrumb pageName="Utilisateurs" />

   <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
        <h4 className="text-xl font-semibold text-black dark:text-white">
    
        </h4>

         <div> 
            <Link to='/admin/users/add-user'>
               <button className="bg-meta-3 text-white px-5 rounded-md
               py-2 font-bold 
               ">Create</button>
            </Link>
         </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">TÉLÉPHONE</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Actif</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Actions</p>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={UserOne} alt="Product" />
            </div>
            <p className="text-sm text-black dark:text-white">
              Apple Watch Series 7
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">Electronics</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">$269</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">22</p>
        </div>
        <div className="col-span-1 flex items-center gap-3">
            <AiOutlineEdit  className="cursor-pointer h-5 w-5 text-meta-3"/>
            <AiTwotoneDelete  className="cursor-pointer h-5 w-5 text-danger"/>
        </div>
      </div>



    </div>
      </>
   )

}