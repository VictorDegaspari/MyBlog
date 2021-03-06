import React from 'react';
import Devmobile from './desenvolvimento-web-mobile.png'
import Eu from './eu.jpg'
import MenuVertical from '../../Components/Menu'
import './styles.css';
import { Link } from 'react-router-dom'
import studyIcon from '../../icons/study.svg'
function Home() {
  return (

    

    <div className="App">
      <MenuVertical/>
      <header className="header-home">
      
        <div className="quadrado">
          <h1>Victor Degaspari Desenvolvedor Web</h1>
          <p>criando oportunidades</p>
          <div className="buttons-container">
            <Link to="/work" className="study">
            
            <img src={studyIcon} alt="Estudar"/>
            Trabalho
            </Link>
            </div>
            </div>

      </header>

      <div className="container">

        <div className="acreditamos">
          <p>EM QUE ACREDITAMOS?</p>
          <h2>TRABALHAMOS PARA FORNECER QUALIDADE AO CLIENTE POR UM PREÇO ACESSÍVEL</h2>
        </div>

        <div className="meugrid">
          <div className="textogrid">
            <p></p>
            <p>SOBRE</p>
            <h2>QUEM SOU</h2>
            <p></p>
            <p>Meu nome é Victor Degaspari tenho 18 anos e atualmete cursando Análise e Desenvolvimento na UTFPR.</p>
            <p>Sou um amante da tecnologia, dedico meu tempo estudando programação.</p>
            <p>nas horas livres assisto séries e jogo games online.</p>
            <div className="buttons-container">
            <Link to="/about" className="study">
            
            <img src={studyIcon} alt="Estudar"/>
            Saiba Mais
            </Link>
            </div>
        
          </div>
          <div>
            <img className="eu"
              src={Eu} 
              alt="Victor"/>

          </div>

        </div>

      </div>


      <div className="desenvolvemos">
        <div className="desenvolvimento">
          <img className="dev"
            src={Devmobile} 
            alt="laptop"
            />

        </div>

        <div className="textosgridbaixo">
          <p></p>
          <p>TEAM</p>
          <h2>O QUE FAZEMOS</h2>
          <p></p>
          <p>Fornecemos serviços na área de construção de web sites e aplicativos mobile.</p>
          <p>Já foram feitos diversos projetos, todos com a qualidade de sempre a um preço acessível!</p>
          <div className="buttons-container">
          <Link to="/about" className="study">
          
          <img src={studyIcon} alt="Estudar"/>
          Saiba Mais
          </Link>
          </div>
        </div>
      </div>


      <div className="novidades">
        <p></p>
        <p>Sobre nos</p>
        <h2>Novidades da empresa</h2>
      </div>



      <div className="finalgrid">

        <div>
          <h3>Novos Projetos</h3>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
          elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
          diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                        sem vitae risus tristique posuere.</p>
        </div>

        <div>
          <h3>Contratação</h3>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
          elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
          diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                        sem vitae risus tristique posuere.</p>
        </div>

        <div>
          <h3>Tecnologias em destaque</h3>
         
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
          elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
          diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                        sem vitae risus tristique posuere.</p>
        </div>

      </div>



      <div className="infofinal">
        <h2>Grow your business.</h2>
        <p>Today is the day to build the business of your dreams. Share your mission with the world — and blow your
                customers away.</p>

                <div className="buttons-container">
          <Link to="/contact" className="study">
        
          <img src={studyIcon} alt="Estudar"/>
          Contact
          </Link></div>
      </div>
     <footer>
       Victor Degaspari
     </footer>
    </div>

  )
}



export default Home;
