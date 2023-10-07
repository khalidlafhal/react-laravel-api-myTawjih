
import React from 'react'
import Swal from 'sweetalert2'
import UpdateVille from './UpdateVille'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { axiosClient } from '../../../AxiosClient'


function ListVilles({villes,getAllVilles}) {

//------------- Handle delete region ------------------
   const handleDeleteVille = (idVille) => {
   Swal.fire({
     title: 'êtes-vous sûr??',
     text: "Vous ne pourrez pas revenir en arrière!",
     icon: 'warning',
     showCancelButton: true,
     cancelButtonText:'Annuler',
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Oui,supprimez-le'
   }).then((result) => {
      if (result.isConfirmed) {
         axiosClient.delete(`/ville/${idVille}`)
         .then(({data})=>{
           Swal.fire({
            icon:'success',
            text:'la ville a ete supprimer'
           }
           )
           getAllVilles()
       })
      }
   })
}
 //------------- Handle delete region ------------------
  return (
    <>
      {villes.map((ville,index)=>{
         return (
            <div key={index}  className="grid grid-cols-5 md:grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark  md:px-6 2xl:px-7.5">
               <div className="">
                  <p className="text-sm text-black dark:text-white">{ville.id}</p>
               </div>
               <div className="flex md:justify-center">
                  <p className="text-sm text-black dark:text-white">{ville.name}</p>
                  </div>
               <div className="col-span-2 md:col-span-1  justify-end  flex md:justify-center">
                  <p className="text-sm text-black  dark:text-white">{ville.region.name}</p>
               </div>
               <div className="flex justify-end items-center gap-1 lg:gap-3">
                  <UpdateVille  ville={ville} getAllVilles={getAllVilles}/>
                  <button className='bg-meta-7 text-white rounded-md px-2 text-[14px] lg:px-3 py-2 lg:py-2'onClick={()=>handleDeleteVille(ville.id)} > <RiDeleteBin5Fill /> </button>
               </div>
         </div>
         )
      })}
    </>
  )
}

export default ListVilles