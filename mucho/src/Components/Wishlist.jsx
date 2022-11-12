import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/LoginContext'

const Wishlist = () => {
    const {product,setproduct,wishlist,bag,setwishlist,setbag} = useContext(AuthContext)
    console.log({wishlist})

if(wishlist.length===0){
  return <div style={{width:"80%",margin:"auto"}}> <p>THERE ARE NO PRODUCTS ON YOUR WISHLIST.</p>
  <p>Check out our new arrivals and start adding to your wishlist now!</p>
  <Link to="/">  <button>Shop New Arrivals</button> </Link></div>
}

  return (
    <div style={{width:"80%",margin:"5% auto",display:"grid",gridTemplateColumns:'30% 30% 30%'}}>
      {wishlist?.map((item)=>{
        return <div key={item.id} > <img style={{width:"60%"}} src={item.images} alt={item.name}/>
        <p>{item.title}</p> <h5>{item.name}</h5> <h2>₹ {item.price}</h2> <button>Move To Bag</button>  </div>
      })}
    </div>
  )
}

export default Wishlist
