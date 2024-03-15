import "./styles.css"
import { Link, useLocation } from "react-router-dom";
export default function Header() {
    const location = useLocation()
    return (
        <header id="menu">
            <nav id="items-menu">
                <Link to={"/"} className="text-center">Home</Link>
                <Link to={{ pathname: location.pathname, hash: "#details" }} className="text-center">Informaçoes</Link>
                <Link to={{ pathname: location.pathname, hash: "#about" }} className="text-center">Sobre</Link>
                <Link to={{ pathname: location.pathname, hash: "#contact" }} className="text-center">Agende</Link>
                
            </nav>
        </header>

    )
}