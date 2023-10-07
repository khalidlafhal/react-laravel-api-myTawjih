



import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../compenents/Breadcrumb';
import { IoMdAddCircle } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import ListVilles from './ListVilles';
import AddVille from './AddVille';
import { axiosClient } from '../../../AxiosClient';
import Loader from '../../../common/Loader/index';

function Villes() {
   const [loading,setLoading] = useState(true);
   const [villes,setVilles]  = useState([]);

   // GET ALL VILLES
  const getAllVilles = async ()=>{
    setLoading(true)
    await axiosClient.get('/ville')
      .then(({data})=>{
        setVilles(data)
        setLoading(false)
      })
  }
   //GET ALL VILLES
   useEffect(()=>{
      getAllVilles()
   },[])

  return (
    <>
      <Breadcrumb pageName="Villes" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
         <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
            <h4 className="text-xl font-semibold text-black dark:text-white">Tous les Régions</h4>
            <AddVille getAllVilles={getAllVilles}/>
         </div>

         <div className="grid grid-cols-4 border-t justify-between w-full  border-stroke py-4.5 px-4 dark:border-strokedark  md:px-6 2xl:px-7.5">
            <div className="flex items-cente">
               <p className="font-medium">ID</p>
            </div>
            <div className="items-center sm:flex justify-center">
               <p className="font-medium">Ville</p>
            </div>
            <div className="items-center sm:flex justify-center">
               <p className="font-medium">Région</p>
            </div>
            <div className="flex items-center justify-end">
               <p className="font-medium">Action</p>
            </div>
         </div>

        {loading ? <div className='max-h-[200px] flex items-center justify-center overflow-y-hidden'>
           <Loader/></div> : <ListVilles villes={villes} getAllVilles={getAllVilles}/>}

      </div>

    </>
  )
}

export default Villes;