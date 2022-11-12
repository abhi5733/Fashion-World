
 import React from 'react'
import { useState } from 'react'
 import { createContext } from 'react'
 export const AuthContext = createContext()
 const LoginContext = ({children}) => {
  const[isauth,setisauth] = useState(false) 
  const[infor,setinfor] = useState([]) // signup information
 const [data,setdata] = useState([])  
 const[product,setproduct] = useState([])//for single product 
 const[wishlist,setwishlist] = useState([])
 const[bag,setbag] = useState([])

  const logout =()=>{
    return setisauth(false)
   }

       const value= {infor,setinfor,wishlist,setwishlist,bag,setbag,isauth,setisauth,logout,data,setdata,product,setproduct}


     
   return (
     <AuthContext.Provider value={value} >
        {children}
     </AuthContext.Provider>
   )
 }
 
 export default LoginContext
 