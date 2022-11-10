import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/LoginContext'

const Signup = () => {
     const[formstate,setformstate] = useState({First_Name:"", Last_Name:"",Email:"",Password:""})
 const  {First_Name , Last_Name,Email,Password} = formstate
    const {isauth} = useContext(AuthContext)
   // console.log(isauth)


    const change=(e)=>{
        const {name,value,type,checked} = e.target
        const val = type==="checkbox"? checked:value;
        setformstate({...formstate,[name]:val})
    }

     
const submit=(e)=>{
  e.preventDefault()
console.log(formstate)

}

  return (
    <div style={{display:"grid" ,gridTemplateColumns:"50% 50%" }}>
        <div><h2>CREATE AN ACCOUNT</h2> <p>Please enter the following information to create your account.</p> <form onSubmit={submit} >
             <div style={{display:"flex",marginLeft:"150px"}}><input onChange={change} type="radio"checked={true} value="Ms" /><label>Ms</label> <input onChange={change}  type="radio" value="Mrs" /><label>Mrs</label><input onChange={change}  type="radio" value="Mr" /><label>Mr</label></div>
         <input onChange={change} type="text" value={First_Name} name="First_Name" placeholder='first name' style={{width:"300px"}}/><br/>
         <input onChange={change}  type="text" value={Last_Name} name="Last_Name" placeholder='last name' style={{width:"300px"}}/><br/>
         <input onChange={change} type="email" value={Email} name="Email"  placeholder='email address' style={{width:"300px"}}/><br/>
         <input onChange={change}  type="password" value={Password} name="Password"  placeholder='password' style={{width:"300px"}}/><br/>
         {/* <input onChange={change}    placeholder='confirm password' style={{width:"300px"}}/> <br/> */}
          <input name="Agree" value="formstate.Agree" onChange={change}  type="checkbox" /><p>From now on I will receive the Mytheresa Newsletter with selected fashion offers. If I do not wish to receive the newsletter, I can unsubscribe at any time free of charge at privacy@mytheresa.com.</p>
        <p>I agree that Mytheresa may insert analytical web beacons into the newsletter and create a personalized user profile based on my purchase and usage behavior, including sending a notification when I have placed something in the shopping cart. Further details can be found in our Privacy Policy, clause 5. I understand that I can revoke my consent at any time by emailing privacy@mytheresa.com.</p> <input  type="submit"value='REGISTER'/>
        </form></div>
        <div><h2>Already Registered</h2>
        <p>If you have an account with us, please log in.</p> <form><input type="text" placeholder='email address'/> <br/><input type="password" placeholder='password' /><br/>
        <button>LOGIN</button></form></div>
      
    </div>
  )
}

export default Signup
