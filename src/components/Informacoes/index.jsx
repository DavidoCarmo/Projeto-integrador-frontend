
import './styles.css';
import ImagemPessoa from '../../assets/foto-mulher.avif'
export default function InfoPage() {
    return (
        <section id="info">
            <div id="info-container">
                <h1>Informações sobre a Clínica</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    aliquam, justo eu tincidunt vestibulum, nunc metus varius libero,
                    vel tincidunt quam justo id urna.
                    <h1>mais sobre a Psicanalise</h1>
                </p>
            </div>
            <div id="professional">
                <h1>Jean Marcel</h1>
            </div>
            <div id="photo">
                <img src={ImagemPessoa} alt="" />
            </div>
        </section>
    );


}

