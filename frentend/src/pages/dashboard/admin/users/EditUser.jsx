import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../../../compenents/Breadcrumb";
import  { axiosClient }  from '../../../../AxiosClient';
import config from "../../../../config";
import {useStateContext}  from '../../../../contexts/ContextProvider';

export default function EditUser() {
   const {id} = useParams();
   const {setUser} = useStateContext();
   const [photo,setPhoto]  = useState(null);
   const [newPhoto,setNewPhoto] = useState(null);
   const [nom,setNom] = useState();
   const [prenom,setPrenom] = useState();
   const [nomAffichage,setNomAff] = useState();
   const [email,setEmail] = useState();
   const [phone,setPhone] = useState();

   const [selectImage,setSelectImage] = useState(null);

   const navigate = useNavigate();
   // handle Add User 
   const handleUpdateUser = ()=>{

      const payload = new FormData();

      payload.append('fname',nom)
      payload.append('lname',prenom)
      payload.append('email',email)
      payload.append('tele',phone)
      payload.append('id_admin',null)
      payload.append('photo',newPhoto)

      axiosClient.post('/admin/user/update/'+id,payload,{
         headers:{
            'Content-Type':'multipart/form-data'
         }
      }).then(({data}) => {
         if (data.resultat === 'success') {
            return navigate('/admin/users');
         }
      }).catch((err) => {
         console.log(err)
      });
   }

   // hanle upload photo
   const handlePhotoChange = (event)=> {
      const selectFile = event.target.files[0];

      if (selectFile) {
         setNewPhoto(selectFile)
         setPhoto(selectFile)
         const reader = new FileReader();
         reader.onload = (e) => {
            setSelectImage(e.target.result)
         }
         reader.readAsDataURL(selectFile)
      } else {
         setSelectImage(null)
      }
   }

   // fetch User
   useEffect(() => {
      axiosClient.get('/admin/user/edit/'+id)
         .then(({data})=>{
            setNom(data.lname);
            setPrenom(data.fname);
            setEmail(data.email);
            setPhone(data.tele);
            setNomAff(null);
            setPhoto(data.photo)
         })
   },[id])

   return (
      <>

      <Breadcrumb pageName="Utilisateurs" action='Update'/>

      <div className="flex flex-col gap-9 mb-5">
         <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b  border-stroke py-4 px-6.5 dark:border-strokedark">
               <h3 className="font-medium text-black dark:text-white">Profile</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6.5">

               <div>
                  <label htmlFor="" className="mb-3 text-black block dark:text-white">Prénom</label>
                  <input
                  type="text"
                  placeholder="Prénom"
                  value={prenom}
                  onChange={(e)=>setPrenom(e.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                   disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
               </div>   
               <div>
                  <label htmlFor="" className="mb-3 text-black block dark:text-white">Nom</label>
                  <input
                  type="text"
                  placeholder="Nom"
                  value={nom}
                  onChange={(e)=>setNom(e.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                   disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
               </div>   
               <div>
                  <label htmlFor="" className="mb-3 text-black block dark:text-white">Telephone</label>
                  <input
                  type="text"
                  value={phone}
                  onChange={(e)=>setPhoto(e.target.value)}
                  placeholder="Telephone"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                   disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
               </div>   
               <div>
                  <label htmlFor="" className="mb-3 text-black block dark:text-white">Nom D'affichage</label>
                  <input
                  type="text"
                  placeholder="Nom D'affichage"
                  value={nomAffichage}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                   disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
               </div>   
               <div className="md:col-span-2">
                  <label htmlFor="" className="mb-3 text-black block dark:text-white">Email</label>
                  <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default
                   disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
               </div>   


            </div>
               
         </div>

         {/*Start Upload Photo */}
         <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b  border-stroke py-4 px-6.5 dark:border-strokedark">
               <h3 className="font-medium text-black dark:text-white">Upload Photo</h3>
            </div>

            <div
                    id="FileUpload"
                    className="relative block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                  >
                     
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                      onChange={handlePhotoChange}
                    />
                  {
                     !photo && (
                        <div className="flex flex-col items-center justify-center space-y-3">
                        <span className="flex h-10 w-10  items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                              fill="#3C50E0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                              fill="#3C50E0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                              fill="#3C50E0"
                            />
                          </svg>
                        </span>
                        <p>
                          <span className="text-primary">Click to upload</span> or
                          drag and drop
                        </p>
                        <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                        <p>(max, 800 X 800px)</p>
                      </div>
                     )
                  }

                    {photo  && (
                        <div className="overflow-hidden  flex  items-center justify-center overflow-hidden">
                           <img 
                            className="block w-[150px] h-[150px]   rounded-[20px] md:w-[250px] md:h-[250px] "
                           // src={`${config.urlPackend}/uploads/${photo}`} alt="" />
                           src={selectImage?selectImage:`${config.urlPackend}/uploads/${photo}`} alt="" />
                        </div>
                    )}

            </div>
         </div>
         {/*End Upload Photo */}

         <div className="flex justify-end ">
               <button className="bg-meta-3 text-white font-semibold py-2 rounded-md px-[50px]"
               onClick={handleUpdateUser}
               >
                  Update
               </button>
         </div>


      </div>
      
      </>
   )
}