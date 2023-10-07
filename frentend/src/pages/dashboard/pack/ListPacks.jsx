
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import Swal from 'sweetalert2'
import Loader from '../../../common/Loader'
import { axiosClient } from '../../../AxiosClient'
import UpdatePack from './UpdatePack'




function ListPacks({packs,loading,getAllPacks}) {



   //------------- Handle delete Pack ------------------
  const handleDeletePack = (idPack) => {
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
      axiosClient.delete(`/pack/${idPack}`)
      .then(({data})=>{
        Swal.fire(
          'Deleted!',
          'le pack a ete supprimer avec success.',
          'success'
        )
        getAllPacks()
    })
     }
   })
 }
//------------- Handle delete Pack ------------------
  return (
    <>
      {loading ? <div className='max-h-[200px] flex items-center justify-center overflow-y-hidden'> <Loader/></div> :  packs.map((pack,index)=>{
            const {idPack,domaineP,prixPack,active} = pack;
            return (
            <div key={index} className="grid grid-cols-5  border-t border-stroke py-4.5 px-4 dark:border-strokedark  md:px-6 2xl:px-7.5">
                  <div className="">
                        <p className="text-sm text-black dark:text-white">{idPack}</p>
                  </div>
                  <div className=" flex justify-center">
                        <p className="text-sm text-black dark:text-white">{domaineP}</p>
                  </div>
                  <div className="flex justify-center">
                        <p className="text-sm text-black  dark:text-white">{prixPack}</p>
                  </div>
                  <div className="flex justify-center">
                        <p className="text-sm text-black  dark:text-white">{active}</p>
                  </div>
                  <div className="flex justify-end items-center gap-1 lg:gap-3">
                        <UpdatePack pack={pack} getAllPacks={getAllPacks}/>
                        <button className='bg-meta-7 text-white rounded-md px-2 text-[14px] lg:px-3 py-2 lg:py-2' onClick={() => handleDeletePack(idPack)} > <RiDeleteBin5Fill /> </button>
                  </div>
            </div>
            )
         })}
    </>
  )
}

export default ListPacks