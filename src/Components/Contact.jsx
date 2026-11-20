import React from 'react'
import { useNavigate } from "react-router";
function Contact() {
    var navigate = useNavigate()
    var handle = (e) => {
        e.preventDefault()
    navigate("/")
    alert("done")
    }
  return (
    <div className='contactSec'>
      <h2 className='conatactTit'>contact example page</h2>
      <form onSubmit={handle} >
        <input type="text" placeholder='the name' />
        <input type="email" placeholder='email@email.com' />
        <textarea placeholder='message'></textarea>
        <button type='submit' className='ContactBtn'>boutton</button>
      </form>
    </div>
  )
}

export default Contact
