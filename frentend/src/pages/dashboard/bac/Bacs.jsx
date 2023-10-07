
import React, { useState } from 'react'
import Breadcrumb from '../../../compenents/Breadcrumb';
import { IoMdAddCircle } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { axiosClient } from '../../../AxiosClient';
import Loader from '../../../common/Loader/index';

function Bacs() {
  const [bacs, setBacs] = useState([])
  const [loading,setLoading] = useState(true)
//Get all filiers
 const getAllFilliers = async()=>{
  setLoading(true)
  await  axiosClient.get('/bac')
    .then(({data})=> {
      setBacs(data)
      setLoading(false)
    })
 }
 useState(()=>{
  getAllFilliers()
 },[])
//Get all filiers
// ------------ Hanldle add Ville -----------------
const handleAddBac = () => {
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
              <div class="card-header bg-meta-3 py-3 ">
                  <h4 class="mb-0 text-center font-medium">
                  Ajouter une filière</h4>
              </div>
              <div class="card-body  p-5">
                  <input type="hidden" class="form-control" id="regionId" value=''>
                  <div class="row">
                      <div class="grid grid-col-1 md:grid-cols-2 gap-3">
                          <div class="form-group flex flex-col gap-2">
                              <label  class="font-semibold  text-[18px]">Filière en français :</label>
                              <input type="text" id="sector" class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                              disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                          </div>
                          <div class="form-group flex flex-col gap-2">
                              <label class="font-semibold text-[18px]">: الشعبة بالعربية  </label>
                              <input type="text" id="sectorFR" class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                              disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                          </div>
                          <div class="form-group flex flex-col gap-2">
                              <label class="font-semibold text-[18px]">abbreviation :    </label>
                              <input type="text" id="abbreviation" class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
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
         showCloseButton: true,
         showConfirmButton: true,
         confirmButtonText: 'Ajouter',
         confirmButtonColor: '#1862ab',
         allowOutsideClick: false,
         preConfirm:()=>{
          const sector = Swal.getPopup().querySelector('#sector').value;
          const sectorFR = Swal.getPopup().querySelector('#sectorFR').value;
          const abbreviation = Swal.getPopup().querySelector('#abbreviation').value;
          if (sector == '' || sectorFR == '' || abbreviation == '') {
            Swal.showValidationMessage(`Tous les champs sont obligatoires`)
          }
          return {sector:sector,sectorFR:sectorFR,abbreviation:abbreviation};
         }
         }).then((result)=>{
            
            axiosClient .post('/bac',{sector:result.value.sector,sectorFR:result.value.sectorFR,abbreviation:result.value.abbreviation})
            .then(({data})=>{
              Swal.fire(
                  'Good job!',
                  'la filiere a été ajoutée avec succès',
                  'success'
              ) 
              getAllFilliers()
            })
            .catch(err => console.log(err))
         })
}
// ------------ Hanldle Update Ville -----------------
const handleUpdateBac =  (bac) => {
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
             <div class="card-header bg-meta-3 py-3 ">
                 <h4 class="mb-0 text-center font-medium">
                 Ajouter une filière</h4>
             </div>
             <div class="card-body  p-5">
                 <input type="hidden" class="form-control" id="regionId" value=''>
                 <div class="row">
                     <div class="grid grid-col-1 md:grid-cols-2 gap-3">
                         <div class="form-group flex flex-col gap-2">
                             <label  class="font-semibold  text-[18px]">Filière en français :</label>
                             <input type="text" id="sector" value="${bac.sector}" class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                             disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                         </div>
                         <div class="form-group flex flex-col gap-2">
                             <label class="font-semibold text-[18px]">: الشعبة بالعربية  </label>
                             <input type="text" id="sectorFR" value="${bac.sectorFR}" class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                             disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                         </div>
                         <div class="form-group flex flex-col gap-2">
                             <label class="font-semibold text-[18px]">abbreviation :    </label>
                             <input type="text" id="abbreviation" value="${bac.abbreviation}" class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
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
        showCloseButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Modifier',
        confirmButtonColor: '#1862ab',
        allowOutsideClick: false,
        preConfirm:()=>{
         const sector = Swal.getPopup().querySelector('#sector').value;
         const sectorFR = Swal.getPopup().querySelector('#sectorFR').value;
         const abbreviation = Swal.getPopup().querySelector('#abbreviation').value;
         if (sector == '' || sectorFR == '' || abbreviation == '') {
           Swal.showValidationMessage(`Tous les champs sont obligatoires`)
         }
         return {sector:sector,sectorFR:sectorFR,abbreviation:abbreviation};
        }
        }).then((result)=>{
           
           axiosClient .put(`/bac/${bac.idBac}`,{sector:result.value.sector,sectorFR:result.value.sectorFR,abbreviation:result.value.abbreviation})
           .then(({data})=>{
             Swal.fire(
                 'Good job!',
                 'la filiere a été modifier avec succès',
                 'success'
             ) 
             getAllFilliers()
           })
           .catch(err => console.log(err))
        })
}
// ------------ Hanldle add Bac -----------------

// ------------ Hanldle Update Bac -----------------


  //------------- Handle delete region ------------------
  const handleDeleteBac = (idBac) => {
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
      axiosClient.delete(`/bac/${idBac}`)
      .then(({data})=>{
        Swal.fire({
          icon:'success',
          text:'la filiere a été supprimier avec succès'
        }

        )
        getAllFilliers()
      })
     }
   })
 }
 //------------- Handle delete region ------------------
  return (
    <>
      <Breadcrumb pageName="Bac" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
         <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
            <h4 className="text-xl font-semibold text-black dark:text-white">Tous les Branche</h4>
            <button className='text-white bg-meta-3 px-5 py-2  lg:px-6 lg:py-3 rounded-md flex items-center gap-1 ' onClick={handleAddBac}>
                <IoMdAddCircle className='w-5 h-5 lg:w-6 lg:h-6'/> <span>Ajouter un nouveau bac</span>   
            </button>
         </div>

         <div className="grid grid-cols-4 border-t justify-between w-full  border-stroke py-4.5 px-4 dark:border-strokedark  md:px-6 2xl:px-7.5">
            <div className="flex items-cente">
               <p className="font-medium">ID</p>
            </div>
            <div className="items-center sm:flex justify-center">
               <p className="font-medium">Filière en AR</p>
            </div>
            <div className="items-center sm:flex justify-center">
               <p className="font-medium">Filière en FR</p>
            </div>
            <div className="flex items-center justify-end">
               <p className="font-medium">Action</p>
            </div>
         </div>
        {loading ? <div className='max-h-[200px] flex items-center justify-center overflow-y-hidden'>  <Loader/> </div> :
          bacs.map((bac,index) => {
            return (
              <div key={index} className="grid grid-cols-5 md:grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark  md:px-6 2xl:px-7.5">
              <div className="">
                  <p className="text-sm text-black dark:text-white">{bac.idBac}</p>
              </div>
              <div className="flex md:justify-center">
                  <p className="text-sm text-black dark:text-white">{bac.sector}</p>
              </div>
              <div className="col-span-2 md:col-span-1  justify-end  flex md:justify-center">
                  <p className="text-sm text-black  dark:text-white">{bac.sectorFR}</p>
              </div>
              <div className="flex justify-end items-center gap-1 lg:gap-3">
                  <button className='bg-meta-3 text-white rounded-md px-2 text-[14px] lg:px-3 py-2 lg:py-2' onClick={()=>handleUpdateBac(bac)}><FaEdit className=''/> </button>
                  <button className='bg-meta-7 text-white rounded-md px-2 text-[14px] lg:px-3 py-2 lg:py-2' onClick={() => handleDeleteBac(bac.idBac)}> <RiDeleteBin5Fill /> </button>
              </div>
          </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Bacs;