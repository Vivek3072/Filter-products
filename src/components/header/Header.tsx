import { Link } from "react-router-dom"
import ProductLogo from "../../assets/ProductLogo.svg"
import "./Header.scss"

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={ProductLogo} alt="ProductLogo" />
      </Link>
    </div>
  )
}