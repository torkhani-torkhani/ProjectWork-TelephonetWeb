
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router";

function UppdateProduct() {
    var {id} = useParams()
    var navigate = useNavigate()
    var [cond, setProduct] = useState({
    phoneName: "",
    price: "",
    imageUrl: "",
  });
    useEffect(() => {
        var fetchProduct = async () => {
            try {
                var response = await axios.get(`https://6afc9074892984c4494bbc0a.mockapi.io/phones/phones/${id}`)
                setProduct({
                    phoneName : response.data.phoneName,
                    imageUrl : response.data.imageUrl,
                    price : response.data.price
                })
            }
            catch(error){
                console.log("error with fetch a product"
                )
                console.log("error details:", error.toJSON ? error.toJSON() : error);
            }
        }
        fetchProduct()
    },[id])
    var handleUppdate = async (e) => {
        e.preventDefault()
        var updateData = {
            phoneName: cond.phoneName,
            price: cond.price,
           imageUrl: cond.imageUrl,
        }
        try {
            await axios.put(`https://6afc9074892984c4494bbc0a.mockapi.io/phones/phones/${id}`,updateData)
            navigate("/products")
        }
        catch(error){
            console.log("error with update a product",error)
        }
    }

  return (
    <div>
      <h1>uppdate product</h1>
      <form onSubmit={handleUppdate}>
        <input type="text"
        placeholder='phone name'
        value={cond.phoneName}
        onChange={(e) => setProduct({...cond, phoneName: e.target.value})}
        />
        <input type="text"
        placeholder='price'
        value={cond.price}
        onChange={(e) => setProduct({...cond,price : e.target.value})}
        />
        <input type="text"
        placeholder='image url'
        value={cond.imageUrl}
        onChange={(e) => setProduct({...cond,imageUrl : e.target.value})}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default UppdateProduct