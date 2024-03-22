import './styles.css';

import ImagemPessoa from '../../assets/foto-mulher.avif'
export default function InfoPage() {
    return (
        <section id="info">
            <div id="info-container">

            <h1 id='inicio01'>Oi, meu nome é Jean!</h1>


        <p id='Texto01'>
          Estou aqui para te acompanhar, escutar e acolher no seu
          mergulho em si mesmo.
        </p>

        <p id='Texto01'>
          Através da escuta analítica, buscamos navegar pela psique, onde
          contem conteúdos desconhecidos e/ou esquecidos por nós, que
          fazem parte tanto do inconscientes individual, quanto do coletivo.
        </p>

        <p id='Texto01'>
          Em um trabalho de parceria, a análise se propõe a ser um espaço
          para elaboração dos conteúdos inconscientes, que acarreta em
          compreendermos melhor nossas angústias, medos, ansiedade e
          qualquer outra queixa que possa estar gerando sofrimento. Assim,
          trazer à consciência possibilita uma vivência em maior harmonia.
        </p>


        <p id='texto04'>
          Hoje, além da clínica, eu trabalho no NAPI (núcleo de apoio
          psicopedagógico e inclusão) da Universidade Anhembi Morumbi,
          auxiliando alunos com transtornos de aprendizagem e/ou deficiência
          a terem uma formação mais inclusiva.
        </p>


        <p id='texto04'>
         Na clínica, atendendo de maneira remota e presencial, realizando um
          trabalho de parceria, respeito e confiança nesse caminho do
          autoconhecimento.
        </p>
        
            </div>
           

            <div id="photo">
                <img src={ImagemPessoa} alt="" />
            </div>
        </section>
    );


}
  
  