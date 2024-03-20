
import { Link } from "react-router-dom";
import Header from "../Header";
import "./styles.css";

export default function Hero() {
    return (
        <section id="hero">
            <div id="container">
                <Header />
                <div id="card">
                    <h1 id="frase">FRASE MOTIVACIONAL DE IMPACTO</h1>
                    <Link to="#about" id="call-to-action">Saiba Mais</Link>
                </div>
            </div>
        </section>
    )
}