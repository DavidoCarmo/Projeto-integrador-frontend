import Hero from "../../components/Hero";
import Details from "../../components/Details";
import "./styles.css"
import About from "../../components/About";
import ContactForm from "../../components/Contact";
function Home() {
    return (
        <>
            <Hero />
            <Details />
            <About />
            <ContactForm />
        </>
    )
}

export default Home;