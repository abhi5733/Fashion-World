 import React from 'react'
import { useEffect } from 'react'
 import axios from "axios"
import { useState } from 'react'
import Footer from './Footer'



 const WomenPoducts = () => {
  const[product,setproduct] = useState([])
  const[sort,setsort] = useState("desc")

//   const sorts=(data)=>{
//     return axios.get(`https://mocki.io/v1/1dadbe52-cbe4-4a08-981a-ca30cc474cc9/orderBy=${data}`)
//     .then((res)=> {setproduct(res.data.products)})
//     console.log(data)
// }
// https://mocki.io/v1/1dadbe52-cbe4-4a08-981a-ca30cc474cc9
    useEffect(()=>{
        axios.get(`https://63392f7e383946bc7fefa23b.mockapi.io/hi/abhi`,{
             params:{
                limit:10
            }
        })
        .then((res)=> {console.log(res.data[0].products) ; setproduct(res.data[0].products)})
    },[])
  
  
  
    return (
        <div>
            <select  defaultValue="none" name="cars"  id="cars">
  <option value="none"  disabled hidden>Select an Option</option>
  <option value="asc">Price Low To High</option>
  <option value="desc">Price High To Low</option>
            </select>

     <div style={{width:"80%",margin:"auto"}}>
        <div style={{display:"flex"}} > 
    <div style={{width:"20%",border:"1px solid"}}><p>NEW ARRIVALS</p> <p>CURRENT WEEK</p><li>Monday</li><li>Tuesday</li>
    <li>Wednesday</li> <li>Thursday</li> <li>Friday</li> <li>Saturday</li> </div>
    <div style={{width:"80%",display:"grid",gridTemplateColumns:"30% 30% 30%",gap:"10px",border:"1px solid"}}> 
       {product.map((item)=>{
        return <div key={item.id} ><img width="80%"  src={item.images}alt={item.title} /> 
        <h2>{item.title}</h2> <p>{item.name}</p> <p>{item.price}</p> </div>
       })}
       </div>
       </div>
       <Footer/>
     </div>
     </div>
   )
 }
 
 export default WomenPoducts
 