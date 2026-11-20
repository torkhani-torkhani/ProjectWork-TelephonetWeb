
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

function AddProducts() {
  var [phoneName,setPhoneName] = useState('oppo')
  var [imageUrl,setImageUrl] = useState("https://oasis.opstatics.com/content/dam/oasis/page/2023/cn/12/12-green.png")
  var [price,setPrice] = useState(799)
  var navigate = useNavigate()
  var handleSubmit = async (e) =>{ e.preventDefault()
  try {
    var newProduct = {
      id: crypto.randomUUID(),
      phoneName : phoneName,
      imageUrl : imageUrl,
      price : Number(price),
    }
 
    await axios.post("https://6afc9074892984c4494bbc0a.mockapi.io/phones/phones",newProduct)
    navigate("/products")
  }
  catch(error){
    console.log("error with add a data",error)
  }

   }

  return (
    <div className="addProdSec">

      <h2 className='addProductTitle'>add product page</h2>
      <form className="addProdForm" onSubmit={handleSubmit}>
        <input
          className="addProdInput"
          type="text"
          placeholder="phone name"
          value={phoneName}
          onChange={(e) => setPhoneName(e.target.value)}
        />
        <input
          className="addProdInput"
          type="text"
          placeholder="image url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          className="addProdInput"
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="addProdBtn" type="submit">
          add
        </button>
      </form>
    </div>
  )
}

export default AddProducts
