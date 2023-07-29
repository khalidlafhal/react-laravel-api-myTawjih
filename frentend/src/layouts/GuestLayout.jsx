import { Outlet } from "react-router-dom";
import { Footer } from "../compenents/footer/Footer";
import { Header } from "../compenents/header/Header";


export default function GuestLayout() {

   return (
      <>
      <Header/>
         <Outlet/>
      <Footer/>
      </>
   )
}