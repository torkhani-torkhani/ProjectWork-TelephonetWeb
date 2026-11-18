import { Link } from "react-router";

function Footer() {
  return (
    <footer id="footer">
      <strong>TelephonetWeb</strong>
      <p>Quality smartphones at honest prices.</p>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <span>support@telephonetweb.com</span>
      </div>
      </footer>
  )
}

export default Footer