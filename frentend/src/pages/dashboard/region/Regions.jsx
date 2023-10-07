

import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../compenents/Breadcrumb';
import { IoMdAddCircle } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { axiosClient } from '../../../AxiosClient';
import Loader from '../../../common/Loader/index';

function Regions() {
  const [regions,setRegions] = useState([])
  const [loading,setLoading] = useState(true);
  //Get all regions 
  const getAllRegions = async ()=> {
    setLoading(true)
   await axiosClient.get('/region')
      .then(({data})=>{
        setRegions(data)
        setLoading(false)
      })
  }
  useEffect(()=>{
    getAllRegions()
  },[])
  //Get all regions
  // ------------ Hanldle add region -----------------
  const handleAddRegion = () => {
    Swal.fire({
       title: '  ',
       width: '900px',
       html: ` <style>
               .card-header {
               color: #fff;
               }
               .card-body {
               background-color: #fff;
               border: 1px solid #ccc;
               border-top: none;
               }
               .form-label {
               font-weight: 500;
               color: #1862ab;
               }
               .form-control[readonly] {
               background-color: #F1F5FE;
               color: #555;
               }
           </style>
           <div class="container">
               <div class="card">
               <div class="card-header bg-meta-3 py-3">
                   <h4 class="mb-0 font-medium"><IoMdAddCircle class='w-5 h-5 lg:w-6 lg:h-6'/> Ajouter une Région</h4>
               </div>
               <div class="card-body  p-5">
                   <div class="row">
                       <div class="col-md-12">
                           <div class="form-group flex flex-col gap-2">
                               <label for="student-name" class="form-label text-[16px]">Région :</label>
                               <input type="text" placeholder='Région' id="region" class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                               disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                           </div>
                       </div>
                   </div>
               </div>
               </div>
           </div>`,
           customClass: {
             container: 'sweet-alert-container' // Add your custom class
           },
           onOpen: () => {
             // Adjust the z-index to ensure it's above the sidebar
             document.querySelector('.sweet-alert-container').style.zIndex = '9999';
           },
          position:'center',
          showCloseButton: true,
          showConfirmButton: true,
          confirmButtonText: 'Ajouter',
          allowOutsideClick: false,
          confirmButtonColor: '#1862ab',
          preConfirm: () => {
            const region = Swal.getPopup().querySelector('#region').value;
            if (region == '') {
              Swal.showValidationMessage(`Tous les champs sont obligatoires`)
            }
            return {region:region}
          }
          }).then((result)=>{
              axiosClient.post('/region',{name:result.value.region})
                .then(({data})=>{
                  Swal.fire(
                      'Good job!',
                      'la région a été ajoutée avec succès',
                      'success'
                  ) 
                  getAllRegions()
                })
                .catch(err => console.log(err))
          })
 }
  // ------------ Hanldle add region -----------------
  // ------------ Hanldle update region -----------------
  const handleUpdateRegion = (region) => {
    Swal.fire({
       title: '  ',
       width: '650px',
       html: ` <style>

               .card-header {

               color: #fff;
               }
               .card-body {
               background-color: #fff;
               border: 1px solid #ccc;
               border-top: none;
               }
               .form-label {
               font-weight: 500;
               color: #1862ab;
               }
               .form-control[readonly] {
               background-color: #F1F5FE;
               color: #555;
               }
           </style>
           <div class="container">
               <div class="card">
               <div class="card-header bg-meta-3 py-3">
                   <h4 class="mb-0 font-medium"><IoMdAddCircle class='w-5 h-5 lg:w-6 lg:h-6'/> Modifie une Région</h4>
               </div>
               <div class="card-body  p-5">
                   <input type="hidden" class="form-control" id="regionId" value=''>
                   <div class="row">
                       <div class="col-md-12">
                           <div class="form-group flex flex-col gap-2">
                               <label for="student-name" class="form-label text-[16px]">Région :</label>
                               <input type="text" id="region" value="${region.name}" placeholder='Région' class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                               disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                           </div>
                           
                       </div>
                   </div>
               </div>
               </div>
           </div>`,
           customClass: {
             container: 'sweet-alert-container' // Add your custom class
           },
           onOpen: () => {
             // Adjust the z-index to ensure it's above the sidebar
             document.querySelector('.sweet-alert-container').style.zIndex = '9999';
           },
          position:'center',
          showCloseButton: true,
          showConfirmButton: true,
          confirmButtonText: 'Modifier',
          allowOutsideClick: false,
          confirmButtonColor: '#1862ab',
          preConfirm:()=>{
            const region = Swal.getPopup().querySelector('#region').value;
            if (region == '') {
              Swal.showValidationMessage(`Tous les champs sont obligatoires`)
            }
            return {region:region}
          }
          }).then((result)=>{
            axiosClient.put(`region/${region.id}`,{name:result.value.region})
            .then(({data})=>{
              Swal.fire(
                  'Good job!',
                  'la région a été modifier avec succès',
                  'success'
              ) 
              getAllRegions()
            })
            .catch(err => console.log(err))
          })
 }
  // ------------ Hanldle update region -----------------

  //------------- Handle delete region ------------------
  const handleDeleteRegion = (idRegion) => {
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
          axiosClient.delete(`/region/${idRegion}`)
            .then(({data})=>{
              Swal.fire(
                'Deleted!',
                // 'Your file has been deleted.',
                'success'
              )
              getAllRegions()
          })
      }
    })
  }
  //------------- Handle delete region ------------------

  return (
    <>
      <Breadcrumb pageName="Régions" />

      {/* {loading ? <Loader/> :  */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
         <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
            <h4 className="text-xl font-semibold text-black dark:text-white">Tous les Régions</h4>
            {/* <button className='text-white bg-meta-3 px-5 py-2  lg:px-6 lg:py-3 rounded-md flex items-center gap-1 ' onClick={()=>handleAddRegion()}>
                <IoMdAddCircle className='w-5 h-5 lg:w-6 lg:h-6'/> <span>Ajouter un nouveau Régions</span>   
            </button> */}
            <button className='text-white bg-meta-3 px-5 py-2  lg:px-6 lg:py-3 rounded-md flex items-center gap-1 ' onClick={()=>handleAddRegion()}>
            <IoMdAddCircle className='w-5 h-5 lg:w-6 lg:h-6'/> <span>Ajouter un nouveau Régions</span>   
      </button>
         </div>

         <div className="grid grid-cols-3 border-t justify-between w-full  border-stroke py-4.5 px-4 dark:border-strokedark  md:px-6 2xl:px-7.5">
            <div className="flex items-cente">
               <p className="font-medium">ID</p>
            </div>
            <div className="items-center sm:flex justify-center">
               <p className="font-medium">Région</p>
            </div>
            <div className="flex items-center justify-end">
               <p className="font-medium">Action</p>
            </div>
         </div>
          { loading ?<div className='max-h-[200px] flex items-center justify-center overflow-y-hidden'> <Loader/></div>  :
            regions.map((region,index) => {
              return (
              <div key={index}  className="grid grid-cols-4 md:grid-cols-3 border-t border-stroke py-4.5 px-4 dark:border-strokedark  md:px-6 2xl:px-7.5">
                  <div className="">
                      <p className="text-sm text-black dark:text-white">{region.id}</p>
                  </div>
                  <div className="col-span-2 md:col-span-1  flex lg:justify-center">
                      <p className="text-sm text-black  dark:text-white">{region.name}</p>
                  </div>
                  <div className="flex justify-end items-center gap-1 lg:gap-3">
                      <button className='bg-meta-3 text-white rounded-md px-2 text-[14px] lg:px-3 py-2 lg:py-2' onClick={()=> handleUpdateRegion(region)}><FaEdit className=''/> </button>
                      <button className='bg-meta-7 text-white rounded-md px-2 text-[14px] lg:px-3 py-2 lg:py-2' onClick={()=>handleDeleteRegion(region.id)}> <RiDeleteBin5Fill /> </button>
                  </div>
              </div>
              )
            })
          }

      </div>
      {/* } */}
    </>
  )
}

export default Regions;