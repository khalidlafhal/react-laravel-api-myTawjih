

import React, { useEffect, useState } from 'react'
import { IoMdAddCircle } from 'react-icons/io';
import Swal from 'sweetalert2';
import { axiosClient } from '../../../AxiosClient';

function AddPack({getAllPacks}) {
   const [bacs,setListBacs] = useState('');
   const checkedBacs = [];

   useEffect(()=>{
      getAllBacs()
   },[])

   const handleCheckboxForAddBacs = (event) => {
      const idBac = event.target.value;
      const index = checkedBacs.indexOf(idBac);
      if (index !== -1) {
         checkedBacs.splice(index,1)
      } else {
         checkedBacs.push(idBac)
      }
      console.log(checkedBacs);
   }

   //Get all bacs And all Packs
   const getAllBacs = async ()=>{
      await axiosClient.get('/pack/bacs')
         .then(({data})=>{
            setListBacs(data)
         })
   }
//------------ Hanldle add Ville -----------------
   const handleAddPack = () => {
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
              <div class="card-header bg-meta-3 py-3 rounded-t-md">
                  <h4 class="mb-0 text-center font-bold">
                   Ajouter une Pack</h4>
              </div>
              <div class="card-body  p-5">
                  <input type="hidden" class="form-control" id="regionId" value=''>
                  <div class="row">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">
                          <div class="form-group flex flex-col gap-2">
                              <label class="form-label  text-[16px]">Domaine :</label>
                              <input type="text" id="domaineP"  placeholder='Domaine' class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                              disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                          </div>
                          <div class="form-group flex flex-col gap-2">
                              <label  class="form-label  text-[16px]">Abréviation  :</label>
                              <input type="text" id="domaineAbreviationP" placeholder='Abréviation' class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                              disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                          </div>
                          <div class="form-group flex flex-col gap-2">
                              <label class="form-label  text-[16px]"> Avantage 1 :</label>
                              <input type="text" id="avantage1P" placeholder='Avantage 1' class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                              disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                          </div>
                          <div class="form-group flex flex-col gap-2">
                              <label  class="form-label  text-[16px]">Avantage 2 :</label>
                              <input type="text" id="avantage2P" placeholder='Avantage 2 ' class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                              disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                          </div>
                          <div class="form-group flex flex-col gap-2">
                              <label  class="form-label  text-[16px]">Prix :</label>
                              <input type="number" id="prixPack" placeholder='Prix' class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                              disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                          </div>
                          <div class="form-group flex flex-col gap-2">
                              <label for="student-name" class="form-label  text-[16px]">Color :</label>
                              <input type="color"  id="color" class='w-full h-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3  block px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                              disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                          </div>
                      </div>
                     
                      <div class='mt-5'>
                        <label for="student-name" class="form-label">Bacs:</label>
                        <hr  class='block my-2 h-[2px] bg-body'>
                      </div>
                      <div class='mt-5 justify-end grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3'>
                           ${bacs}
                      </div>
                  </div>
              </div>
              </div>
          </div> `,
          customClass: {
            container: 'sweet-alert-container' // Add your custom class
          },
          didOpen: () => {
            // Adjust the z-index to ensure it's above the sidebar
            document.querySelector('.sweet-alert-container').style.zIndex = '9999';
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach((checkbox)=>{
               checkbox.addEventListener('change',(event)=>{
                  handleCheckboxForAddBacs(event)
               });
            })
          },
         showCloseButton: true,
         showConfirmButton: true,
         confirmButtonText: 'Ajouter',
         confirmButtonColor: '#1862ab',
         allowOutsideClick: false,
         preConfirm:()=>{
            const domaineP = Swal.getPopup().querySelector('#domaineP').value;
            const domaineAbreviationP = Swal.getPopup().querySelector('#domaineAbreviationP').value;
            const avantage1P = Swal.getPopup().querySelector('#avantage1P').value;
            const avantage2P = Swal.getPopup().querySelector('#avantage2P').value;
            const prixPack = Swal.getPopup().querySelector('#prixPack').value;
            const color = Swal.getPopup().querySelector('#color').value;
            if (domaineP == '' || domaineAbreviationP ==  '' || avantage1P == '' || prixPack == '' || 
               color == '') {
              Swal.showValidationMessage(`Tous les champs sont obligatoires`)
            } else if (checkedBacs.length == 0) {
                  Swal.showValidationMessage(`Choisissez au moins une filiere`)
            } 
            return {domaineP,domaineAbreviationP,avantage1P,avantage2P,prixPack,color}

         }
         }).then((result) =>{
            const payload = {
               domaineP:result.value.domaineP,
               domaineAbreviationP:result.value.domaineAbreviationP,
               avantage1P:result.value.avantage1P,
               avantage2P:result.value.avantage2P,
               prixPack:result.value.prixPack,
               color:result.value.color,
               bacs:checkedBacs
            }
            axiosClient.post('/pack',payload)
            .then(({data})=>{
              Swal.fire(
                  'Good job!',
                  'Pack été ajoutée avec succès',
                  'success'
              ) 
              getAllPacks()
            })
            .catch(err => console.log(err))
         })
   }
//------------ Hanldle add Ville -----------------
  return (
    <>
      <button onClick={handleAddPack} className='text-white bg-meta-3 px-5 py-2  lg:px-6 lg:py-3 rounded-md flex items-center gap-1 '>
           <IoMdAddCircle className='w-5 h-5 lg:w-6 lg:h-6'/> <span>Ajouter un nouveau Pack</span>   
       </button>
    </>
  )
}

export default AddPack