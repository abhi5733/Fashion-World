import React from 'react'

const Signup = () => {
  return (
    <div style={{display:"grid" ,gridTemplateColumns:"50% 50%" }}>
        <div><h2>CREATE AN ACCOUNT</h2> <p>Please enter the following information to create your account.</p> <form> <div style={{display:"flex",marginLeft:"150px"}}><input type="radio" value="Ms" /><label>Ms</label> <input type="radio" value="Mrs" /><label>Mrs</label><input type="radio" value="Mr" /><label>Mr</label></div> <input placeholder='first name' style={{width:"300px"}}/><br/><input placeholder='last name' style={{width:"300px"}}/><br/><input placeholder='email address' style={{width:"300px"}}/><br/><input placeholder='password' style={{width:"300px"}}/><br/><input placeholder='confirm password' style={{width:"300px"}}/> <br/> <input type="checkbox" /><p>From now on I will receive the Mytheresa Newsletter with selected fashion offers. If I do not wish to receive the newsletter, I can unsubscribe at any time free of charge at privacy@mytheresa.com.</p>
        <p>I agree that Mytheresa may insert analytical web beacons into the newsletter and create a personalized user profile based on my purchase and usage behavior, including sending a notification when I have placed something in the shopping cart. Further details can be found in our Privacy Policy, clause 5. I understand that I can revoke my consent at any time by emailing privacy@mytheresa.com.</p> <input  type="submit"value='REGISTER'/>
        </form></div>
        <div><h2>Already Registered</h2>
        <p>If you have an account with us, please log in.</p> <form><input type="text" placeholder='email address'/> <br/><input type="password" placeholder='password' /><br/>
        <button>LOGIN</button></form></div>
      
    </div>
  )
}

export default Signup
