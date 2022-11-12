import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/LoginContext'

const Checkout = () => {
    const {isauth,logout,data,setdata,infor} = useContext(AuthContext)
 const[info,setinfo] = useState({post_code:"" , country:""})


const change=(e)=>{
   const {name,value} = e.target
       // const val = type==="checkbox"? checked:value;
        setinfo({...info,[name]:value})
}

console.log(info)

 const {post_code,country} = info
    if(isauth===false){
     return   <Navigate to="/Login" />
    }
  return (
    <div style={{width:"80%",margin:"auto"}}>
      <div style={{display:"grid" ,gridTemplateColumns:"50% 50%" }} >
        <div><p>Shipping Address</p>
        <p>Please enter your shipping address</p>
        
        <input style={{width:"80%",padding:"0 5px",margin:"10px"}} disabled={true} value={infor.First_Name} /> <br/>
        <input style={{width:"80%",padding:"0 5px",margin:"10px"}}  disabled={true} value={infor.Last_Name} /> <br/>
        <input style={{width:"80%",padding:"0 5px",margin:"10px"}}  onChange={change} name="post_code" value={post_code} placeholder='post code' /> <br/>
        <input style={{width:"80%",padding:"0 5px",margin:"10px"}}  onChange={change} name="country"  value={country} placeholder='country' /> <br/>

        </div>
        <div><p>Shipping Method</p> <p>Please select your preferred shipping method.</p>
        <hr/> <input style={{marginLeft:"-30%"}} type="radio" checked="checked" /> <label>Express</label>
        <p>2-4 business days delivery time</p>
        <hr/>
        <p>PACKAGING OPTIONS</p>
        <div style={{display:"grid",gridTemplateColumns:'50% 50%'}} ><div><input style={{marginLeft:""}} type="radio"  /><label>Fashion World Packaging</label>
        <img style={{width:"50%"}} src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_mytheresa_2x.jpg" alt="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_mytheresa_2x.jpg" /></div>
        <div><input style={{marginLeft:""}} type="radio" checked="checked"  /><label>Eco Packaging</label> <img style={{width:"50%"}} src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_brown_2x.jpg" alt="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_brown_2x.jpg" /></div></div>
        

    <Link to="/Payment"><button disabled={info.post_code==="" || info.country==""}  style={{marginTop:"20px",backgroundColor:'black',color:"white"}}>Proceed to checkout</button></Link> 
        </div>
      </div>
    </div>
  )
}

export default Checkout
