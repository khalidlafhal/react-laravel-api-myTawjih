

import {createContext, useContext, useState} from 'react';


const StateContext = createContext({
   user:null,
   token:null,
   notification:null,
   websiteInfo:null,
   setNotification:()=>{},
   setToken:()=>{},
   setUser:()=>{},
   setWebsiteInfo:() =>{}
});

export const ContextProvider = ({children}) => {
   const [user,setUser] = useState({});
   const [notification,_setNotification] = useState({
      type:'',
      message:''
   });
   const [websiteInfo,setWebsiteInfo] = useState({});

   const [token,_setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

   // const setUser = (data)=>{
   //    if (user) {
   //       localStorage.removeItem('user');
   //    } else {
   //       _setUser(data)
   //       localStorage.setItem('user',data)
   //    }
   // }

   const setNotification = (message) => {
      _setNotification(message)
      setTimeout(()=>{
         setNotification('')
      },5000)
   }

   const setToken = (token)=>{
      _setToken(token);
      if (token) {
         localStorage.setItem('ACCESS_TOKEN',token)
      } else {
         localStorage.removeItem('ACCESS_TOKEN')
      }
   }

   return <StateContext.Provider value={{
      user,
      token,
      notification,
      setUser,
      setToken,
      setNotification,
      websiteInfo,
      setWebsiteInfo
   }}>
      
      {children}
   </StateContext.Provider>

}

export const useStateContext = ()=> useContext(StateContext);