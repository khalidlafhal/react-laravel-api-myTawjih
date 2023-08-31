
import axios from 'axios';

export const axiosClient =  axios.create({
      baseURL:'http://localhost:8007/api'
})

axiosClient.interceptors.request.use((config) => {
   const token = localStorage.getItem('ACCESS_TOKEN') ;

   config.headers.Authorization = `Bearer ${token}`;

   return config;
})



axios.interceptors.response.use(
   (response) => {
     return response;
   },
   (error) => {
     try {
       const { response } = error;
 
       if (response.status === 401) {
         localStorage.removeItem('ACCESS_TOKEN');
       }
 
       throw error;
     } catch (err) {
       // Handle the error here, if needed
       console.error('An error occurred during the Axios interceptor:', err);
       throw err; // Re-throw the error to keep the chain of interceptors intact
     }
   }
 );
 