import Hero from "../../components/Hero";
import Details from "../../components/Informacoes";
import "./styles.css"
import About from "../../components/About";
import ContactForm from "../../components/Agende";
import { FloatButton } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";

function Home() {
    return (
        <>

            <Hero />
            <Details />

            < FloatButton id="whatsapp-button"
                type="primary"
                style={{ width: '60px', height: '60px' }}
                href="https://wa.me/5546999846834"
                target="_blank"
                icon={<WhatsAppOutlined />}
            />

            <About />
            <ContactForm />
        </>
    )
}

export default Home;