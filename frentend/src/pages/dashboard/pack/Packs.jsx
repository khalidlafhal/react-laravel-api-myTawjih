




import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../compenents/Breadcrumb';
import { IoMdAddCircle } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import {axiosClient} from '../../../AxiosClient';
import Loader from '../../../common/Loader/index';
import ListPacks from './ListPacks';
import AddPack from './AddPack';

function Packs() {
   const [loading,setLoading] = useState(true);
   const [packs,setPacks]  = useState([]);


   const getAllPacks = async ()=>{
      setLoading(true)
      await axiosClient.get('/pack')
         .then(({data})=>{
            setPacks(data)
            setLoading(false)
         })
   }
   useEffect(()=>{
      // getAllBacs()
      getAllPacks()
   },[])

  return (
    <>
      <Breadcrumb pageName="Packs" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
         <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
            <h4 className="text-xl font-semibold text-black dark:text-white">Tous les Packs</h4>
            <AddPack getAllPacks={getAllPacks}/>
         </div>

         <div className="grid grid-cols-5 border-t justify-between w-full  border-stroke py-4.5 px-4 dark:border-strokedark  md:px-6 2xl:px-7.5">
            <div className="flex items-center">
               <p className="font-medium">ID</p>
            </div>
            <div className="items-center sm:flex justify-center">
               <p className="font-medium">Domaine</p>
            </div>
            <div className="items-center sm:flex justify-center">
               <p className="font-medium">Prix</p>
            </div>
            <div className="items-center sm:flex justify-center">
               <p className="font-medium">Active</p>
            </div>
            <div className="flex items-center justify-end">
               <p className="font-medium">Action</p>
            </div>
         </div>
         <ListPacks packs={packs} loading={loading} getAllPacks={getAllPacks}/>
      </div>
    </>
  )
}

export default Packs;