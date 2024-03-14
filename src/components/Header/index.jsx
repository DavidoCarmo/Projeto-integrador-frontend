import "./styles.css"
import { Link, useLocation } from "react-router-dom";
export default function Header() {
    const location = useLocation()
    return (
        <header id="menu">
            <nav id="items-menu">
                <Link to={"/"} className="text-right">Home</Link>
                <Link to={{ pathname: location.pathname, hash: "#details" }} className="text-right">Detalhes</Link>
                <Link to={{ pathname: location.pathname, hash: "#about" }} className="text-right">Sobre</Link>
                <Link to={{ pathname: location.pathname, hash: "#contact" }} className="text-right">Contato</Link>
                <Link to={"/agendamento"} className="text-right">Agendamento</Link>
                <Link to={"/login"} className="text-right">Login</Link>
            </nav>
        </header>

    )
}