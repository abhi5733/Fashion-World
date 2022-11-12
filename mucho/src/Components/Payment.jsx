import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Payment = () => {
  const[info,setinfo] = useState({Name:"",card:"",date:"",cvv:""})

 const {Name,card,date,cvv} = info ;

const onclick=(e)=>{
  const{name,value} = e.target
  setinfo({...info,[name]:value})
}
console.log(info)
const onSubmit=()=>{
  return
}

  return (
    <div style={{width:'80%',margin:"auto"}}>
      <p>Payment Method</p>
      <p>Please select your preferred payment method for this order.</p>

      <div style={{display:"grid",gridTemplateColumns:'50% 50%'}}>
 <div><input style={{marginLeft:'-80%'}}  type="radio" checked="checked" /><img style={{width:"50px",marginBottom:"-3%",marginLeft:"10px"}} src="https://cdn-icons-png.flaticon.com/512/1671/1671121.png" alt="https://previews.123rf.com/images/fokaspokas/fokaspokas1803/fokaspokas180300038/96765972-credit-card-icon-on-transparent-background-.jpg" /> <br/>
 <p style={{marginLeft:'-60%'}}>Immediate Shipping</p></div> <div><img style={{width:"100%",height:"70px"}}src="https://help.zazzle.com/hc/article_attachments/360023193074/payment_Capture.JPG" alt="https://tl.vhv.rs/dpng/s/514-5143969_credit-card-logos-png-transparent-png.png" />
 <p style={{marginLeft:"-15%"}}>Name On Card</p>
  <input onChange={onclick} name="Name" type="text" value={Name} /> <br/> <p style={{marginLeft:"-10%"}}>Credit Card Number</p> 
  <input onChange={onclick} id="Cardnumber" value={card} name="card" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx"  /> <br/> <p style={{marginLeft:"-15%"}}>Expiration Date</p>   <input onChange={onclick} value={date} type="number" name="date" id="LastName" placeholder="DD/YY" />  <br/> <p style={{marginLeft:"-25%"}}>CVC</p> 
  <input value={cvv} onChange={onclick} name="cvv" type="number" placeholder='CVC'/> </div>
      </div>
      <hr/>
     <Link to="/Checkout">  <button style={{float:"left"}}>Back To Delivery</button> </Link>
     <Link to="/Checkout2" >   <button disabled={info.Name==""||info.cvv==""||info.card==""||info.date==""} style={{float:"right"}}>Proceed To checkout</button> </Link>
    </div>
  )
}

export default Payment
