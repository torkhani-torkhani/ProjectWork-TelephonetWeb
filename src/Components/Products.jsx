import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router';
function Products({addToCart}) {
  var[products,setProducts] = useState([])
  useEffect(()=>{
    var fetchData = async () => {
    try {
      var response = await axios.get("https://6afc9074892984c4494bbc0a.mockapi.io/phones/phones")
      setProducts(response.data)
    }
    catch(error){
      console.log("error with fetching a data" , error)
    }
    }
    fetchData()
  },[])

  var handleDelete = async (id) => {
   try {
    var changedProducts = products.filter((product) => product.id !== id)
    await axios.delete(`https://6afc9074892984c4494bbc0a.mockapi.io/phones/phones/${id}`)
          setProducts(changedProducts)
    }
    catch(error){
      console.log("error with delete a product" , error)
    }
  }
  return (
    <div className='card'>
      {products.map((product)=> (
        <div key={product.id} className='product'>
        <Link to={`/product/${product.id}`}className='productLink' >
        <h2>{product.phoneName}</h2>
        <img src={product.imageUrl} alt="" width="200px" className='imgProduct'/>
        <p>price : {product.price}</p>
       </Link>
       <div className='productction'>
       <button onClick={()=> addToCart(product)} className='btnAdd'>add to cart</button>
        <button onClick={()=> handleDelete(product.id)}className='btnDelete'>delete</button>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Products
