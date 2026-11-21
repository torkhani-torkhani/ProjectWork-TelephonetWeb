import { Link } from "react-router"

function Navbar() {
  return (
    <nav>
      <strong>TelephonetWeb</strong>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add-product">Add Product</Link>
      </div>
    </nav>
  )
}

export default Navbar