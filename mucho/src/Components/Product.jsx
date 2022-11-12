import React, { useContext } from 'react'
import { AuthContext } from '../Context/LoginContext'
import Footer from './Footer'

const Product = () => {
    const {product,setproduct,wishlist,bag,setwishlist,setbag} = useContext(AuthContext)
    
    //console.log(product)
//console.log(wishlist)

    const wishlists=()=>{
        setwishlist([...wishlist,product])
        alert("product added to wishlist")
    }
// console.log(wishlist)
     const bags=()=>{
        setbag([...bag,product])
        alert("product added to bag")
     }
     console.log(bag)
    return (
    <div style={{width:'80%',margin:"50px auto"}}>
      <div style={{display:"grid",gridTemplateColumns:'50% 50%'}}>
   <div><img style={{width:'80%'}} src={product.images} alt={product.name} /></div>
   <div><h2>{product.title}</h2>
   <p>{product.name}</p>
   <p> ₹ : {product.price}</p>
   <button onClick={wishlists} style={{marginTop:'20px',backgroundColor:"black",color:"white",padding:"5px 10px",cursor:"pointer"}}>ADD TO WISHLIST</button> <br/>
   <button onClick={bags} style={{marginTop:'20px',backgroundColor:"black",color:"white",padding:"5px 10px",cursor:"pointer"}}>ADD TO BAG</button></div>

      </div>
      <Footer/>
    </div>
  )
}

export default Product
