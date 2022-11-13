import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/LoginContext'

const Wishlist = () => {
  const[elem,setelem] = useState([])
    const {product,setproduct,wishlist,bag,setwishlist,setbag} = useContext(AuthContext)
    //console.log({wishlist})

useEffect(()=>{
setelem(wishlist)
},[setelem])
//console.log(elem)

  const handlebag=(idToRemove)=>{ 
   
    const BookById = wishlist.find(book=>book.id === idToRemove);
   //console.log(BookById)
   setbag([...bag,BookById])
  
    const wishlistitem = wishlist.filter((item) => item.id !== idToRemove);
    setelem(wishlistitem)
    setwishlist(wishlistitem)
   // console.log(wishlistitem)
  }

  const handleremove=(idToRemove)=>{
    const wishlistitem = wishlist.filter((item) => item.id !== idToRemove);
    setelem(wishlistitem)
    setwishlist(wishlistitem)

  }
  console.log(wishlist)
  // console.log(bag)

if(wishlist.length===0){
  return <div style={{width:"80%",margin:"auto"}}> <p>THERE ARE NO PRODUCTS ON YOUR WISHLIST.</p>
  <p>Check out our new arrivals and start adding to your wishlist now!</p>
  <Link to="/">  <button  style={{backgroundColor:"black",padding:"5px 10px",color:"white"}}>Shop New Arrivals</button> </Link></div>
}

  return (
    <div style={{width:"80%",margin:"5% auto",display:"grid",gridTemplateColumns:'30% 30% 30%'}}>
      {wishlist?.map((item)=>{
        return <div key={item.id} > <img style={{width:"60%"}} src={item.images} alt={item.name}/>
        <p>{item.title}</p> <h5>{item.name}</h5> <h2>₹ {item.price}</h2> <button  style={{backgroundColor:"black",padding:"5px 10px",color:"white"}} onClick={()=>handlebag(item.id)}>Move To Bag</button> <br/>
        <button  style={{backgroundColor:"black",padding:"5px 10px",color:"white" ,marginTop:"10px"}} onClick={()=>handleremove(item.id)}>Remove</button>  </div>
      })}
    </div>
  )
}

export default Wishlist
