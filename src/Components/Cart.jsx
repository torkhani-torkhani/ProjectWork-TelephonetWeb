import React from 'react'

function Cart({ cart }) {
  return (
    <div>
      <div className="cartSec">
        <h1 className='cartTitle'>cart page</h1>
        <p className="cartCount">nums of phones into the cart : {cart.length}</p>

        <div className="cartList">
          {cart.map((product, i) => (
            <div className="cartItem" key={i}>
              <h2>{product.phoneName}</h2>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart
