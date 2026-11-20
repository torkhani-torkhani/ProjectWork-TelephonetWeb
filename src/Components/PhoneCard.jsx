
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
function PhoneCard() {
    var[cond,setProduct] = useState({ phoneName: "", image: "", price: "" })
    var {id} = useParams ()
  useEffect(() => {
    var fetchData = async () => {
      try {
        var response = await axios.get(`https://6afc9074892984c4494bbc0a.mockapi.io/phones/phones/${id}`)
    setProduct(response.data)
      }
      catch(error){
        console.log("error with fetching a data" , error)
      }
    }
    fetchData()
  },[id])
  return (
<div className="phone-card-wrapper">
  <div className="phone-card">
    <div className="imgPhoneCardBox">
      <img
        src={cond.imageUrl}
        alt={cond.phoneName}
        className="imgPhoneCard"
      />
    </div>
    <h2>{cond.phoneName}</h2>
    <p>price : {cond.price}</p>
  </div>
</div>
  )
}

export default PhoneCard
