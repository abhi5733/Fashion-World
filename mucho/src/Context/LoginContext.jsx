
 import React from 'react'
import { useState } from 'react'
 import { createContext } from 'react'
 export const AuthContext = createContext()
 const LoginContext = ({children}) => {
  const[isauth,setisauth] = useState(false)

       const value= {isauth}
   return (
     <AuthContext.Provider value={value} >
        {children}
     </AuthContext.Provider>
   )
 }
 
 export default LoginContext
 