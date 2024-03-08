import Header from "../../src/components/Header";
import "/.styles.css"
function Home() {
    return (
        <>

            <section id="hero">
                <Header />
                <div id="container">
                    <h1>FRASE MOTIVACIONAL DE IMPACTO</h1>
                    <span className="botao-saiba-mais">Saiba Mais</span>
                </div>
            </section>

            <section id="details">

                <div className="lista">
                    <p>Competencias Proficionais</p>
                    <dl>
                        <dt>Vendas</dt>
                        <dt>Colegio estadual CPM</dt>
                        <dt>Desenvolvedor Web</dt>
                        <dd>Pato Branco</dd>
                    </dl>
                </div>


                <div className="lista">
                    <p>Qualificação Proficionais</p>
                    <dl>
                        <dt>Vendas</dt>
                        <dt>Colegio estadual CPM</dt>
                        <dt>Desenvolvedor Web</dt>
                        <dd>Pato Branco</dd>
                    </dl>
                </div>
            </section>
        </>
    )
}

export default Home;