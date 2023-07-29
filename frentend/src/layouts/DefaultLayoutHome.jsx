
import {Header} from '../compenents/header/Header';
import {Footer} from '../compenents/footer/Footer';
import { Outlet } from 'react-router-dom';

export default function DefaultLayoutHome() {

   return (
      <>
         <Header />

         <Outlet />
         
         <Footer />
      </>
   )
}