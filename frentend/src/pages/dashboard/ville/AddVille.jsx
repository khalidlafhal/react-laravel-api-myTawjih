

import React, { useEffect, useState } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import { axiosClient } from '../../../AxiosClient';
import Swal from 'sweetalert2';

function AddVille({getAllVilles}) {
    const [regions,setRegions] = useState([]);
   //GET ALL REGIONS

   // ------------ Hanldle add Ville -----------------
  const handleAddVille = () => {
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
                   Ajouter une Ville</h4>
              </div>
              <div class="card-body  p-5">
                  <input type="hidden" class="form-control" id="regionId" value=''>
                  <div class="row">
                      <div class="grid grid-cols-2 gap-3">
                          <div class="form-group flex flex-col gap-2">
                              <label for="student-name" class="form-label  text-[16px]">Ville :</label>
                              <input type="text" id="ville" placeholder='Ville' class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                              disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                          </div>
                          <div class="form-group flex flex-col gap-2">
                              <label for="student-name" class="form-label  text-[16px]">Région :</label>
                              <select   class='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                              disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' id="regions">                                 
                              </select>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
          </div>`,
          customClass: {
            container: 'sweet-alert-container' // Add your custom class
          },
          didOpen: () => {
            // Adjust the z-index to ensure it's above the sidebar
            document.querySelector('.sweet-alert-container').style.zIndex = '9999';
            const regionsDisplay = document.querySelector('#regions');
            regionsDisplay.innerHTML = '<option selected   key="0" value="0"> selectionez une region</option>'
            const getAllRegions = ()=>{
               axiosClient.get('/region')
                  .then(({data})=>{
                     regionsDisplay.innerHTML += data.map((r,index) =>  `<option key='${index+1}' value='${r.id}'> ${r.name} </option>`)
                  })
            }
            getAllRegions()

          },
         showCloseButton: true,
         showConfirmButton: true,
         confirmButtonText: 'Ajouter',
         confirmButtonColor: '#1862ab',
         allowOutsideClick: false,
         preConfirm: () => {
            const regionSelect = Swal.getPopup().querySelector('#regions').value;
            const ville = Swal.getPopup().querySelector('#ville').value;
            if (regionSelect == 0 || ville == '') {
              Swal.showValidationMessage(`Tous les champs sont obligatoires`)
            }  
            return {region:regionSelect,ville}
          }
         }).then((result)=>{
            axiosClient.post('/ville',{name:result.value.ville,idRegion:result.value.region})
              .then(({data})=>{
                Swal.fire(
                    'Good job!',
                    'la Ville a été ajoutée avec succès',
                    'success'
                ) 
                getAllVilles()
              })
              .catch(err => console.log(err))
        })
}
// ------------ Hanldle add Ville -----------------
  return (
   <button onClick={handleAddVille} className='text-white bg-meta-3 px-5 py-2  lg:px-6 lg:py-3 rounded-md flex items-center gap-1 '>
      <IoMdAddCircle className='w-5 h-5 lg:w-6 lg:h-6'/> <span>Ajouter un nouveau Ville</span>   
   </button>
  )
}

export default AddVille