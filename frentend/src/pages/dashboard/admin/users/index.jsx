import Breadcrumb from "../../../../compenents/Breadcrumb";
import UserOne from '../../../../assets/images/user/user-01.png';
import { Link } from "react-router-dom";
import {AiOutlineEdit, AiTwotoneDelete} from 'react-icons/ai';
import { axiosClient } from "../../../../AxiosClient";
import { useEffect, useState } from "react";
import config from "../../../../config";
import Swal from 'sweetalert2';
// import { useStateContext } from "../../../../contexts

export default function ListUser() {
  const [admins , setAdmins] = useState([]);

  useEffect(()=> {
    fetchUsers()
  },[])

  const fetchUsers = () => {
    axiosClient.get('/admin/listAdmins')
      .then(({data}) => {
          setAdmins(data.users)
          console.log(admins)
      })
      .catch( err => {
        console.log(err)
      })
  }

  // DELETE USER
  const hanldeDeleteUser = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosClient.delete(`/admin/deleteAdmin/${id}`)
        .then((rep)=>{

          Swal.fire(
            'Deleted!',
            // 'Your file has been deleted.',
            'success'
          )
          fetchUsers()

            // console.log(rep)
        }).catch(err => {
          console.log(err)
        })

      }
    })
    
  }

  

   return (
      <>
         <Breadcrumb pageName="Utilisateurs" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
        <h4 className="text-xl font-semibold text-black dark:text-white">
    
        </h4>

         <div> 
            <Link to='/admin/users/add-user'>
               <button className="bg-meta-3 text-white px-5 rounded-md
               py-2 font-bold 
               ">Create</button>
            </Link>
         </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">TÉLÉPHONE</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Actif</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Actions</p>
        </div>
      </div>
      {admins.map((user => {
        return (
          <div key={user.id} className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="overflow-hidden rounded-md">
                {/* <img src={UserOne} alt="Product" /> */}
                <img  className="h-12.5 w-15"
                  src={user.admin.photo ? config.urlPackend+'/uploads/'+user.admin.photo:UserOne} 
                  alt="Product" />
              </div>
              <p className="text-sm text-black dark:text-white">
                {user.admin.fname + " " + user.admin.lname}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">{user.email}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{user.admin.tele}</p>
          </div>
          <div className="col-span-1 flex items-center">
            
            


          <p>1</p>

          </div>
          <div className="col-span-1 flex items-center gap-3">
              <Link to={`/admin/users/${user.admin.id}`}><AiOutlineEdit   className="cursor-pointer h-5 w-5 text-meta-3"/></Link>
              <AiTwotoneDelete  onClick={()=>hanldeDeleteUser(user.admin.id)} className="cursor-pointer h-5 w-5 text-danger"/>
          </div>
        </div>
        )
      }))}




    </div>
      </>
   )

}