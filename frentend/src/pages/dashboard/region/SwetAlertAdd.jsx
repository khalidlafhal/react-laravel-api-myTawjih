




import React from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import Swal from 'sweetalert2';

function SwetAlertAdd() {
   const handleAddRegion = () => {
      Swal.fire({
         title: '  ',
         width: '600px',
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
                     <input type="hidden" class="form-control" id="regionId" value=''>
                     <div class="row">
                         <div class="col-md-12">
                             <div class="form-group flex flex-col gap-2">
                                 <label for="student-name" class="form-label text-[16px]">Région :</label>
                                 <input type="text" placeholder='Région' class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
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
            })
   }
   
  return (
    <>
      <button className='text-white bg-meta-3 px-5 py-2  lg:px-6 lg:py-3 rounded-md flex items-center gap-1 ' onClick={()=>handleAddRegion()}>
         <IoMdAddCircle className='w-5 h-5 lg:w-6 lg:h-6'/> <span>Ajouter un nouveau Régions</span>   
      </button>
    
    </>
  )
}

export default SwetAlertAdd