

import {createContext, useContext, useState} from 'react';


const StateContext = createContext({
   user:null,
   token:null,
   notification:null,
   setNotification:()=>{},
   setToken:()=>{},
   setUser:()=>{}
});

export const ContextProvider = ({children}) => {
   const [user,setUser] = useState({});
   const [notification,_setNotification] = useState('');
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

   }}>
      {children}
   </StateContext.Provider>

}

export const useStateContext = ()=> useContext(StateContext);