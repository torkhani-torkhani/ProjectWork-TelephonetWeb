import {NavLink} from "react-router";

function Navbar() {
  return (
    <nav className="nav-br">
      <div className="nav-title">
      <h2 className="navTitle" >telephonet web</h2>
      </div>
      <div className="nav-link">
      <NavLink to="/" className="nv-link">home</NavLink>
       <NavLink to="/products" className="nv-link">products</NavLink>
       <NavLink to="/addProduct" className="nv-link">addProduct</NavLink>
       <NavLink to="/cart" className="nv-link">Cart</NavLink>
        <NavLink to="/contact" className="nv-link">contact</NavLink>
        </div>
    </nav>
  )
}

export default Navbar